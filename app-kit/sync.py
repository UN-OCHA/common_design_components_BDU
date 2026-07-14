#!/usr/bin/env python3
"""
OCHA App Kit — sync.

Pushes ocha-app-kit.css (the source of truth) into every app in apps.json.
Edit the kit, run `python3 sync.py`, and every registered app updates.

  file   app  -> the whole kit is copied to the app's CSS file.
  inline app  -> the kit (or just its :root tokens, scope="tokens") replaces the
                 text BETWEEN the app's markers inside its self-contained HTML.

Run:  python3 sync.py                 # all apps
      python3 sync.py --app QuickVid  # one app (name substring)
      python3 sync.py --check         # report only, write nothing
"""
import argparse
import json
import os
import re
import sys

import handoffs                                   # shared ledger parser (single source of truth)

HERE = os.path.dirname(os.path.abspath(__file__))


def load_kit():
    return open(os.path.join(HERE, "ocha-app-kit.css"), encoding="utf-8").read()


def tokens_block(css):
    """The :root {...} block between the @tokens-start / @tokens-end markers."""
    m = re.search(r"@tokens-start.*?\*/\s*(:root\s*\{.*?\n\})", css, re.S)
    return m.group(1) if m else None


def payload(kit, app):
    if app.get("scope") == "tokens":
        blk = tokens_block(kit)
        if not blk:
            raise SystemExit("Kit has no @tokens-start/@tokens-end markers.")
        return blk
    return kit


def sync_file(app, data, check):
    target = app["target"]
    if not os.path.isdir(os.path.dirname(target)):
        return f"SKIP  {app['name']}: folder missing ({os.path.dirname(target)})"
    old = open(target, encoding="utf-8").read() if os.path.exists(target) else None
    if old == data:
        return f"ok    {app['name']}: already up to date"
    if not check:
        with open(target, "w", encoding="utf-8") as f:
            f.write(data)
    return f"{'would write' if check else 'WROTE'} {app['name']}: {target}"


def sync_inline(app, data, check):
    target = app["target"]
    if not os.path.exists(target):
        return f"SKIP  {app['name']}: file missing ({target})"
    s, e = app["marker_start"], app["marker_end"]
    html = open(target, encoding="utf-8").read()
    if s not in html or e not in html:
        return (f"SKIP  {app['name']}: markers not found. Add once, inside a <style>:\n"
                f"        {s}\n        {e}\n"
                f"      (put them around the app's :root token block).")
    block = f"{s}\n{data}\n{e}"
    new = re.sub(re.escape(s) + r".*?" + re.escape(e), lambda _: block, html, count=1, flags=re.S)
    if new == html:
        return f"ok    {app['name']}: already up to date"
    if not check:
        with open(target, "w", encoding="utf-8") as f:
            f.write(new)
    return f"{'would write' if check else 'WROTE'} {app['name']}: {target} (between markers)"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--app", help="only sync apps whose name contains this")
    ap.add_argument("--check", action="store_true", help="report only, write nothing")
    args = ap.parse_args()

    reg = json.load(open(os.path.join(HERE, "apps.json"), encoding="utf-8"))
    kit = load_kit()
    apps = [a for a in reg["apps"] if not args.app or args.app.lower() in a["name"].lower()]
    if not apps:
        print("No matching apps.")
        return
    print(f"OCHA App Kit — syncing {len(apps)} app(s){' [check]' if args.check else ''}\n")
    for app in apps:
        try:
            data = payload(kit, app)
            fn = sync_inline if app["type"] == "inline" else sync_file
            print("  " + fn(app, data, args.check))
        except Exception as exc:                          # noqa: BLE001
            print(f"  ERROR {app['name']}: {exc}")
    print("\nDone. (Edit the kit, re-run this, and every app updates.)")

    pending = handoffs.open_summary()
    if pending:
        print("\n⚠  OPEN HANDOFFS — these need another Claude session (see app-kit/HANDOFFS.md):")
        for p in pending:
            print("   • " + p)
        print("\n   → Remind Javier to PROMPT THE DESIGN SYSTEM SESSION to mirror kit changes in Storybook.")


if __name__ == "__main__":
    main()
