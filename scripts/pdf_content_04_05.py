from pdf_css import *

CONTENT = {}

# ─── 04 Machine Learning Core ───
CONTENT["04_Machine_Learning_Core/01_Regression_and_Classification.pdf"] = f"""{CSS}

# Regression and Classification

These are the two fundamental types of supervised learning. You must understand them deeply before anything else in ML.

---

## 📖 Regression — Predicting Numbers

### Linear Regression
* Predicts a continuous value (price, temperature, salary)
* Formula: `y = mx + b` (slope and intercept)
* Cost function: Mean Squared Error (MSE)
* Optimization: Gradient Descent — iteratively reduce error
* Scikit-Learn: `from sklearn.linear_model import LinearRegression`

### Polynomial Regression
* When data is not linear — use polynomial features
* `from sklearn.preprocessing import PolynomialFeatures`

## 📖 Classification — Predicting Categories

### Logistic Regression
* Despite the name, it's a classification algorithm
* Predicts probability (0 to 1) using sigmoid function
* Used for binary classification (spam/not spam, yes/no)

### K-Nearest Neighbors (KNN)
* Classifies based on the k closest data points
* Simple but slow on large datasets
* Choosing k: too small = noise, too large = blurred boundaries

### Decision Trees
* Splits data based on feature thresholds
* Easy to interpret and visualize
* Prone to overfitting — use pruning or Random Forest

### Random Forest
* Ensemble of multiple decision trees
* Reduces overfitting, more accurate than single tree
* `from sklearn.ensemble import RandomForestClassifier`

## 🛠 Practice Tasks
1. Build a linear regression model to predict house prices
2. Train a logistic regression model for binary classification
3. Compare KNN, Decision Tree, and Random Forest on the same dataset
4. Visualize decision boundaries

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""

CONTENT["04_Machine_Learning_Core/02_Metrics_and_Evaluation.pdf"] = f"""{CSS}

# Metrics and Model Evaluation

A model is only as good as its evaluation. Learn to measure performance correctly.

---

## 📊 Regression Metrics
* **MAE (Mean Absolute Error):** Average of absolute differences. Easy to interpret.
* **MSE (Mean Squared Error):** Penalizes large errors more. Most common.
* **RMSE:** Square root of MSE. Same unit as target variable.
* **R² Score:** How much variance the model explains. 1.0 = perfect, 0 = useless.

## 📊 Classification Metrics
* **Accuracy:** Correct predictions / total predictions. Misleading on imbalanced data.
* **Precision:** Of all positive predictions, how many were actually positive?
* **Recall:** Of all actual positives, how many did we catch?
* **F1 Score:** Harmonic mean of precision and recall. Use when data is imbalanced.
* **Confusion Matrix:** 2x2 table showing TP, FP, TN, FN.
* **AUC-ROC:** Area under the receiver operating characteristic curve. Higher = better.

## 🔄 Train-Test Split & Cross Validation
* `train_test_split(X, y, test_size=0.2, random_state=42)`
* **K-Fold Cross Validation:** Split data into k folds, train k times, average the scores
* **Stratified K-Fold:** Maintains class balance in each fold

## ⚠️ Overfitting vs Underfitting
* **Overfitting:** Model memorizes training data, fails on new data. High train accuracy, low test accuracy.
* **Underfitting:** Model too simple to capture patterns. Low accuracy on both.
* **Solutions:** More data, regularization, simpler model, cross-validation

## 🛠 Practice Tasks
1. Train a model, compute all metrics manually and with sklearn
2. Create a confusion matrix and interpret it
3. Compare models using cross-validation scores
4. Identify overfitting in a decision tree and fix it

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""

# ─── 05 Advanced ML ───
CONTENT["05_Advanced_ML/01_Feature_Engineering.pdf"] = f"""{CSS}

# Feature Engineering

Feature engineering is the process of creating, transforming, and selecting features to improve model performance. It's often the difference between a mediocre and excellent model.

---

## 🎯 Key Techniques

### Handling Categorical Variables
* **Label Encoding:** Convert categories to numbers (0, 1, 2...)
* **One-Hot Encoding:** Create binary columns for each category
* **Ordinal Encoding:** When categories have a natural order
* `pd.get_dummies()` or `sklearn.preprocessing.OneHotEncoder`

### Feature Scaling
* **StandardScaler:** Mean = 0, Std = 1. Best for algorithms sensitive to scale (SVM, KNN)
* **MinMaxScaler:** Scale to [0, 1]. Good for neural networks
* **RobustScaler:** Uses median/IQR. Handles outliers better

### Feature Creation
* Combining features: `df["bmi"] = df["weight"] / (df["height"]**2)`
* Date features: extract year, month, day, day_of_week
* Text features: word count, character count, TF-IDF
* Binning: convert continuous to categorical

### Feature Selection
* **SelectKBest:** Statistical test to find top k features
* **RFE (Recursive Feature Elimination):** Remove weakest features iteratively
* **Feature Importance:** From tree-based models (Random Forest, XGBoost)
* **Correlation Matrix:** Remove highly correlated features

## 🛠 Practice Tasks
1. One-hot encode a dataset with categorical columns
2. Scale features and compare model performance before/after
3. Create 3 new features from existing ones
4. Use SelectKBest to find top 5 features

---

## 🎬 Video Resources
{ADV_ML_LINKS}
{FOOTER}"""

CONTENT["05_Advanced_ML/02_Pipelines_and_Tuning.pdf"] = f"""{CSS}

# Sklearn Pipelines & Hyperparameter Tuning

Pipelines automate your ML workflow. Tuning finds the best model settings. Together they make your code production-ready.

---

## 🔧 Sklearn Pipelines

### Why Pipelines?
* Chain preprocessing + model into one object
* Prevent data leakage (scaling only on training data)
* Cleaner, reproducible code

### Basic Pipeline
```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("model", LogisticRegression())
])
pipe.fit(X_train, y_train)
pipe.predict(X_test)
```

### ColumnTransformer
* Apply different preprocessing to different columns
* Numeric → StandardScaler, Categorical → OneHotEncoder

## 🎛 Hyperparameter Tuning

### GridSearchCV
* Try every combination of parameters
* Exhaustive but slow
* Best when parameter space is small

### RandomizedSearchCV
* Sample random combinations
* Faster than GridSearch, nearly as good
* Best when parameter space is large

### Key Parameters to Tune
| Model | Parameters |
|-------|-----------|
| Random Forest | `n_estimators`, `max_depth`, `min_samples_split` |
| SVM | `C`, `kernel`, `gamma` |
| KNN | `n_neighbors`, `weights`, `metric` |
| XGBoost | `learning_rate`, `n_estimators`, `max_depth` |

## 🛠 Practice Tasks
1. Build a pipeline with ColumnTransformer + RandomForest
2. Run GridSearchCV and find the best hyperparameters
3. Compare GridSearch vs RandomizedSearch speed and results
4. Save the best pipeline with `joblib.dump()`

---

## 🎬 Video Resources
{ADV_ML_LINKS}
{FOOTER}"""
