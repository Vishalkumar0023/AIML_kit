from pdf_css import *

CONTENT = {}

# ─── 06 Deep Learning ───
CONTENT["06_Deep_Learning/01_Neural_Networks_Basics.pdf"] = f"""{CSS}

# Neural Networks Basics

Neural networks are the foundation of deep learning. Understand the architecture before using frameworks.

---

## 🧠 Core Concepts

### What is a Neural Network?
* Inspired by biological neurons but works differently
* Input layer → Hidden layers → Output layer
* Each connection has a weight; each neuron has a bias
* Forward propagation: input × weights + bias → activation function → output

### Activation Functions
* **ReLU:** `max(0, x)` — most common for hidden layers
* **Sigmoid:** Maps to (0, 1) — used for binary classification output
* **Softmax:** Maps to probability distribution — used for multi-class output
* **Tanh:** Maps to (-1, 1) — sometimes used in RNNs

### Loss Functions
* **MSE:** For regression tasks
* **Binary Cross-Entropy:** For binary classification
* **Categorical Cross-Entropy:** For multi-class classification

### Backpropagation & Gradient Descent
* Calculate the error at the output
* Propagate the error backward through the network
* Update weights using gradient descent to minimize loss
* **Learning Rate:** Step size for weight updates — too high = overshoot, too low = slow

### Epochs, Batches, and Iterations
* **Epoch:** One full pass through the training data
* **Batch Size:** Number of samples processed before weight update
* **Iteration:** Number of batches needed to complete one epoch

## 🛠 Practice Tasks
1. Draw a simple neural network on paper (2 inputs, 1 hidden layer, 1 output)
2. Manually calculate forward propagation for a single neuron
3. Build a basic neural network with Keras for MNIST digit classification
4. Experiment with different learning rates and observe the effect

---

## 🎬 Video Resources
{DL_LINKS}
{FOOTER}"""

CONTENT["06_Deep_Learning/02_CNN_and_RNN.pdf"] = f"""{CSS}

# CNN (Convolutional Neural Networks) & RNN (Recurrent Neural Networks)

CNNs are built for images. RNNs are built for sequences. Master both.

---

## 🖼 CNNs — For Image Data

### How CNNs Work
* **Convolution Layer:** Applies filters to detect features (edges, textures, shapes)
* **Pooling Layer:** Reduces spatial dimensions (MaxPool, AvgPool)
* **Fully Connected Layer:** Final classification layers
* **Architecture Flow:** Input → Conv → ReLU → Pool → Conv → ReLU → Pool → Flatten → Dense → Output

### Key Terms
* **Filter/Kernel:** Small matrix that slides over the image
* **Stride:** How many pixels the filter moves each step
* **Padding:** Adding zeros around the image to preserve size
* **Feature Map:** Output of a convolution operation

### Common Architectures
* **LeNet:** Simple, for digit recognition
* **VGG:** Deep, uniform architecture
* **ResNet:** Skip connections to train very deep networks

## 📝 RNNs — For Sequential Data

### How RNNs Work
* Process sequences one element at a time
* Maintain a hidden state that carries information from previous steps
* Good for: text, time series, speech

### Problems with Vanilla RNNs
* **Vanishing gradient:** Can't learn long-term dependencies
* **Solution:** LSTM and GRU cells

### LSTM (Long Short-Term Memory)
* Has gates: forget gate, input gate, output gate
* Can selectively remember or forget information
* Standard choice for most sequence tasks

## 🛠 Practice Tasks
1. Build a CNN for CIFAR-10 image classification
2. Build an LSTM for text sentiment analysis
3. Experiment with different filter sizes and observe accuracy
4. Compare CNN vs dense network on image data

---

## 🎬 Video Resources
{DL_LINKS}
{FOOTER}"""

CONTENT["06_Deep_Learning/03_Transformers_Intro.pdf"] = f"""{CSS}

# Transformers — Introduction

Transformers replaced RNNs for most NLP tasks and are the backbone of GPT, BERT, and modern AI.

---

## 🔑 Key Concepts

### The Attention Mechanism
* Instead of processing sequentially, attention looks at ALL positions at once
* **Self-Attention:** Each word looks at every other word to understand context
* "The cat sat on the mat" — "sat" attends strongly to "cat" (who sat?)
* Computed with Query, Key, Value matrices

### Transformer Architecture
* **Encoder:** Processes input sequence (used in BERT)
* **Decoder:** Generates output sequence (used in GPT)
* **Encoder-Decoder:** Both (used in translation, T5)
* No recurrence — uses positional encoding to know word order

### Why Transformers Won
* **Parallelization:** Unlike RNNs, all positions processed simultaneously
* **Long-range dependencies:** Attention handles them naturally
* **Scalability:** Can scale to billions of parameters (GPT-4, etc.)

### Famous Models
| Model | Type | Used For |
|-------|------|----------|
| BERT | Encoder | Text classification, QA, NER |
| GPT | Decoder | Text generation, chatbots |
| T5 | Encoder-Decoder | Translation, summarization |
| ViT | Encoder | Image classification |

## 🛠 Practice Tasks
1. Use Hugging Face `transformers` library to run a pre-trained BERT model
2. Fine-tune a small model for text classification
3. Watch Karpathy's "Build GPT from scratch" and follow along
4. Explain attention mechanism in your own words

---

## 🎬 Video Resources
{DL_LINKS}
{FOOTER}"""

# ─── 07 AI Engineer ───
CONTENT["07_AI_Engineer/01_FastAPI_for_ML.pdf"] = f"""{CSS}

# FastAPI for ML Model Serving

FastAPI lets you turn your ML model into a REST API that anyone can use.

---

## 🎯 What You Will Learn
* Setting up FastAPI: `pip install fastapi uvicorn`
* Creating endpoints for predictions
* Loading a saved model with `joblib` or `pickle`
* Handling input validation with Pydantic
* Running the server with `uvicorn main:app --reload`

## 📝 Basic Example
```python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

class InputData(BaseModel):
    feature1: float
    feature2: float

@app.post("/predict")
def predict(data: InputData):
    prediction = model.predict([[data.feature1, data.feature2]])
    return {{"prediction": prediction[0]}}
```

## 🛠 Practice Tasks
1. Train a simple model, save it with joblib
2. Create a FastAPI app that serves predictions
3. Test with curl or Postman
4. Add input validation and error handling

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""

CONTENT["07_AI_Engineer/02_Docker_Basics_for_ML.pdf"] = f"""{CSS}

# Docker Basics for ML

Docker packages your ML app + dependencies into a container that runs anywhere.

---

## 🎯 Why Docker for ML?
* "Works on my machine" problem → solved
* Consistent environment across dev, staging, production
* Easy deployment to cloud (AWS, GCP, Azure)

## 📝 Key Concepts
* **Image:** Blueprint of your app (like a class)
* **Container:** Running instance of an image (like an object)
* **Dockerfile:** Instructions to build an image
* **Docker Hub:** Repository for sharing images

## 📝 Basic Dockerfile for ML
```
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🔧 Essential Commands
* `docker build -t my-ml-app .` — Build image
* `docker run -p 8000:8000 my-ml-app` — Run container
* `docker ps` — List running containers
* `docker stop <id>` — Stop container

## 🛠 Practice Tasks
1. Install Docker Desktop
2. Dockerize your FastAPI ML app
3. Run the container and test predictions
4. Push the image to Docker Hub

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""

CONTENT["07_AI_Engineer/03_Model_Serving_and_Deployment.pdf"] = f"""{CSS}

# Model Serving and Deployment

Building an ML model is 20% of the work. Deploying it is the other 80%.

---

## 🎯 Deployment Options

### Option 1: Streamlit (Easiest)
* Build a web UI for your model in 30 lines
* Good for demos and prototypes
* Deploy free on Streamlit Cloud

### Option 2: FastAPI + Docker (Professional)
* REST API for programmatic access
* Containerized for consistency
* Deploy on Render, Railway, AWS, GCP

### Option 3: Cloud ML Platforms
* AWS SageMaker, GCP Vertex AI, Azure ML
* Managed infrastructure — they handle scaling
* More expensive but enterprise-grade

## 📝 Deployment Checklist
- [ ] Model saved as `.pkl` or `.h5` file
- [ ] API endpoint tested locally
- [ ] Dockerfile created and tested
- [ ] Requirements.txt includes all dependencies
- [ ] Environment variables for sensitive data
- [ ] Health check endpoint (`/health`)
- [ ] Basic logging added
- [ ] README with deployment instructions

## 🛠 Practice Tasks
1. Deploy a Streamlit app to Streamlit Cloud
2. Deploy a FastAPI app to Render (free tier)
3. Write a complete README for your deployed project
4. Test your API with automated requests

---

## 🎬 Video Resources
**English:** {ML_EN}
**Hindi:** {ML_HI}
{FOOTER}"""
