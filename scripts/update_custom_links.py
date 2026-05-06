import os
import subprocess

base_dir = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System"

def get_links(filename):
    if "Python" in filename:
        return f"""
**English Resource:**
* <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">**Python Foundation (English)**</a>

**Hindi Resource:**
* <a href="https://www.youtube.com/watch?v=UrsmFxEIp5k" target="_blank">**Python Foundation (Hindi)**</a>
"""
    elif "DSA" in filename or "Problem" in filename:
        return f"""
**English Resource:**
* <a href="https://www.youtube.com/playlist?list=PLsr8vTgyLdy_YndxNcI4WkH5Vorj5qvrv" target="_blank">**DSA Playlist (English)**</a>

**Hindi Resource:**
* <a href="https://www.youtube.com/playlist?list=PLtjrkKJbKWfYqecn9R1bIkWuHnaBuwzzQ" target="_blank">**DSA Playlist (Hindi)**</a>
"""
    elif "Data" in filename or "NumPy" in filename or "Pandas" in filename:
        return f"""
**English Resource:**
* <a href="https://www.youtube.com/watch?v=vmEHCJofslg" target="_blank">**NumPy & Pandas (English)**</a>

**Hindi Resource:**
* <a href="https://www.youtube.com/playlist?list=PLEkC1_DzbPc6cFLC1uoDco7bszPKy4DnP" target="_blank">**NumPy & Pandas Playlist (Hindi)**</a>
"""
    elif "Advanced" in filename or "Feature" in filename or "Pipeline" in filename:
        return f"""
**English Resources:**
* <a href="https://www.youtube.com/watch?v=fHFOANOHwh8" target="_blank">**Feature Engineering Full 3hr**</a>
* <a href="https://www.youtube.com/playlist?list=PLZoTAELRMXVPwYGE2PXD3x0bfKnR0cJjN" target="_blank">**Feature Engineering Playlist**</a>
* <a href="https://www.youtube.com/watch?v=5TVj6iEBR4I" target="_blank">**Column Transformer**</a>
* <a href="https://www.youtube.com/watch?v=xOccYkgRV4Q" target="_blank">**Sklearn Pipelines**</a>
* <a href="https://www.youtube.com/watch?v=4Im0CT43QxY" target="_blank">**GridSearchCV**</a>
* <a href="https://www.youtube.com/watch?v=Q5dH5mOQ_ik" target="_blank">**RandomizedSearchCV**</a>
* <a href="https://www.youtube.com/watch?v=355u2bDqB7c" target="_blank">**Hyperparameter Tuning**</a>
* <a href="https://www.youtube.com/watch?v=xlHk4okO8Ls" target="_blank">**Feature Selection SelectKBest + RFE**</a>

**Hinglish Resources:**
* <a href="https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH" target="_blank">**100 Days of ML Full Playlist**</a>
* <a href="https://www.youtube.com/watch?v=S6hcGwhNbIM" target="_blank">**Feature Engineering Live Hindi**</a>
"""
    elif "Deep" in filename or "Neural" in filename or "CNN" in filename or "RNN" in filename or "Transformer" in filename:
        return f"""
**English Resources:**
* <a href="https://www.youtube.com/playlist?list=PLZZWrBYkx7Otcjr3eCLZDCgfpqnxMY29s" target="_blank">**Neural Networks Playlist 3Blue1Brown**</a>
* <a href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">**What Is a Neural Network Chapter 1**</a>
* <a href="https://www.youtube.com/watch?v=LEAFHHNk8II" target="_blank">**CNN Explained**</a>
* <a href="https://www.youtube.com/watch?v=GvezxUdLrEk" target="_blank">**RNN Transformers Attention MIT 2025**</a>
* <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank">**Transformers Karpathy Build GPT**</a>
* <a href="https://www.youtube.com/watch?v=d2kxUVwWWwU" target="_blank">**Deep Learning Full 5hr Krish Naik**</a>

**Hinglish Resources:**
* <a href="https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn" target="_blank">**100 Days of Deep Learning CampusX**</a>
"""
    else:
        # Default to ML / AI
        return f"""
**English Resource:**
* <a href="https://www.youtube.com/watch?v=JxgmHe2NyeY" target="_blank">**Machine Learning & AI Core (English)**</a>

**Hindi Resource:**
* <a href="https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH" target="_blank">**Machine Learning & AI Core Playlist (Hindi)**</a>
"""

def generate_markdown_content(filename):
    title = filename.replace(".pdf", "").replace("_", " ")
    links_section = get_links(filename)
    
    # Embedding CSS for larger font size and styling
    content = f"""<style>
    body {{
        font-size: 14px;
        line-height: 1.6;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #1f2937;
        margin: 40px;
    }}
    h1 {{ font-size: 26px; color: #1d4ed8; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 16px; }}
    h2 {{ font-size: 20px; color: #1e40af; margin-top: 25px; margin-bottom: 12px; }}
    h3 {{ font-size: 16px; color: #1e3a8a; margin-top: 20px; margin-bottom: 8px; }}
    ul, ol {{ margin-left: 20px; margin-bottom: 16px; }}
    li {{ margin-bottom: 8px; }}
    p {{ margin-bottom: 14px; }}
    a {{ color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; transition: border-color 0.2s; }}
    a:hover {{ border-bottom-color: #2563eb; }}
    hr {{ border: 0; height: 1px; background: #e5e7eb; margin: 30px 0; }}
    .footer {{ font-size: 12px; color: #6b7280; font-style: italic; text-align: center; margin-top: 50px; }}
    </style>

# {title}

Welcome to the **{title}** module of the AI Engineer Foundation System. 
This document provides everything you need to master this topic, moving you closer to becoming a full-stack AI Engineer.

---

## 🎯 Learning Objectives
* Understand the core concepts behind {title}.
* Apply these concepts practically in real-world AI/ML contexts.
* Avoid common pitfalls that trap beginners.

## 📚 Curriculum & Study Plan

### 1. Conceptual Foundation
You must understand the theory before writing the code. 
* **Focus Area:** Grasp the underlying mechanics.
* **Why it matters:** AI requires mathematical and logical intuition, not just syntax memory.

### 2. Required Resources
We have curated the exact resources you need. Click the links below to start learning:

{links_section}

### 3. Execution & Practice
Do not just watch videos. You must build.
* **Task:** Implement the concepts from `{title}` in a blank Python script or Jupyter Notebook.
* **Rule:** If you get stuck, use the 15-minute rule before checking the solution.

## 🛠 Project / Implementation
To solidify this knowledge, you will build a mini-project.
1. **Define the Problem:** How does `{title}` solve a real problem?
2. **Write the Code:** Implement it from scratch.
3. **Refactor:** Clean up your code, add docstrings, and push to GitHub.

---
<div class="footer">
AI Engineer Foundation System - Premium Digital Product<br>
Designed for execution, discipline, and portfolio building.
</div>
"""
    return content

# Iterate through all files and update PDFs
for root, dirs, files in os.walk(base_dir):
    for file in files:
        filepath = os.path.join(root, file)
        
        if file.endswith('.pdf'):
            md_path = filepath.replace('.pdf', '.md')
            with open(md_path, 'w') as f:
                f.write(generate_markdown_content(file))
            
            print(f"Updating user-provided links in PDF for {file}...")
            try:
                subprocess.run(["npx", "md-to-pdf", md_path], cwd=root, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            except Exception as e:
                print(f"Failed to generate {file}: {e}")
            
            if os.path.exists(md_path):
                os.remove(md_path)

print("All PDFs updated with USER-PROVIDED links successfully.")
