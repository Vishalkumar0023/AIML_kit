from pdf_css import *

CONTENT = {}

# ─── 03 Data Handling ───
CONTENT["03_Data_Handling/01_NumPy_Mastery.pdf"] = f"""{CSS}

# NumPy Mastery

NumPy is the foundation of all numerical computing in Python. Every ML library uses NumPy under the hood.

---

## 🎯 What You Will Learn
* Creating arrays: `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`
* Array shapes: `.shape`, `.reshape()`, `.flatten()`
* Indexing and slicing: `arr[0]`, `arr[1:5]`, `arr[:, 0]`
* Operations: element-wise math, dot product, broadcasting
* Aggregation: `.sum()`, `.mean()`, `.std()`, `.min()`, `.max()`
* Boolean indexing: `arr[arr > 5]`
* Random: `np.random.rand()`, `np.random.randint()`, `np.random.seed()`

## 📝 Key Concepts
* **Why NumPy over lists?** 50x faster and less memory
* **Broadcasting:** Operations on arrays of different shapes
* **Vectorization:** Replace Python loops with NumPy operations

## 🛠 Practice Tasks
1. Create a 5x5 matrix of random integers, find row-wise sum
2. Normalize an array to range [0, 1]
3. Find all elements greater than the mean
4. Multiply two matrices using `np.dot()`
5. Generate 1000 random numbers and compute statistics

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=r-uOLxNrNk8","freeCodeCamp — Data Analysis with NumPy, Pandas, Matplotlib")}

### Hindi — CampusX
* {L("https://www.youtube.com/watch?v=CpPLLp3snK4&list=PLKnIA16_Rmvb-ToL3RQ_bwxG4_ND-0-DT","NumPy Full Playlist (CampusX)")}
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML (NumPy covered early days)")}
{FOOTER}"""

CONTENT["03_Data_Handling/02_Pandas_CSV_Missing_Values.pdf"] = f"""{CSS}

# Pandas — CSV Handling & Missing Values

Pandas is the standard tool for data manipulation. If you want to do ML, you must master Pandas.

---

## 🎯 Core Concepts

### DataFrames and Series
* `pd.read_csv("file.csv")` — load data from CSV
* `.head()`, `.tail()`, `.shape`, `.info()`, `.describe()`

### Selecting Data
* Column: `df["column"]`, Multiple: `df[["col1", "col2"]]`
* Rows: `df.loc[0]`, `df.iloc[0:5]`
* Filtering: `df[df["age"] > 25]`

### Handling Missing Values
* Detect: `df.isnull().sum()`
* Drop: `df.dropna()`, Fill: `df.fillna(df.mean())`

### Data Operations
* Sorting: `df.sort_values("col")`
* Grouping: `df.groupby("col").mean()`
* Merging: `pd.merge(df1, df2, on="key")`
* Apply: `df["col"].apply(lambda x: x*2)`

## 🛠 Practice Tasks
1. Load CSV, display first 10 rows and column types
2. Find and fill missing values using mean strategy
3. Filter rows where salary > 50000
4. Group by department, calculate average salary
5. Export cleaned data to new CSV

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS","Corey Schafer — Pandas Full Playlist")}
* {L("https://www.youtube.com/watch?v=r-uOLxNrNk8","freeCodeCamp — Data Analysis (Pandas section)")}

### Hindi — CampusX
* {L("https://www.youtube.com/watch?v=kq9Vmg5d7Sk&list=PLKnIA16_RmvbR85fgbfVRKOiMokUKVupy","Pandas Full Playlist (CampusX)")}
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML (Pandas + Missing Values)")}
{FOOTER}"""

# ─── 04 Machine Learning Core ───
CONTENT["04_Machine_Learning_Core/01_Regression_and_Classification.pdf"] = f"""{CSS}

# Regression and Classification

The two fundamental types of supervised learning.

---

## 📖 Regression — Predicting Numbers

### Linear Regression
* Predicts continuous value (price, temperature, salary)
* Formula: `y = mx + b`, Cost function: MSE, Optimization: Gradient Descent
* `from sklearn.linear_model import LinearRegression`

### Polynomial Regression
* When data is not linear — use polynomial features

## 📖 Classification — Predicting Categories

### Logistic Regression
* Predicts probability (0 to 1) using sigmoid function
* Used for binary classification (spam/not spam)

### K-Nearest Neighbors (KNN)
* Classifies based on k closest data points

### Decision Trees & Random Forest
* Decision Trees split data based on feature thresholds
* Random Forest = ensemble of trees, reduces overfitting

### SVM & Naive Bayes
* SVM finds optimal hyperplane separating classes
* Naive Bayes uses probability based on Bayes' theorem

## 🛠 Practice Tasks
1. Build a linear regression model for house prices
2. Train logistic regression for binary classification
3. Compare KNN, Decision Tree, Random Forest on same dataset

---

## 🎬 Video Resources

### English — StatQuest
* {L("https://www.youtube.com/watch?v=nk2CQITm_eo","Linear Regression")}
* {L("https://www.youtube.com/watch?v=EkAQAi3a4js","Multiple Regression")}
* {L("https://www.youtube.com/watch?v=yIYKR4sgzI8","Logistic Regression")}
* {L("https://www.youtube.com/playlist?list=PLblh5JKOoLUKxzEP5HA2d-Li7IJkHfXSe","Logistic Regression Full Playlist")}

### Hindi — CampusX
* {L("https://www.youtube.com/watch?v=UZPfbG0jNec&list=PLKnIA16_Rmva-wY_HBh1gTH32ocu2SoTr","Linear Regression")}
* {L("https://www.youtube.com/watch?v=XNXzVfItWGY&list=PLKnIA16_Rmvb-ZTsM1QS-tlwmlkeGSnru","Logistic Regression")}
* {L("https://www.youtube.com/watch?v=gwgmSSTdiXs&list=PLKnIA16_RmvYGY_n9PP8zN-0LG9MoZRjU","Decision Trees")}
* {L("https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLKnIA16_RmvZyqP3WGUo7iVziIIea_1bp","Random Forest")}
* {L("https://www.youtube.com/watch?v=ugTxMLjLS8M&list=PLKnIA16_RmvbOIFee-ra7U6jR2oIbCZBL","SVM")}
* {L("https://www.youtube.com/watch?v=BYaoDZM1IcU&list=PLKnIA16_RmvZiE-lEdN5RDi18-u-T43zd","KNN")}
* {L("https://www.youtube.com/watch?v=Ty7knppVo9E&list=PLKnIA16_RmvZ67wQaHoBuzXaDAfPz-a6l","Naive Bayes")}
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML Full Playlist")}
{FOOTER}"""

CONTENT["04_Machine_Learning_Core/02_Metrics_and_Evaluation.pdf"] = f"""{CSS}

# Metrics and Model Evaluation

A model is only as good as its evaluation.

---

## 📊 Regression Metrics
* **MAE:** Average of absolute differences
* **MSE:** Penalizes large errors more
* **RMSE:** Square root of MSE, same unit as target
* **R² Score:** 1.0 = perfect, 0 = useless

## 📊 Classification Metrics
* **Accuracy:** Correct / total. Misleading on imbalanced data.
* **Precision:** Correct positives / predicted positives
* **Recall:** Correct positives / actual positives
* **F1 Score:** Harmonic mean of precision and recall
* **Confusion Matrix:** TP, FP, TN, FN table
* **AUC-ROC:** Area under ROC curve

## 🔄 Train-Test Split & Cross Validation
* `train_test_split(X, y, test_size=0.2, random_state=42)`
* K-Fold and Stratified K-Fold Cross Validation

## ⚠️ Overfitting vs Underfitting
* **Overfitting:** Memorizes training data, fails on new data
* **Underfitting:** Model too simple to capture patterns
* **Solutions:** More data, regularization, cross-validation

## 🛠 Practice Tasks
1. Train a model, compute all metrics
2. Create a confusion matrix and interpret it
3. Compare models using cross-validation scores

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=dlLHN7rL03w","Confusion Matrix, Precision, Recall, F1 Score")}
* {L("https://www.youtube.com/@StatQuest/playlists","StatQuest — Full ML Playlists")}

### Hindi — CampusX
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML — Days 75-76 (Metrics)")}
{FOOTER}"""
