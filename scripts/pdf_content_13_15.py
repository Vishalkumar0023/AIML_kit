from pdf_css import *

CONTENT = {}

# ─── 13 Reference System ───
CONTENT["13_Reference_System/Cheatsheets_and_Debugging.pdf"] = f"""{CSS}

# Cheatsheets & Debugging Guide

Quick reference sheets for Python, NumPy, Pandas, and common debugging strategies.

---

## 🐍 Python Cheatsheet

| Concept | Syntax |
|---------|--------|
| Print | `print("Hello")` |
| Variable | `x = 10` |
| Input | `name = input("Enter name: ")` |
| If-Else | `if x > 5: ... elif ... else: ...` |
| For Loop | `for i in range(10): ...` |
| While Loop | `while x > 0: ...` |
| Function | `def func(a, b): return a + b` |
| List | `lst = [1, 2, 3]` |
| Dictionary | `d = {{"key": "value"}}` |
| List Comp | `[x**2 for x in range(5)]` |
| Lambda | `f = lambda x: x * 2` |
| Try-Except | `try: ... except ValueError: ...` |
| File Read | `with open("f.txt") as f: data = f.read()` |
| Class | `class Dog: def __init__(self, name): self.name = name` |

## 📊 NumPy Cheatsheet

| Operation | Code |
|-----------|------|
| Create array | `np.array([1,2,3])` |
| Zeros | `np.zeros((3,3))` |
| Shape | `arr.shape` |
| Reshape | `arr.reshape(2,3)` |
| Sum | `arr.sum(axis=0)` |
| Mean | `arr.mean()` |
| Filter | `arr[arr > 5]` |
| Dot product | `np.dot(a, b)` |

## 📊 Pandas Cheatsheet

| Operation | Code |
|-----------|------|
| Read CSV | `pd.read_csv("file.csv")` |
| Head | `df.head()` |
| Info | `df.info()` |
| Shape | `df.shape` |
| Select col | `df["col"]` |
| Filter | `df[df["col"] > 5]` |
| Group | `df.groupby("col").mean()` |
| Missing | `df.isnull().sum()` |
| Fill NA | `df.fillna(0)` |
| Sort | `df.sort_values("col")` |

## 🐛 Debugging Guide

### Common Errors and Fixes
| Error | Cause | Fix |
|-------|-------|-----|
| `SyntaxError` | Typo, missing colon/bracket | Check the line mentioned |
| `IndentationError` | Wrong spaces/tabs | Use consistent 4 spaces |
| `NameError` | Variable not defined | Check spelling, define before use |
| `TypeError` | Wrong type in operation | Use `type()` to check, cast if needed |
| `IndexError` | List index out of range | Check `len()` before accessing |
| `KeyError` | Dict key doesn't exist | Use `.get()` with default value |
| `FileNotFoundError` | File path wrong | Check path, use absolute path |
| `ModuleNotFoundError` | Package not installed | Run `pip install package_name` |

### Debugging Strategy
1. Read the error message carefully — line number + error type
2. Add `print()` statements to trace values
3. Use `type()` and `len()` to verify data
4. Google the exact error message
5. Use the 15-minute rule — move on if stuck too long
{FOOTER}"""

CONTENT["13_Reference_System/ML_Readiness_Checklist.pdf"] = f"""{CSS}

# ML Readiness Self-Assessment Checklist

Use this checklist before starting any ML course or project. If you can't check 80% of these, go back and strengthen your foundations.

---

## ✅ Python Foundations
- [ ] I can write Python scripts without referring to documentation
- [ ] I understand variables, data types, and type conversion
- [ ] I can write if/elif/else conditions without errors
- [ ] I can use for and while loops, including nested loops
- [ ] I can write functions with parameters and return values
- [ ] I understand lists, tuples, sets, and dictionaries
- [ ] I can use list comprehensions
- [ ] I can handle files (read, write, append)
- [ ] I know try/except for error handling
- [ ] I understand OOP basics (classes, objects, inheritance)

## ✅ Data Handling
- [ ] I can create and manipulate NumPy arrays
- [ ] I understand array shapes, reshaping, and broadcasting
- [ ] I can load CSV files with Pandas
- [ ] I can filter, sort, and group DataFrames
- [ ] I can handle missing values (detect, drop, fill)
- [ ] I can create new columns from existing ones
- [ ] I understand the difference between Series and DataFrame

## ✅ Math & Logic
- [ ] I understand basic algebra (equations, slopes)
- [ ] I know what a function is in math (input → output)
- [ ] I understand probability basics (chance, distribution)
- [ ] I can interpret a graph (x-axis, y-axis, trend)
- [ ] I understand the concept of optimization (minimize/maximize)

## ✅ Tools & Environment
- [ ] I have Python 3.x installed
- [ ] I can use VS Code or Jupyter Notebook
- [ ] I know how to install packages with pip
- [ ] I have a GitHub account with at least 2 projects
- [ ] I can use git basics (clone, add, commit, push)

## 📊 Your Score
* 0–10 checked: Go back to Python Foundation
* 11–20 checked: Strengthen Data Handling
* 21–27 checked: You're ready for ML — start Module 04
{FOOTER}"""

# ─── 14 DSA For AI ML ───
CONTENT["14_DSA_For_AI_ML/Must_Do_DSA_for_AIML_Students.pdf"] = f"""{CSS}

# Must-Do DSA for AI/ML Students

You don't need competitive programming-level DSA for AI/ML, but you need enough to write efficient code and clear interviews.

---

## 🎯 Priority Topics for AI/ML Students

### Tier 1 — Must Know (Focus Here)
* **Arrays:** Traversal, searching, sorting, two pointers
* **Strings:** Manipulation, pattern matching, parsing
* **Hashing:** Hash maps for O(1) lookup — used everywhere in ML data processing
* **Sorting:** Know at least quicksort, mergesort, and when to use which
* **Searching:** Binary search — critical for understanding ML algorithms

### Tier 2 — Should Know
* **Stacks & Queues:** Used in backtracking, BFS/DFS
* **Recursion:** Understand recursive thinking — used in trees and divide-and-conquer
* **Sliding Window:** Common interview pattern, useful for time-series data
* **Linked Lists:** Understand the concept, less common in ML interviews

### Tier 3 — Good to Know (Later)
* **Trees:** Binary trees, BST — used in decision trees
* **Graphs:** BFS, DFS — used in recommendation systems, social networks
* **Dynamic Programming:** Optimization problems — interview favorite
* **Heaps:** Priority queues — used in some ML algorithms

## 📊 How Much DSA is Enough for AI/ML?
* Solve 100–150 problems total (not 500+)
* Focus on Easy and Medium difficulty
* LeetCode or GeeksforGeeks are sufficient
* Spend 30–45 minutes daily alongside your main learning

## 🛠 Practice Plan
| Week | Focus | Problems |
|------|-------|----------|
| 1–2 | Arrays + Strings | 30 problems |
| 3–4 | Hashing + Sliding Window | 20 problems |
| 5–6 | Sorting + Searching | 20 problems |
| 7–8 | Recursion + Stacks | 15 problems |
| 9–10 | Trees + Graphs (basics) | 15 problems |

---

## 🎬 Video Resources

### English — NeetCode
* {L("https://www.youtube.com/@NeetCode/playlists","NeetCode — All DSA Playlists")}
* {L("https://www.youtube.com/playlist?list=PLtWSRlKFDhsqLgNOQpXALOGrRMweMJT32","DSA Beginners Course")}
* {L("https://www.youtube.com/watch?v=IiDuXLqV6e4","Arrays & Hashing Masterclass")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series Lecture 1")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist")}
{FOOTER}"""

# ─── 15 Execution System ───
CONTENT["15_Execution_System/01_Discipline_Framework.pdf"] = f"""{CSS}

# Discipline Framework

Discipline is the engine that converts knowledge into results. This framework makes discipline systematic.

---

## 🔧 The 5 Pillars of Study Discipline

### Pillar 1: Fixed Schedule
* Study at the same time every day
* Morning or evening — pick one and stick to it
* Minimum 2 hours daily, 3+ on weekends
* Block the time on your calendar like a meeting

### Pillar 2: Single-Task Focus
* One topic at a time. No multitasking.
* Phone on silent or in another room
* Close all browser tabs except what you're studying
* Use the Pomodoro technique: 25 min focus → 5 min break

### Pillar 3: Active Learning
* Don't just read — write code
* Don't just watch — pause and implement
* Don't just highlight — explain it to yourself out loud
* Write notes in your own words after each session

### Pillar 4: Progress Tracking
* Use the Progress Tracker Excel daily
* Mark topics as: Not Started / In Progress / Done
* Review your tracker every Sunday
* Celebrate small wins — completing a module matters

### Pillar 5: Accountability
* Tell someone (friend, mentor, online community) about your plan
* Post weekly updates on LinkedIn or Twitter
* Join the Telegram group for peer accountability
* If you miss a day, don't skip the next one

## 📋 Daily Routine Template
| Time | Activity |
|------|----------|
| 8:00–8:30 | Review yesterday's notes |
| 8:30–10:00 | New topic: read PDF + watch video |
| 10:00–10:15 | Break |
| 10:15–11:00 | Code along + practice problems |
| 11:00–11:15 | Update tracker + plan tomorrow |
{FOOTER}"""

CONTENT["15_Execution_System/03_Weekly_Review_Template.pdf"] = f"""{CSS}

# Weekly Review Template

Fill this out every Sunday. It takes 15 minutes and keeps you on track.

---

## 📅 Week: _____ to _____

### ✅ What I Completed This Week
- [ ] Topic 1: _____
- [ ] Topic 2: _____
- [ ] Topic 3: _____
- [ ] Problems solved: _____ (count)
- [ ] Projects worked on: _____

### 📊 Hours Studied
| Day | Hours |
|-----|-------|
| Monday | ___ |
| Tuesday | ___ |
| Wednesday | ___ |
| Thursday | ___ |
| Friday | ___ |
| Saturday | ___ |
| Sunday | ___ |
| **Total** | **___** |

### 🔴 What Was Difficult?
* _____
* _____

### 🟢 What Went Well?
* _____
* _____

### 📋 Plan for Next Week
* Topic 1: _____
* Topic 2: _____
* Goal: _____

### 💡 Key Insight of the Week
Write one thing you learned that changed how you think about programming or AI/ML:

_____

---

## 📏 Weekly Score (Rate yourself 1–10)
* Consistency: ___/10
* Understanding: ___/10
* Practice: ___/10
* Overall: ___/10

**If your overall score is below 6 for 2 weeks in a row, revisit the Discipline Framework.**
{FOOTER}"""
