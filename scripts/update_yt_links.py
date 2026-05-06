import os
import subprocess

base_dir = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System"

def get_youtube_links(filename):
    if "Python" in filename:
        return {
            "eng": "https://www.youtube.com/watch?v=rfscVS0vtbw",
            "eng_title": "freeCodeCamp - Python Full Course for Beginners",
            "hin": "https://www.youtube.com/watch?v=UrsmFxEIp5k",
            "hin_title": "CodeWithHarry - Python 100 Days of Code"
        }
    elif "DSA" in filename or "Problem" in filename:
        return {
            "eng": "https://www.youtube.com/watch?v=8hly31xKli0",
            "eng_title": "freeCodeCamp - Data Structures Easy to Advanced",
            "hin": "https://www.youtube.com/watch?v=5_5oE5lgrhw",
            "hin_title": "CodeWithHarry - DSA Course"
        }
    elif "Data" in filename or "NumPy" in filename or "Pandas" in filename:
        return {
            "eng": "https://www.youtube.com/watch?v=vmEHCJofslg",
            "eng_title": "freeCodeCamp - Data Analysis with Python",
            "hin": "https://www.youtube.com/watch?v=x9iJkX5Fj5Y",
            "hin_title": "CodeWithHarry - Pandas Tutorial"
        }
    else:
        # Default to ML / AI
        return {
            "eng": "https://www.youtube.com/watch?v=i_LwzRmAazo",
            "eng_title": "freeCodeCamp - Machine Learning for Everybody",
            "hin": "https://www.youtube.com/watch?v=1mHE0z2zLlc",
            "hin_title": "Krish Naik - Complete Machine Learning"
        }

def generate_markdown_content(filename):
    title = filename.replace(".pdf", "").replace("_", " ")
    links = get_youtube_links(filename)
    
    # Embedding CSS for larger font size and styling
    content = f"""<style>
    body {{
        font-size: 18px;
        line-height: 1.8;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #1f2937;
        margin: 40px;
    }}
    h1 {{ font-size: 34px; color: #1d4ed8; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 20px; }}
    h2 {{ font-size: 26px; color: #1e40af; margin-top: 35px; margin-bottom: 15px; }}
    h3 {{ font-size: 22px; color: #1e3a8a; margin-top: 25px; margin-bottom: 10px; }}
    ul, ol {{ margin-left: 25px; margin-bottom: 20px; }}
    li {{ margin-bottom: 12px; }}
    p {{ margin-bottom: 18px; }}
    a {{ color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; transition: border-color 0.2s; }}
    a:hover {{ border-bottom-color: #2563eb; }}
    hr {{ border: 0; height: 1px; background: #e5e7eb; margin: 40px 0; }}
    .footer {{ font-size: 14px; color: #6b7280; font-style: italic; text-align: center; margin-top: 60px; }}
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

### 2. Required Resources (Video Lessons)
We have curated the best specific YouTube resources so you don't waste time in tutorial hell. Click the links below to watch the specific videos:

**English YouTube Lesson:**
* [**Watch: {links['eng_title']}**]({links['eng']}) 

**Hindi YouTube Lesson:**
* [**Watch: {links['hin_title']}**]({links['hin']})

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
            
            print(f"Updating YouTube links in PDF for {file}...")
            try:
                subprocess.run(["npx", "md-to-pdf", md_path], cwd=root, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            except Exception as e:
                print(f"Failed to generate {file}: {e}")
            
            if os.path.exists(md_path):
                os.remove(md_path)

print("All PDFs updated with specific YouTube video links successfully.")
