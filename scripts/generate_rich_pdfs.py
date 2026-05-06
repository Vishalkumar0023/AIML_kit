import os
import subprocess

base_dir = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System"

# Helper to generate premium markdown content based on filename
def generate_markdown_content(filename):
    title = filename.replace(".pdf", "").replace("_", " ")
    
    content = f"""# {title}

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
We have curated the best resources so you don't waste time in tutorial hell.

**English Resources:**
* **freeCodeCamp / NeetCode:** Search for `{title}` to find definitive, no-fluff guides.
* **Andrew Ng (Coursera):** For theoretical ML/AI depth.

**Hindi Resources:**
* **CodeWithHarry / Krish Naik:** Search for `{title} in Hindi` for practical, code-first explanations.

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
*AI Engineer Foundation System - Premium Digital Product*
*Designed for execution, discipline, and portfolio building.*
"""

    # Add specific nuances based on folder/filename
    if "Python" in filename:
        content += "\n## 🐍 Python Specifics\nMake sure to master list comprehensions, OOP, and memory management.\n"
    elif "DSA" in filename or "Problem" in filename:
        content += "\n## 🧠 DSA Logic\nTime and space complexity (Big O) is critical here. Always analyze your solution's complexity.\n"
    elif "ML" in filename or "Machine_Learning" in filename:
        content += "\n## 🤖 ML Core\nUnderstand the math (Linear Algebra, Calculus) intuitively. Don't just blindly import Scikit-Learn.\n"
    elif "Deep_Learning" in filename:
        content += "\n## 🧠 Deep Learning\nFocus on tensor shapes and backpropagation logic. PyTorch is the recommended framework.\n"
    elif "Career" in filename or "Resume" in filename:
        content += "\n## 💼 Career Focus\nRecruiters look for deployed projects, not just Jupyter Notebooks. Emphasize impact and scale.\n"
    
    return content

# Iterate through all files
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.pdf'):
            pdf_path = os.path.join(root, file)
            md_path = pdf_path.replace('.pdf', '.md')
            
            # Write Markdown
            with open(md_path, 'w') as f:
                f.write(generate_markdown_content(file))
            
            # Convert to PDF
            print(f"Generating PDF for {file}...")
            try:
                subprocess.run(["npx", "md-to-pdf", md_path], cwd=root, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            except Exception as e:
                print(f"Failed to generate {file}: {e}")
            
            # Clean up Markdown
            if os.path.exists(md_path):
                os.remove(md_path)

print("All PDFs populated with premium content successfully.")
