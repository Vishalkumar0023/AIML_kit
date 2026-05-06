import os
import subprocess

base_dir = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System/11_Resource_Library"

english_content = """<style>
body {
    font-size: 18px;
    line-height: 1.8;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1f2937;
    margin: 40px;
}
h1 { font-size: 34px; color: #1d4ed8; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 20px; }
h2 { font-size: 26px; color: #1e40af; margin-top: 35px; margin-bottom: 15px; }
h3 { font-size: 22px; color: #1e3a8a; margin-top: 25px; margin-bottom: 10px; }
ul, ol { margin-left: 25px; margin-bottom: 20px; }
li { margin-bottom: 12px; }
p { margin-bottom: 18px; }
a { color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
a:hover { border-bottom-color: #2563eb; }
hr { border: 0; height: 1px; background: #e5e7eb; margin: 40px 0; }
.footer { font-size: 14px; color: #6b7280; font-style: italic; text-align: center; margin-top: 60px; }
</style>

# English Resources Links

Welcome to the **English Resources Links** module of the AI Engineer Foundation System. 
This document provides curated English resources to help you master AI/ML.

---

## 📚 Curated Video Lessons

### 1. Python Foundation
**Channel:** freeCodeCamp
* [**Watch: Python Full Course for Beginners**](https://www.youtube.com/watch?v=rfscVS0vtbw)
* **Instructions:** 👉 Use sections: 0:00–3:30 → Setup, 3:30–1:30:00 → Basics + Variables, 1:30:00–4:30:00 → Loops + Functions

### 2. Data Structures & Algorithms (DSA)
**Channel:** NeetCode
* [**Watch: Data Structures Easy to Advanced**](https://www.youtube.com/watch?v=8hly31xKli0)
* **Instructions:** 👉 Covers: Arrays, Hashing, Sliding Window

### 3. Data Handling (NumPy & Pandas)
**Channel:** freeCodeCamp
* [**Watch: Data Analysis with Python**](https://www.youtube.com/watch?v=vmEHCJofslg)
* **Instructions:** 👉 Watch: Pandas + Data Cleaning sections carefully

### 4. Machine Learning & AI Core
**Channel:** Andrew Ng (Alternative YouTube version)
* [**Watch: Machine Learning**](https://www.youtube.com/watch?v=GwIo3gDZCVQ)
* **Instructions:** 👉 Focus: Regression, Cost function, Gradient descent

---
<div class="footer">
AI Engineer Foundation System - Premium Digital Product<br>
Designed for execution, discipline, and portfolio building.
</div>
"""

hindi_content = """<style>
body {
    font-size: 18px;
    line-height: 1.8;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1f2937;
    margin: 40px;
}
h1 { font-size: 34px; color: #1d4ed8; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 20px; }
h2 { font-size: 26px; color: #1e40af; margin-top: 35px; margin-bottom: 15px; }
h3 { font-size: 22px; color: #1e3a8a; margin-top: 25px; margin-bottom: 10px; }
ul, ol { margin-left: 25px; margin-bottom: 20px; }
li { margin-bottom: 12px; }
p { margin-bottom: 18px; }
a { color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
a:hover { border-bottom-color: #2563eb; }
hr { border: 0; height: 1px; background: #e5e7eb; margin: 40px 0; }
.footer { font-size: 14px; color: #6b7280; font-style: italic; text-align: center; margin-top: 60px; }
</style>

# Hindi Resources Links

Welcome to the **Hindi Resources Links** module of the AI Engineer Foundation System. 
This document provides curated Hindi resources to help you master AI/ML.

---

## 📚 Curated Video Lessons

### 1. Python Foundation
**Channel:** CodeWithHarry
* [**Watch: Python Tutorial in One Video**](https://www.youtube.com/watch?v=gfDE2a7MKjA)
* **Instructions:** 👉 Watch: First 6–8 hours only (skip advanced parts initially)

### 2. Data Structures & Algorithms (DSA)
**Channel:** Apna College
* [**Watch: DSA Course in Hindi**](https://www.youtube.com/watch?v=RBSGKlAvoiM)
* **Instructions:** 👉 Watch: Arrays + basic DSA sections first

### 3. Data Handling (NumPy & Pandas)
**Channel:** Krish Naik
* [**Watch: Pandas Data Analysis**](https://www.youtube.com/watch?v=LHBE6Q9XlzI)
* **Instructions:** 👉 Focus: Pandas basics + CSV handling

### 4. Machine Learning & AI Core
**Channel:** Krish Naik
* [**Watch: Machine Learning Tutorial**](https://www.youtube.com/watch?v=7eh4d6sabA0)
* **Instructions:** 👉 Covers: ML basics, supervised learning

---
<div class="footer">
AI Engineer Foundation System - Premium Digital Product<br>
Designed for execution, discipline, and portfolio building.
</div>
"""

pdfs_to_generate = {
    "English_Resources_Links": english_content,
    "Hindi_Resources_Links": hindi_content
}

os.makedirs(base_dir, exist_ok=True)

for name, content in pdfs_to_generate.items():
    md_path = os.path.join(base_dir, f"{name}.md")
    pdf_path = os.path.join(base_dir, f"{name}.pdf")
    
    with open(md_path, 'w') as f:
        f.write(content)
    
    print(f"Generating PDF for {name}...")
    try:
        subprocess.run(["npx", "md-to-pdf", md_path], cwd=base_dir, check=True)
    except Exception as e:
        print(f"Failed to generate {name}: {e}")
    
    if os.path.exists(md_path):
        os.remove(md_path)

print("Targeted PDFs updated successfully.")
