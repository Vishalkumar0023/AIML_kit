from pdf_css import *

CONTENT = {}

# ─── 05 Advanced ML ───
CONTENT["05_Advanced_ML/01_Feature_Engineering.pdf"] = f"""{CSS}

# Feature Engineering

Feature engineering is often the difference between a mediocre and excellent model.

---

## 🎯 Key Techniques

### Handling Categorical Variables
* **Label Encoding:** Categories to numbers (0, 1, 2...)
* **One-Hot Encoding:** Binary columns for each category
* `pd.get_dummies()` or `sklearn.preprocessing.OneHotEncoder`

### Feature Scaling
* **StandardScaler:** Mean = 0, Std = 1
* **MinMaxScaler:** Scale to [0, 1]
* **RobustScaler:** Uses median/IQR, handles outliers

### Feature Creation
* Combining features: `df["bmi"] = df["weight"] / (df["height"]**2)`
* Date features: year, month, day_of_week
* Text features: word count, TF-IDF

### Feature Selection
* **SelectKBest:** Statistical test for top k features
* **RFE:** Remove weakest features iteratively
* **Feature Importance:** From tree-based models
* **Correlation Matrix:** Remove highly correlated features

## 🛠 Practice Tasks
1. One-hot encode a dataset with categorical columns
2. Scale features and compare model performance
3. Use SelectKBest to find top 5 features

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/@StatQuest/playlists","StatQuest Channel (Feature Engineering videos)")}

### Hindi — CampusX
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML — Day 23+ (Feature Engineering starts)")}
{FOOTER}"""

CONTENT["05_Advanced_ML/02_Pipelines_and_Tuning.pdf"] = f"""{CSS}

# Sklearn Pipelines & Hyperparameter Tuning

Pipelines automate your ML workflow. Tuning finds the best model settings.

---

## 🔧 Sklearn Pipelines
* Chain preprocessing + model into one object
* Prevent data leakage (scaling only on training data)
* ColumnTransformer for different preprocessing per column

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
```

## 🎛 Hyperparameter Tuning
* **GridSearchCV:** Try every combination — exhaustive but slow
* **RandomizedSearchCV:** Random samples — faster, nearly as good

| Model | Parameters to Tune |
|-------|-----------|
| Random Forest | `n_estimators`, `max_depth`, `min_samples_split` |
| SVM | `C`, `kernel`, `gamma` |
| XGBoost | `learning_rate`, `n_estimators`, `max_depth` |

## 🛠 Practice Tasks
1. Build a pipeline with ColumnTransformer + RandomForest
2. Run GridSearchCV and find best hyperparameters
3. Save the best pipeline with `joblib.dump()`

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/@StatQuest/playlists","StatQuest Channel")}
* {L("https://www.youtube.com/watch?v=ORyfPJypKuU&list=PLKnIA16_RmvZvBbJex7T84XYRmor3IPK1","Gradient Descent (CampusX)")}

### Hindi — CampusX
* {L("https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH","100 Days of ML (Pipelines & Tuning)")}
* {L("https://www.youtube.com/watch?v=ORyfPJypKuU&list=PLKnIA16_RmvZvBbJex7T84XYRmor3IPK1","Gradient Descent Playlist")}
{FOOTER}"""

# ─── 06 Deep Learning ───
CONTENT["06_Deep_Learning/01_Neural_Networks_Basics.pdf"] = f"""{CSS}

# Neural Networks Basics

Neural networks are the foundation of deep learning.

---

## 🧠 Core Concepts
* Input layer → Hidden layers → Output layer
* Each connection has a weight; each neuron has a bias
* **ReLU:** `max(0, x)` — most common for hidden layers
* **Sigmoid:** Maps to (0, 1) — binary classification output
* **Softmax:** Probability distribution — multi-class output
* **Backpropagation:** Calculate error, propagate backward, update weights
* **Learning Rate:** Step size — too high = overshoot, too low = slow

## 🛠 Practice Tasks
1. Draw a simple neural network on paper
2. Build a basic neural network with Keras for MNIST
3. Experiment with different learning rates

---

## 🎬 Video Resources

### English — 3Blue1Brown + StatQuest
* {L("https://www.youtube.com/watch?v=aircAruvnKk","What is a Neural Network? (Chapter 1)")}
* {L("https://www.youtube.com/watch?v=IHZwWFHWa-w","Gradient Descent (Chapter 2)")}
* {L("https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi","3Blue1Brown — Neural Networks FULL PLAYLIST")}
* {L("https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1","StatQuest — Neural Networks & DL Playlist")}

### Hindi — CampusX
* {L("https://www.youtube.com/watch?v=2dH_qjc9mFg","100 Days of Deep Learning — Announcement")}
* {L("https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn","100 Days of Deep Learning — FULL PLAYLIST")}
{FOOTER}"""

CONTENT["06_Deep_Learning/02_CNN_and_RNN.pdf"] = f"""{CSS}

# CNN & RNN

CNNs are built for images. RNNs are built for sequences.

---

## 🖼 CNNs — For Image Data
* **Convolution Layer:** Filters detect features (edges, textures)
* **Pooling Layer:** Reduces dimensions (MaxPool, AvgPool)
* **Architecture:** Input → Conv → ReLU → Pool → Flatten → Dense → Output
* Common: LeNet, VGG, ResNet

## 📝 RNNs — For Sequential Data
* Process sequences one element at a time with hidden state
* **Problem:** Vanishing gradient — can't learn long-term dependencies
* **LSTM:** Gates (forget, input, output) to selectively remember/forget
* Standard choice for most sequence tasks

## 🛠 Practice Tasks
1. Build a CNN for CIFAR-10 image classification
2. Build an LSTM for text sentiment analysis
3. Compare CNN vs dense network on image data

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1","StatQuest — Neural Networks Playlist (CNN & RNN)")}
* {L("https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi","3Blue1Brown — Full Neural Network Playlist")}

### Hindi — CampusX
* {L("https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn","100 Days of Deep Learning (CNN & RNN)")}
* {L("https://www.youtube.com/watch?v=AWHSZzp96kM","Problems with RNN (Specific Video)")}
{FOOTER}"""

CONTENT["06_Deep_Learning/03_Transformers_Intro.pdf"] = f"""{CSS}

# Transformers — Introduction

Transformers are the backbone of GPT, BERT, and modern AI.

---

## 🔑 Key Concepts
* **Self-Attention:** Each word looks at every other word for context
* **Query, Key, Value** matrices compute attention scores
* **Encoder:** Processes input (BERT), **Decoder:** Generates output (GPT)
* No recurrence — uses positional encoding for word order
* **Why Transformers Won:** Parallelization, long-range dependencies, scalability

| Model | Type | Used For |
|-------|------|----------|
| BERT | Encoder | Text classification, QA, NER |
| GPT | Decoder | Text generation, chatbots |
| T5 | Encoder-Decoder | Translation, summarization |

## 🛠 Practice Tasks
1. Use Hugging Face `transformers` to run pre-trained BERT
2. Watch Karpathy's "Build GPT" and follow along
3. Explain attention mechanism in your own words

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=kCc8FmEb1nY","Andrej Karpathy — Let's Build GPT from Scratch")}
* {L("https://www.youtube.com/@AndrejKarpathy/videos","Karpathy Full Channel (Zero to Hero)")}
* {L("https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1","StatQuest Neural Networks (Transformer section)")}

### Hindi — CampusX
* {L("https://www.youtube.com/watch?v=smOnJtCevoU","Cross Attention in Transformers")}
* {L("https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn","100 Days of Deep Learning (Transformers)")}
{FOOTER}"""
