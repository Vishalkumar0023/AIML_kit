from pdf_css import *

CONTENT = {}

# ─── 07 AI Engineer ───
CONTENT["07_AI_Engineer/01_FastAPI_for_ML.pdf"] = f"""{CSS}

# FastAPI for ML Model Serving

Turn your ML model into a REST API.

---

## 🎯 What You Will Learn
* Setting up FastAPI: `pip install fastapi uvicorn`
* Creating endpoints, loading models with `joblib`
* Input validation with Pydantic
* Running: `uvicorn main:app --reload`

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
1. Train a model, save with joblib
2. Create FastAPI app that serves predictions
3. Test with curl or Postman

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=tLKKmouUams","freeCodeCamp — FastAPI Crash Course (1hr)")}
* {L("https://www.youtube.com/watch?v=0sOvCWFmrtA","freeCodeCamp — FastAPI Full Course (19 Hours)")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists (FastAPI for ML)")}
{FOOTER}"""

CONTENT["07_AI_Engineer/02_Docker_Basics_for_ML.pdf"] = f"""{CSS}

# Docker Basics for ML

Docker packages your ML app + dependencies into a container that runs anywhere.

---

## 🎯 Key Concepts
* **Image:** Blueprint (like a class), **Container:** Running instance (like an object)
* **Dockerfile:** Instructions to build an image
* **Docker Hub:** Repository for sharing images

## 📝 Basic Dockerfile
```
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🔧 Essential Commands
* `docker build -t my-ml-app .`
* `docker run -p 8000:8000 my-ml-app`
* `docker ps` / `docker stop <id>`

## 🛠 Practice Tasks
1. Install Docker Desktop
2. Dockerize your FastAPI ML app
3. Run container and test predictions

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=fqMOX6JJhGo","freeCodeCamp — Docker Full Beginner Course")}
* {L("https://www.youtube.com/watch?v=3c-iBn73dDE","Docker Beginner to Pro (Complete)")}
* {L("https://www.youtube.com/watch?v=kTp5xUtcalw","Docker + Kubernetes Full Hands-On")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists (Docker section)")}
{FOOTER}"""

CONTENT["07_AI_Engineer/03_Model_Serving_and_Deployment.pdf"] = f"""{CSS}

# Model Serving and Deployment

Building an ML model is 20% of the work. Deploying it is the other 80%.

---

## 🎯 Deployment Options
* **Streamlit:** Web UI in 30 lines, deploy free on Streamlit Cloud
* **FastAPI + Docker:** REST API, deploy on Render, Railway, AWS
* **Cloud Platforms:** AWS SageMaker, GCP Vertex AI, Azure ML

## 📝 Deployment Checklist
- [ ] Model saved as `.pkl` or `.h5`
- [ ] API endpoint tested locally
- [ ] Dockerfile created and tested
- [ ] requirements.txt complete
- [ ] Health check endpoint (`/health`)
- [ ] README with deployment instructions

## 🛠 Practice Tasks
1. Deploy a Streamlit app to Streamlit Cloud
2. Deploy FastAPI app to Render (free tier)
3. Write a complete README

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/watch?v=h5wLuVDr0oc","AssemblyAI — Deploy ML with FastAPI + Docker + Heroku")}
* {L("https://www.youtube.com/watch?v=jzGzw98Eikk","DataTalks.Club — FastAPI + Docker + Fly.io")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists (ML Deployment)")}
{FOOTER}"""

# ─── 08 AI Architect ───
CONTENT["08_AI_Architect/01_ML_System_Design.pdf"] = f"""{CSS}

# ML System Design

System design is how you architect an ML solution end-to-end.

---

## 🎯 The ML System Design Framework

### Step 1: Problem Definition
* What business problem? Is ML the right approach?
* Define success metrics: accuracy, latency, cost

### Step 2: Data Pipeline
* Collection → Storage → Preprocessing → Feature engineering
* Batch vs streaming processing

### Step 3: Model Selection & Training
* Start simple before going complex
* Experiment tracking: MLflow, Weights & Biases

### Step 4: Serving & Inference
* Online (real-time API) vs Batch (scheduled)
* A/B testing: compare old vs new model

### Step 5: Monitoring & Maintenance
* Data drift, model drift, retraining strategy

## 🛠 Practice Tasks
1. Design an ML system for spam email classifier
2. Design a product recommendation engine
3. Write a 1-page system design document

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/@DataTalksClub/playlists","DataTalks.Club (MLOps + System Design)")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists (MLOps section)")}
{FOOTER}"""

CONTENT["08_AI_Architect/02_Data_Pipelines_and_Scalability.pdf"] = f"""{CSS}

# Data Pipelines and Scalability

Real-world ML uses structured data pipelines, not Jupyter notebooks in production.

---

## 🔧 Pipeline Stages
1. **Ingestion:** APIs, databases, files, streams
2. **Validation:** Data quality checks
3. **Transformation:** Clean, encode, scale
4. **Storage:** Save processed data
5. **Versioning:** Track data versions

| Stage | Tools |
|-------|-------|
| Ingestion | Python scripts, Kafka, Airflow |
| Validation | Great Expectations, Pandera |
| Transformation | Pandas, Spark, dbt |
| Orchestration | Airflow, Prefect, Dagster |

## 🛠 Practice Tasks
1. Build a pipeline: read CSV → clean → save
2. Add data validation checks
3. Document your pipeline architecture

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/@DataTalksClub/playlists","DataTalks.Club — Data Engineering Zoomcamp")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists")}
{FOOTER}"""

CONTENT["08_AI_Architect/03_Monitoring_Models.pdf"] = f"""{CSS}

# Monitoring Models in Production

A deployed model without monitoring is a ticking time bomb.

---

## 🎯 What to Monitor
* **Performance:** Track accuracy/F1/RMSE over time, set alert thresholds
* **Data Drift:** Input distribution changes → unreliable predictions
* **Concept Drift:** Relationship between features and target changes

| Tool | Purpose |
|------|---------|
| Evidently AI | Data & model drift dashboards |
| Prometheus + Grafana | Infrastructure monitoring |
| MLflow | Experiment and model tracking |

## 📋 Monitoring Checklist
- [ ] Log every prediction with timestamp
- [ ] Track prediction distribution daily
- [ ] Set up alerts for performance drops
- [ ] Schedule weekly data drift checks
- [ ] Define retraining trigger criteria

## 🛠 Practice Tasks
1. Add logging to your FastAPI endpoint
2. Simulate data drift and observe performance change
3. Write a retraining trigger script

---

## 🎬 Video Resources

### English
* {L("https://www.youtube.com/@DataTalksClub/playlists","DataTalks.Club — MLOps (Monitoring section)")}

### Hindi — CampusX
* {L("https://www.youtube.com/@campusx-official/playlists","CampusX All Playlists (MLOps/Monitoring)")}
{FOOTER}"""
