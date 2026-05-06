#!/usr/bin/env python3
"""Generate all PDFs for the AI Engineer Foundation System paid bundle."""

import os, sys, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from pdf_content_00 import CONTENT as C00
from pdf_content_01_03 import CONTENT as C01
from pdf_content_02 import CONTENT as C02
from pdf_content_03_04 import CONTENT as C03
from pdf_content_05_06 import CONTENT as C05
from pdf_content_07_08 import CONTENT as C07
from pdf_content_10_14 import CONTENT as C10
from pdf_content_11 import CONTENT as C11
from pdf_content_11_12 import CONTENT as C12
from pdf_content_13_15 import CONTENT as C13

BASE = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System"

ALL = {}
for d in [C00, C01, C02, C03, C05, C07, C10, C11, C12, C13]:
    ALL.update(d)

ok = 0
fail = 0
for rel, md in ALL.items():
    pdf = os.path.join(BASE, rel)
    mdp = pdf.replace(".pdf", ".md")
    os.makedirs(os.path.dirname(pdf), exist_ok=True)
    with open(mdp, "w") as f:
        f.write(md)
    print(f"Generating: {rel} ...")
    try:
        subprocess.run(["npx","md-to-pdf",mdp], cwd=os.path.dirname(mdp),
                        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        ok += 1
    except Exception as e:
        print(f"  FAILED: {e}")
        fail += 1
    if os.path.exists(mdp):
        os.remove(mdp)

print(f"\n{'='*50}")
print(f"DONE: {ok} generated, {fail} failed, {len(ALL)} total")

print(f"\n--- PDFs not in content map ---")
for root, dirs, files in os.walk(BASE):
    for f in files:
        if f.endswith(".pdf"):
            rel = os.path.relpath(os.path.join(root, f), BASE)
            if rel not in ALL:
                print(f"  NOT REGENERATED: {rel}")
