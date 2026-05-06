from pdf_css import *

CONTENT = {}

# ─── 08 AI Architect ───
CONTENT["08_AI_Architect/01_ML_System_Design.pdf"] = f"""{CSS}

# ML System Design

System design is how you architect an ML solution end-to-end — from data to deployment.

---

## 🎯 The ML System Design Framework

### Step 1: Problem Definition
* What business problem are you solving?
* Is ML the right approach? (Rule-based might be simpler)
* Define success metrics: accuracy, latency, cost

### Step 2: Data Pipeline
* Data collection → Storage → Preprocessing → Feature engineering
* Batch processing (scheduled) vs streaming (real-time)
* Data versioning: DVC, Delta Lake

### Step 3: Model Selection & Training
* Start simple (logistic regression) before going complex (deep learning)
* Baseline model first → iterate
* Experiment tracking: MLflow, Weights & Biases

### Step 4: Serving & Inference
* Online serving (real-time API) vs Batch serving (scheduled predictions)
* Model registry: versioned model storage
* A/B testing: compare old vs new model in production

### Step 5: Monitoring & Maintenance
* Data drift: input distribution changes over time
* Model drift: model performance degrades
* Retraining strategy: scheduled vs triggered

## 🛠 Practice Tasks
1. Design an ML system for a spam email classifier (draw the architecture)
2. Design an ML system for a product recommendation engine
3. Identify where batch vs real-time serving is appropriate
4. Write a 1-page system design document for a project you've built
{FOOTER}"""

CONTENT["08_AI_Architect/02_Data_Pipelines_and_Scalability.pdf"] = f"""{CSS}

# Data Pipelines and Scalability

Real-world ML uses structured data pipelines, not Jupyter notebooks in production.

---

## 🔧 Data Pipeline Stages
1. **Ingestion:** Collect data from APIs, databases, files, streams
2. **Validation:** Check data quality — missing values, schema changes, outliers
3. **Transformation:** Clean, encode, scale, engineer features
4. **Storage:** Save processed data for training and serving
5. **Versioning:** Track which data was used for which model

## 📊 Tools to Know
| Stage | Tools |
|-------|-------|
| Ingestion | Python scripts, Apache Kafka, Airflow |
| Validation | Great Expectations, Pandera |
| Transformation | Pandas, Spark, dbt |
| Storage | PostgreSQL, S3, BigQuery |
| Orchestration | Airflow, Prefect, Dagster |

## 📈 Scalability Concepts
* **Vertical scaling:** Bigger machine (more RAM, GPU)
* **Horizontal scaling:** More machines (distributed computing)
* **When to scale:** When data exceeds memory or training takes too long
* **Start simple:** Pandas handles millions of rows. Use Spark only when needed.

## 🛠 Practice Tasks
1. Build a simple data pipeline: read CSV → clean → save processed CSV
2. Add data validation checks (missing values, type checks)
3. Schedule a pipeline to run daily using a cron job or Airflow
4. Document your pipeline architecture in a diagram
{FOOTER}"""

CONTENT["08_AI_Architect/03_Monitoring_Models.pdf"] = f"""{CSS}

# Monitoring Models in Production

A deployed model without monitoring is a ticking time bomb.

---

## 🎯 What to Monitor

### Model Performance
* Track accuracy/F1/RMSE over time
* Set alert thresholds (e.g., if accuracy drops below 85%)
* Compare predictions vs actual outcomes (when labels become available)

### Data Drift
* Input data distribution changes → model predictions become unreliable
* Example: model trained on summer data, deployed in winter
* Detect using statistical tests (KS test, PSI)

### Concept Drift
* The relationship between features and target changes
* Example: customer behavior changes after a pandemic
* Requires retraining with fresh data

## 🔧 Monitoring Tools
| Tool | Purpose |
|------|---------|
| Evidently AI | Data & model drift dashboards |
| Prometheus + Grafana | Infrastructure monitoring |
| MLflow | Experiment and model tracking |
| Custom logging | Simple but effective for small teams |

## 📋 Monitoring Checklist
- [ ] Log every prediction with timestamp and input features
- [ ] Track prediction distribution daily
- [ ] Set up alerts for performance drops
- [ ] Schedule weekly data drift checks
- [ ] Define retraining trigger criteria
- [ ] Document the monitoring setup

## 🛠 Practice Tasks
1. Add logging to your FastAPI prediction endpoint
2. Create a simple dashboard that shows prediction counts per day
3. Simulate data drift and observe model performance change
4. Write a retraining trigger script
{FOOTER}"""

# ─── 10 Problem Sets ───
CONTENT["10_Problem_Sets/Python_100_Problems.pdf"] = f"""{CSS}

# Python 100 Practice Problems

Solve these problems in order. Each section builds on the previous one.

---

## 📝 Section 1: Basics (Problems 1–20)
1. Print "Hello World"
2. Take user input and greet them by name
3. Add two numbers from user input
4. Check if a number is even or odd
5. Find the largest of three numbers
6. Print numbers 1 to 100
7. Print even numbers from 1 to 50
8. Calculate factorial of a number
9. Check if a number is prime
10. Print Fibonacci series up to n terms
11. Reverse a string
12. Check if a string is a palindrome
13. Count vowels in a string
14. Convert Celsius to Fahrenheit
15. Calculate simple interest
16. Swap two variables without a third variable
17. Find the sum of digits of a number
18. Check if a year is a leap year
19. Generate multiplication table for a number
20. Find GCD of two numbers

## 📝 Section 2: Data Structures (Problems 21–50)
21. Find max and min in a list (without built-in)
22. Remove duplicates from a list
23. Sort a list without using sort()
24. Merge two sorted lists
25. Find second largest element in a list
26. Flatten a nested list
27. Count frequency of each element
28. Find common elements between two lists
29. Rotate a list by k positions
30. Check if two strings are anagrams
31–50: Dictionary operations, set operations, tuple manipulation, list comprehension problems

## 📝 Section 3: Functions (Problems 51–70)
51. Write a function to check prime numbers
52. Write a recursive function for factorial
53. Write a function that returns Fibonacci using recursion
54. Create a decorator that logs function calls
55. Write a lambda function to sort a list of tuples
56–70: Higher-order functions, closures, generators, error handling

## 📝 Section 4: File & OOP (Problems 71–100)
71. Read a file and count words
72. Write student records to a CSV file
73. Create a Student class with methods
74. Implement inheritance with Animal → Dog
75. Build a simple bank account system with OOP
76–100: File operations, exception handling, class design problems

---

## 🎬 Video Resources
**English:** {PYTHON_EN}
**Hindi:** {PYTHON_HI}
{FOOTER}"""

CONTENT["10_Problem_Sets/DSA_300_Problems.pdf"] = f"""{CSS}

# DSA 300 Curated Problems

These problems are organized by topic. Solve Easy first, then Medium. Attempt Hard only after completing Medium.

---

## 📝 Arrays & Strings (50 problems)
**Easy (20):** Two Sum, Best Time to Buy Sell Stock, Contains Duplicate, Maximum Subarray, Merge Sorted Array, Move Zeroes, Plus One, Remove Duplicates, Valid Anagram, Reverse String, and 10 more
**Medium (20):** Product of Array Except Self, 3Sum, Container With Most Water, Group Anagrams, Longest Substring Without Repeating Characters, and 15 more
**Hard (10):** Median of Two Sorted Arrays, Trapping Rain Water, Minimum Window Substring, and 7 more

## 📝 Hashing & Sliding Window (40 problems)
**Easy (15):** Two Sum (hash), Valid Parentheses, First Unique Character
**Medium (15):** Longest Consecutive Sequence, Minimum Size Subarray Sum, Longest Repeating Character Replacement
**Hard (10):** Sliding Window Maximum, Substring with Concatenation of All Words

## 📝 Recursion & Backtracking (40 problems)
**Easy (10):** Fibonacci, Power of Two, Climbing Stairs
**Medium (20):** Subsets, Permutations, Combination Sum, N-Queens, Word Search
**Hard (10):** Sudoku Solver, Regular Expression Matching

## 📝 Stack & Queue (30 problems)
## 📝 Linked Lists (30 problems)
## 📝 Trees & Graphs (50 problems)
## 📝 Dynamic Programming (40 problems)
## 📝 Sorting & Searching (20 problems)

**Platform:** Solve on LeetCode or GeeksforGeeks. Track your progress in the Excel tracker.

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}"""

CONTENT["10_Problem_Sets/ML_Logic_Questions.pdf"] = f"""{CSS}

# ML Logic & Conceptual Questions

These questions test your understanding of ML concepts — not code syntax. Use them for interview prep and self-assessment.

---

## 📝 Fundamentals (20 Questions)
1. What is the difference between supervised and unsupervised learning?
2. What is overfitting? How do you prevent it?
3. What is the bias-variance tradeoff?
4. Why do we split data into train and test sets?
5. What is cross-validation and why is it better than a single train-test split?
6. What is regularization? Explain L1 and L2.
7. What is the curse of dimensionality?
8. When would you use regression vs classification?
9. What is feature scaling and when is it needed?
10. What is the difference between a parameter and a hyperparameter?
11–20: Gradient descent, learning rate, ensemble methods, feature importance...

## 📝 Algorithms (20 Questions)
21. How does linear regression work? What assumptions does it make?
22. What is the cost function in logistic regression?
23. How does a decision tree decide where to split?
24. What is the difference between Random Forest and Gradient Boosting?
25. How does KNN classify a new data point?
26. When would you use SVM over logistic regression?
27–40: Naive Bayes, PCA, K-Means, evaluation metrics...

## 📝 Practical Scenarios (10 Questions)
41. Your model has 99% training accuracy but 60% test accuracy. What happened?
42. You have a dataset with 95% negative and 5% positive. Which metric should you use?
43. Your model's performance dropped after deployment. What could cause this?
44. How would you handle a dataset with 30% missing values?
45–50: Feature engineering decisions, model selection, deployment trade-offs...

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""
