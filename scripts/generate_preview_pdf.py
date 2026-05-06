from pdf_css import *
import os, subprocess

BASE = "/Users/vishalmahto/Desktop/AIML_starterKit/public"

PREVIEW = f"""{CSS}

# AI Engineer Foundation System (Preview)

Stop jumping from tutorial to tutorial. This is exactly why you aren't an AI Engineer yet. Learning AI isn't about finding more resources—it's about having a structured, step-by-step execution system.

---

## 📦 What's Inside the Complete Paid Bundle?

You will get instant access to **41 Premium PDF Study Guides** across 8 core modules:

### 1. Python Foundation (Weeks 1-3)
*   Variables, Loops, Data Types
*   Functions, OOP Basics, File Handling
*   100 Practice Problems

### 2. DSA Parallel Track (Weeks 2-6)
*   Arrays, Strings, Two Pointers
*   Hashing, Recursion, Stack, Queue
*   Trees, Graphs, DP Basics
*   300 Curated Problems to clear technical rounds

### 3. Data Handling & ML Core (Weeks 4-7)
*   NumPy, Pandas, CSV Processing
*   Regression, Classification, Evaluation Metrics

### 4. Advanced ML & Deep Learning (Weeks 7-12)
*   Feature Engineering, Pipelines, Tuning
*   Neural Networks, CNNs, RNNs, Transformers

### 5. Execution & Career System (Ongoing)
*   Discipline Framework & Weekly Trackers
*   Interview Preparation Guide
*   Resume & Portfolio Templates

---

## 🎬 Curated Video Integration
Every module contains embedded links to the **absolute best free resources on YouTube**, so you never have to search.
*   **English:** NeetCode, StatQuest, 3Blue1Brown, Corey Schafer
*   **Hindi:** Apna College, CampusX

---

## 🎯 Sample Daily Execution Plan
*(Example from Day 1)*
1. **Concept:** Strings and Variables
2. **Watch:** Corey Schafer - Python Strings (15 mins)
3. **Practice:** Write a script to reverse a string and count vowels.
4. **Tracker:** Mark Complete in Excel tracker.

---

## 🚀 Ready to Start?

Stop wasting time searching, start executing. 
Get the complete 16-week execution system, all 41 PDFs, and 700+ practice problems today.

👉 **{L("https://aiml-starterkit.vercel.app/#pricing", "Click Here to Get the Complete System for just ₹49")}**

{FOOTER}"""

pdf = os.path.join(BASE, "AI_Engineer_Foundation_System_Preview.pdf")
mdp = pdf.replace(".pdf", ".md")
os.makedirs(os.path.dirname(pdf), exist_ok=True)
with open(mdp, "w") as f:
    f.write(PREVIEW)
print(f"Generating Preview PDF ...")
try:
    subprocess.run(["npx","md-to-pdf",mdp], cwd=os.path.dirname(mdp), check=True)
    print("Success!")
except Exception as e:
    print(f"FAILED: {e}")
if os.path.exists(mdp):
    os.remove(mdp)
