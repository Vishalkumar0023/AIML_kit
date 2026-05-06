from pdf_css import *

CONTENT = {}

# ─── 00 Getting Started ───
CONTENT["00_Getting_Started/01_Welcome_Guide.pdf"] = f"""{CSS}

# Welcome to the AI Engineer Foundation System

Congratulations on investing in your future. This system is designed to take you from absolute beginner to AI/ML-ready — step by step, with zero guesswork.

---

## 🎯 What This System Is

This is **not** a random collection of notes. It is a **structured execution system** that tells you:
* **What** to study each day
* **How long** to study it
* **Which resources** to use (curated YouTube links included)
* **What to build** to prove you learned it
* **How to track** your progress

## 📂 How the Folders Are Organized

| Folder | Purpose |
|--------|---------|
| `00_Getting_Started` | Welcome, rules, roadmap, schedule |
| `01_Python_Foundation` | Python basics in 15 days |
| `02_DSA_Parallel_Track` | Data structures practice alongside Python |
| `03_Data_Handling` | NumPy, Pandas, data cleaning |
| `04_Machine_Learning_Core` | Regression, classification, metrics |
| `05_Advanced_ML` | Feature engineering, pipelines, tuning |
| `06_Deep_Learning` | Neural networks, CNN, RNN, transformers |
| `07_AI_Engineer` | FastAPI, Docker, model serving |
| `08_AI_Architect` | System design, pipelines, monitoring |
| `09_Projects_Portfolio` | Beginner to advanced project ideas |
| `10_Problem_Sets` | Python, DSA, ML practice problems |
| `11_Resource_Library` | All curated English & Hindi links |
| `12_Career_Kit` | Resume, GitHub, interview prep |
| `13_Reference_System` | Cheatsheets and readiness checklist |
| `14_DSA_For_AI_ML` | Must-do DSA for AI/ML students |
| `15_Execution_System` | Discipline framework & weekly reviews |

## ⚡ Your First Steps

1. Read `02_How_to_Use_This_System.pdf` next
2. Review `04_Study_Rules_and_Discipline.pdf`
3. Open `05_Roadmap_Overview.pdf` to see the full path
4. Start `01_Python_Foundation/Day01_to_Day05` on Day 1

**Rule:** Do not skip ahead. Follow the sequence.
{FOOTER}"""

CONTENT["00_Getting_Started/02_How_to_Use_This_System.pdf"] = f"""{CSS}

# How to Use This System

This guide explains the correct way to work through the AI Engineer Foundation System so you get maximum results.

---

## 📋 Daily Study Method

1. **Open the PDF** for today's topic
2. **Read the notes** — understand concepts first
3. **Watch the linked video** — use the curated YouTube link provided
4. **Code along** — write every example yourself, do not copy-paste
5. **Solve the practice problems** from `10_Problem_Sets`
6. **Track your progress** in the Excel tracker (`15_Execution_System`)

## ⏱ Recommended Daily Schedule

| Time Block | Activity | Duration |
|-----------|----------|----------|
| Morning | Read PDF notes | 30–45 min |
| Afternoon | Watch video + code along | 60–90 min |
| Evening | Practice problems | 30–45 min |
| Night | Review + update tracker | 15 min |

## 🚫 Common Mistakes to Avoid

* **Don't skip Python** — jumping to ML without Python mastery will waste months
* **Don't just watch** — passive video watching teaches nothing
* **Don't hoard resources** — use only what's in this system
* **Don't rush** — consistency beats speed every time

## 📊 How to Know You're Progressing

* You can write Python code without looking at notes
* You can explain concepts in your own words
* Your GitHub has real projects, not just cloned repos
* You can solve easy/medium DSA problems independently
{FOOTER}"""

CONTENT["00_Getting_Started/04_Study_Rules_and_Discipline.pdf"] = f"""{CSS}

# Study Rules and Discipline

Talent is common. Discipline is rare. These rules will separate you from 95% of students.

---

## 📏 The 7 Non-Negotiable Rules

### Rule 1: Study Every Day
* Minimum 2 hours per day, no exceptions
* Missing one day makes it easier to miss the next

### Rule 2: Code Before You Watch
* Try to solve problems yourself first
* Only watch the video after you've attempted it

### Rule 3: No Multi-Tabbing
* Close Instagram, YouTube shorts, and WhatsApp while studying
* Use a website blocker if needed

### Rule 4: Write Notes by Hand
* After reading the PDF, write key points in your own notebook
* Handwriting forces your brain to process information

### Rule 5: The 15-Minute Rule
* If stuck on a problem for 15 minutes, check the hint/solution
* Don't waste 3 hours on one problem — move forward

### Rule 6: Build Something Every Week
* Even a small script counts — a calculator, a to-do list, a data cleaner
* Push everything to GitHub

### Rule 7: Review Every Sunday
* Use the Weekly Review Template from `15_Execution_System`
* What did you learn? What was hard? What will you do next week?

## 🔥 Motivation Tip

You don't need motivation. You need a system. This is your system. Follow it.
{FOOTER}"""

CONTENT["00_Getting_Started/05_Roadmap_Overview.pdf"] = f"""{CSS}

# AI Engineer Foundation — Complete Roadmap Overview

This is your bird's-eye view of the entire learning journey. Each phase builds on the previous one.

---

## 🗺 Phase 1: Python Foundation (Weeks 1–3)
* Variables, data types, operators
* Conditions, loops, strings
* Functions, lists, tuples, dictionaries
* File handling, error handling
* OOP basics (classes, objects, inheritance)
* **Video:** {L("https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU","Corey Schafer Playlist")} | {L("https://www.youtube.com/watch?v=UrsmFxEIp5k","CodeWithHarry")}

## 🗺 Phase 2: DSA Parallel Track (Weeks 2–6)
* Arrays, strings, two pointers
* Hashing, sliding window
* Recursion, stacks, queues
* Trees, graphs (basics)
* Dynamic programming (intro)
* **Video:** {L("https://www.youtube.com/playlist?list=PLtWSRlKFDhsqLgNOQpXALOGrRMweMJT32","NeetCode DSA")} | {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Apna College DSA")}

## 🗺 Phase 3: Data Handling (Weeks 4–5)
* NumPy arrays, operations, broadcasting
* Pandas DataFrames, Series, indexing
* CSV reading, missing values, data cleaning
* **Video:** {L("https://www.youtube.com/watch?v=r-uOLxNrNk8","freeCodeCamp Data Analysis")} | {L("https://www.youtube.com/watch?v=CpPLLp3snK4&list=PLKnIA16_Rmvb-ToL3RQ_bwxG4_ND-0-DT","CampusX NumPy")}

## 🗺 Phase 4: Machine Learning Core (Weeks 5–7)
* Regression (linear, logistic)
* Classification (KNN, decision trees, random forest)
* Metrics (accuracy, precision, recall, F1, AUC)
* **Video:** {L("https://www.youtube.com/@StatQuest/playlists","StatQuest")} | {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","CampusX 100 Days of ML")}

## 🗺 Phase 5: Advanced ML (Weeks 7–9)
* Feature engineering, feature selection
* Sklearn pipelines, column transformers
* GridSearchCV, RandomizedSearchCV
* Hyperparameter tuning strategies

## 🗺 Phase 6: Deep Learning (Weeks 9–12)
* Neural network fundamentals
* CNNs for image tasks
* RNNs for sequential data
* Transformers and attention mechanism

## 🗺 Phase 7: AI Engineering & Architecture (Weeks 12–16)
* FastAPI for serving models
* Docker basics for ML deployment
* ML system design principles
* Model monitoring and data pipelines

## 🗺 Phase 8: Career & Portfolio (Ongoing)
* Build 3–5 portfolio projects
* GitHub profile optimization
* Resume writing for AI/ML roles
* Interview preparation
{FOOTER}"""

CONTENT["00_Getting_Started/06_Success_Framework.pdf"] = f"""{CSS}

# Success Framework

This framework defines what "success" means at each stage. Use it to self-assess.

---

## ✅ Level 1 — Python Ready
- [ ] Can write Python scripts without referring to notes
- [ ] Understands loops, functions, OOP, file handling
- [ ] Has solved 50+ Python practice problems
- [ ] Has 2+ Python projects on GitHub

## ✅ Level 2 — Data Ready
- [ ] Can load, clean, and analyze CSV data with Pandas
- [ ] Understands NumPy arrays, shapes, and operations
- [ ] Has completed at least 1 data cleaning project
- [ ] Can create basic visualizations

## ✅ Level 3 — ML Ready
- [ ] Understands regression and classification concepts
- [ ] Can train, evaluate, and tune models using Scikit-Learn
- [ ] Knows metrics: accuracy, precision, recall, F1, AUC
- [ ] Has built 2+ ML projects end-to-end

## ✅ Level 4 — Deep Learning Ready
- [ ] Understands neural network architecture and backpropagation
- [ ] Has built a CNN or RNN project
- [ ] Knows the basics of transformers and attention
- [ ] Can explain model choices and trade-offs

## ✅ Level 5 — Job/Internship Ready
- [ ] GitHub profile has 5+ projects with READMEs
- [ ] Resume highlights AI/ML skills and projects
- [ ] Can answer basic ML interview questions confidently
- [ ] Has deployed at least 1 model as an API

## 📊 How to Use This
Print this page. Check off items as you complete them. Once a level is 100% done, move to the next.
{FOOTER}"""
