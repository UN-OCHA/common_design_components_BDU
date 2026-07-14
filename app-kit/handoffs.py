#!/usr/bin/env python3
"""
OCHA App Kit — handoffs ledger CLI.

`HANDOFFS.md` is the human-readable ledger of kit changes owed to another Claude
session (the DS Storybook, or a token-only app like Photo Metadata). This is the
ONE tool that WRITES it, so the format can never drift — but READING the file
directly (any editor, GitHub, another Claude session) is always fine.

    python3 handoffs.py                       # list open items (default)
    python3 handoffs.py list --all            # open + done
    python3 handoffs.py add "**Design System (Storybook):** document X"
    python3 handoffs.py done   h3             # tick, stamp date, move to Done
    python3 handoffs.py reopen h3             # move back to Open
    python3 handoffs.py drop   h3             # remove entirely (mistakes / tests)

Convention: give `add` the full text including the "**Which session:**" prefix.
The date is stamped for you.

Design contract: the `## Open` / `## Done` headings are OWNED by this tool — only
`- [ ]` / `- [x]` items live under them. Put any prose ABOVE `## Open` (the
preamble, preserved verbatim). Every run re-renders canonically and assigns ids to
any item missing one, so hand-edits are tidied the next time the tool runs. Ids are
stable — preserved through done/reopen and kept in the Done archive, so `done h7` is
always unambiguous (only an explicit `drop` frees an id, for mistakes/tests).
"""
import argparse
import datetime
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
PATH = os.path.join(HERE, "HANDOFFS.md")

DONE_COMMENT = "<!-- managed by handoffs.py — newest first -->"
ITEM_RE = re.compile(r"^- \[( |x)\]\s*(?:`h(\d+)`\s*)?(.*)$")
DEFAULT_PREAMBLE = "# Kit handoffs — changes waiting on another Claude session\n"


def load():
    """Return (preamble, open_items, done_items). Item = {id:int|None, text:str}."""
    if not os.path.exists(PATH):
        return (DEFAULT_PREAMBLE, [], [])
    text = open(PATH, encoding="utf-8").read()
    m_open = re.search(r"^## Open\s*$", text, re.M)
    if not m_open:                                   # no managed sections yet
        return (text.rstrip() + "\n", [], [])
    preamble = text[:m_open.start()].rstrip() + "\n"
    rest = text[m_open.end():]
    m_done = re.search(r"^## Done\s*$", rest, re.M)
    open_block = rest[:m_done.start()] if m_done else rest
    done_block = rest[m_done.end():] if m_done else ""

    def parse(block):
        items = []
        for ln in block.splitlines():
            m = ITEM_RE.match(ln.strip())
            if m:
                items.append({"id": int(m.group(2)) if m.group(2) else None,
                              "text": m.group(3).strip()})
        return items

    return (preamble, parse(open_block), parse(done_block))


def assign_ids(open_items, done_items):
    """Give every item a stable id; never reuse (max existing + 1)."""
    nxt = max([it["id"] for it in open_items + done_items if it["id"]] or [0]) + 1
    for it in open_items + done_items:
        if not it["id"]:
            it["id"] = nxt
            nxt += 1


def render(preamble, open_items, done_items):
    out = [preamble.rstrip(), "", "## Open"]
    if open_items:
        out += [f"- [ ] `h{it['id']}` {it['text']}"
                for it in sorted(open_items, key=lambda x: x["id"])]
    else:
        out.append("_None — all clear._")
    out += ["", "## Done", DONE_COMMENT]
    out += [f"- [x] `h{it['id']}` {it['text']}"
            for it in sorted(done_items, key=lambda x: -x["id"])]
    return "\n".join(out).rstrip() + "\n"


def save(state):
    open(PATH, "w", encoding="utf-8").write(render(*state))


def find(items, hid):
    hid = int(str(hid).lstrip("hH"))
    return next((it for it in items if it["id"] == hid), None)


def open_summary():
    """Open items as 'hN  text' strings — imported by sync.py (read-only)."""
    preamble, open_items, done_items = load()
    assign_ids(open_items, done_items)
    return [f"h{it['id']}  {it['text']}" for it in sorted(open_items, key=lambda x: x["id"])]


def main():
    ap = argparse.ArgumentParser(description="OCHA app-kit handoffs ledger")
    sub = ap.add_subparsers(dest="cmd")
    sub.add_parser("list").add_argument("--all", action="store_true")
    sub.add_parser("add").add_argument("text")
    sub.add_parser("done").add_argument("id")
    sub.add_parser("reopen").add_argument("id")
    sub.add_parser("drop").add_argument("id")
    args = ap.parse_args()

    preamble, open_items, done_items = load()
    assign_ids(open_items, done_items)
    today = datetime.date.today().isoformat()
    cmd = args.cmd or "list"

    if cmd == "add":
        nid = max([it["id"] for it in open_items + done_items] or [0]) + 1
        open_items.append({"id": nid, "text": f"{args.text.strip()} — {today}"})
        save((preamble, open_items, done_items))
        print(f"Added h{nid}.")
    elif cmd in ("done", "reopen", "drop"):
        src, dst = (open_items, done_items) if cmd == "done" else (done_items, open_items)
        if cmd == "drop":                            # search both, remove
            it = find(open_items, args.id) or find(done_items, args.id)
            if not it:
                sys.exit(f"No handoff h{str(args.id).lstrip('hH')}.")
            (open_items if it in open_items else done_items).remove(it)
            save((preamble, open_items, done_items))
            print(f"Dropped h{it['id']}.")
        else:
            it = find(src, args.id)
            if not it:
                sys.exit(f"No {'open' if cmd == 'done' else 'done'} handoff "
                         f"h{str(args.id).lstrip('hH')}.")
            src.remove(it)
            if cmd == "done":
                it["text"] += f" · done {today}"
            else:                                    # reopen: strip the done stamp
                it["text"] = re.sub(r"\s*·\s*done \d{4}-\d{2}-\d{2}.*$", "", it["text"])
            dst.append(it)
            save((preamble, open_items, done_items))
            print(f"{'Done' if cmd == 'done' else 'Reopened'} h{it['id']}.")
    else:                                            # list (also tidies the file)
        save((preamble, open_items, done_items))
        if open_items:
            print("Open handoffs:")
            for it in sorted(open_items, key=lambda x: x["id"]):
                print(f"  h{it['id']}  {it['text']}")
        else:
            print("No open handoffs. ✓")
        if getattr(args, "all", False) and done_items:
            print("\nDone:")
            for it in sorted(done_items, key=lambda x: -x["id"]):
                print(f"  h{it['id']}  {it['text']}")


if __name__ == "__main__":
    main()
