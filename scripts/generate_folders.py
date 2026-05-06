import os

base_dir = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System"

structure = {
    "00_Getting_Started": [
        "01_Welcome_Guide.pdf", "02_How_to_Use_This_System.pdf", "03_Daily_Schedule_Templates.xlsx",
        "04_Study_Rules_and_Discipline.pdf", "05_Roadmap_Overview.pdf", "06_Success_Framework.pdf"
    ],
    "01_Python_Foundation": [
        "Day01_to_Day05_Basics_and_Loops.pdf", "Day06_to_Day10_Functions_Lists_Dicts.pdf", 
        "Day11_to_Day15_OOP_and_FileHandling.pdf", "Python_Mini_Exercises/"
    ],
    "02_DSA_Parallel_Track": [
        "01_Arrays_and_Strings/", "02_Hashing_and_Sliding_Window/", "03_Recursion_and_Stack_Queue/",
        "04_Trees_and_Graphs/", "05_Dynamic_Programming_Basics/", "DSA_300_Curated_Problems_List.xlsx"
    ],
    "03_Data_Handling": [
        "01_NumPy_Mastery.pdf", "02_Pandas_CSV_Missing_Values.pdf", "03_Data_Cleaning_Projects/"
    ],
    "04_Machine_Learning_Core": [
        "01_Regression_and_Classification.pdf", "02_Metrics_and_Evaluation.pdf", "ML_Core_Practice_Tasks/"
    ],
    "05_Advanced_ML": [
        "01_Feature_Engineering.pdf", "02_Pipelines_and_Tuning.pdf"
    ],
    "06_Deep_Learning": [
        "01_Neural_Networks_Basics.pdf", "02_CNN_and_RNN.pdf", "03_Transformers_Intro.pdf"
    ],
    "07_AI_Engineer": [
        "01_FastAPI_for_ML.pdf", "02_Docker_Basics_for_ML.pdf", "03_Model_Serving_and_Deployment.pdf"
    ],
    "08_AI_Architect": [
        "01_ML_System_Design.pdf", "02_Data_Pipelines_and_Scalability.pdf", "03_Monitoring_Models.pdf"
    ],
    "09_Projects_Portfolio": [
        "Beginner_Projects/", "Intermediate_Projects/", "Advanced_Projects/"
    ],
    "10_Problem_Sets": [
        "Python_100_Problems.pdf", "DSA_300_Problems.pdf", "ML_Logic_Questions.pdf"
    ],
    "11_Resource_Library": [
        "English_Resources_Links.pdf", "Hindi_Resources_Links.pdf"
    ],
    "12_Career_Kit": [
        "GitHub_Guide_and_README_Templates.pdf", "Resume_Project_Section_Examples.pdf", "Interview_Prep_Guide.pdf"
    ],
    "13_Reference_System": [
        "ML_Readiness_Checklist.pdf", "Cheatsheets_and_Debugging.pdf"
    ],
    "14_DSA_For_AI_ML": [
        "Must_Do_DSA_for_AIML_Students.pdf"
    ],
    "15_Execution_System": [
        "01_Discipline_Framework.pdf", "02_Progress_Tracker.xlsx", "03_Weekly_Review_Template.pdf"
    ]
}

os.makedirs(base_dir, exist_ok=True)

for folder, items in structure.items():
    folder_path = os.path.join(base_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    for item in items:
        if item.endswith("/"):
            os.makedirs(os.path.join(folder_path, item), exist_ok=True)
        else:
            with open(os.path.join(folder_path, item), 'w') as f:
                f.write(f"Placeholder for {item}")

print("Folder structure generated.")
