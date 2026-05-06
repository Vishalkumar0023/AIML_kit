from pdf_css import *

CONTENT = {}

# ─── 12 Career Kit ───
CONTENT["12_Career_Kit/Interview_Prep_Guide.pdf"] = f"""{CSS}

# Interview Preparation Guide

This guide covers the most commonly asked Python and ML questions in internship and fresher interviews.

---

## 🐍 Python Interview Questions (Top 25)

1. **What is Python?** — High-level, interpreted, general-purpose language.
2. **Mutable vs Immutable?** — Lists are mutable, tuples and strings are immutable.
3. **List vs Tuple?** — Lists can be changed after creation, tuples cannot.
4. **What is a dictionary?** — Key-value pairs with O(1) lookup.
5. **What are *args and **kwargs?** — *args for positional, **kwargs for keyword arguments.
6. **What is a lambda function?** — Anonymous function: `lambda x: x*2`
7. **List comprehension?** — `[x**2 for x in range(10)]`
8. **What is `self`?** — Reference to the current instance of a class.
9. **Difference between `==` and `is`?** — `==` checks value, `is` checks identity.
10. **What is a decorator?** — A function that modifies another function's behavior.
11–25: Exception handling, file handling, generators, GIL, shallow vs deep copy, virtual environments...

## 🤖 ML Interview Questions (Top 25)

1. **Supervised vs Unsupervised learning?** — Labeled vs unlabeled data.
2. **What is overfitting?** — Model learns noise instead of patterns.
3. **Bias-variance tradeoff?** — Low bias + low variance = ideal model.
4. **What is cross-validation?** — K-fold evaluation for robust performance estimation.
5. **Precision vs Recall?** — Precision = correct positives / predicted positives. Recall = correct positives / actual positives.
6. **What is gradient descent?** — Optimization algorithm that minimizes the loss function.
7. **Random Forest vs Decision Tree?** — RF uses many trees and reduces overfitting.
8. **What is feature engineering?** — Creating new features from raw data.
9. **What is regularization?** — Penalty to prevent overfitting (L1 = Lasso, L2 = Ridge).
10. **When to use which algorithm?** — Depends on data size, type, and problem.
11–25: PCA, AUC-ROC, data drift, ensemble methods, hyperparameter tuning...

## 💡 Tips for Interviews
* Practice explaining concepts out loud
* Always be ready with a project walkthrough
* Say "I don't know" honestly rather than guessing
* Focus on fundamentals — interviewers test depth, not breadth
{FOOTER}"""

CONTENT["12_Career_Kit/GitHub_Guide_and_README_Templates.pdf"] = f"""{CSS}

# GitHub Guide & README Templates

A strong GitHub profile is your portfolio. Here's how to make it professional.

---

## 📂 Profile Setup
1. Create a profile README (repo named same as your username)
2. Add a short bio: "BTech CSE | AI/ML Learner | Building projects"
3. Pin your best 4–6 repositories
4. Use consistent repo naming: `project-name` (lowercase, hyphens)

## 📝 README Template for ML Projects

```markdown
# Project Title

Brief one-line description of what this project does.

## Problem Statement
What problem does this solve? Why does it matter?

## Dataset
- Source: [Kaggle/UCI/Custom]
- Size: X rows, Y features
- Target variable: [column name]

## Approach
1. Data cleaning and EDA
2. Feature engineering
3. Model selection and training
4. Evaluation and results

## Results
| Model | Accuracy | F1 Score |
|-------|----------|----------|
| Logistic Regression | 85% | 0.82 |
| Random Forest | 91% | 0.89 |

## How to Run
1. Clone the repo
2. Install requirements: pip install -r requirements.txt
3. Run: python main.py

## Tech Stack
Python, Pandas, Scikit-Learn, Matplotlib

## Author
Your Name — [LinkedIn](link)
```

## 🚫 Common GitHub Mistakes
* Empty repos with no README
* Jupyter notebooks with no explanation
* No .gitignore (pushing data files, __pycache__)
* Forked repos pinned instead of your own projects
{FOOTER}"""

CONTENT["12_Career_Kit/Resume_Project_Section_Examples.pdf"] = f"""{CSS}

# Resume — Project Section Examples

Your resume's project section is what gets you shortlisted. Here's how to write it.

---

## 📋 Format
**Project Name** | *Tech Stack* | Date
* One-line description of what the project does
* Key metric or result (accuracy, time saved, etc.)
* Link to GitHub repo

## ✅ Good Examples

### House Price Prediction | *Python, Scikit-Learn, Pandas* | Jan 2026
* Built an end-to-end regression pipeline predicting house prices with 91% R² score
* Applied feature engineering (one-hot encoding, scaling) and GridSearchCV for tuning
* GitHub: github.com/username/house-price-prediction

### Sentiment Analysis API | *Python, LSTM, FastAPI, Docker* | Mar 2026
* Trained an LSTM model on 50K movie reviews with 88% accuracy
* Deployed as a REST API using FastAPI and containerized with Docker
* GitHub: github.com/username/sentiment-api

### Student Performance Dashboard | *Python, Pandas, Streamlit* | Dec 2025
* Analyzed 1000+ student records to identify performance patterns
* Built an interactive Streamlit dashboard with filters and visualizations
* GitHub: github.com/username/student-dashboard

## ❌ Bad Examples (Avoid These)
* "Built a calculator in Python" — too basic
* "Followed a YouTube tutorial on ML" — not original work
* "Used ChatGPT to build a project" — shows no learning

## 💡 Tips
* Quantify results: "91% accuracy", "processed 10K records", "reduced latency by 40%"
* Mention tools specifically: "Scikit-Learn", not just "Python"
* Keep it to 3–5 projects — quality over quantity
* Most recent projects first
{FOOTER}"""
