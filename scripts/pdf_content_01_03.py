from pdf_css import *

CONTENT = {}

# ─── 01 Python Foundation ───
CONTENT["01_Python_Foundation/Day01_to_Day05_Basics_and_Loops.pdf"] = f"""{CSS}

# Python Foundation — Day 1 to Day 5: Basics and Loops

---

## 📅 Day 1: Setup & First Program
* Install Python 3.x from python.org
* Install VS Code + Python extension
* Write your first `print("Hello World")` program
* Understand how Python executes code line by line

## 📅 Day 2: Variables & Data Types
* Variables: naming rules, assignment
* Data types: `int`, `float`, `str`, `bool`
* Type conversion: `int()`, `str()`, `float()`
* `type()` function to check data types
* **Practice:** Create variables for your name, age, height and print them

## 📅 Day 3: Operators & Input
* Arithmetic: `+`, `-`, `*`, `/`, `//`, `%`, `**`
* Comparison: `==`, `!=`, `>`, `<`, `>=`, `<=`
* Logical: `and`, `or`, `not`
* `input()` function — always returns string
* **Practice:** Build a simple calculator using input()

## 📅 Day 4: Conditions
* `if`, `elif`, `else` syntax
* Nested conditions
* Ternary operator: `x = "yes" if a > b else "no"`
* **Practice:** Write a grade calculator (marks → grade)

## 📅 Day 5: Loops
* `for` loop with `range()`
* `while` loop
* `break`, `continue`, `pass`
* Nested loops
* **Practice:** Print multiplication table, find sum of digits

---

## 🎬 Video Resources

### English — Corey Schafer
* {L("https://www.youtube.com/watch?v=YYXdXT2l-Gg","Install & Setup Python")}
* {L("https://www.youtube.com/watch?v=k9TUPpGqYTo","Strings")}
* {L("https://www.youtube.com/watch?v=W8KRzm-HUcc","Lists, Tuples & Sets")}
* {L("https://www.youtube.com/watch?v=6iF8Xb7Z3wQ","Loops — For & While")}
* {L("https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU","FULL Python Basics Playlist")}

### Hindi — CodeWithHarry
* {L("https://www.youtube.com/watch?v=UrsmFxEIp5k","Complete Python Course 2024")}
* {L("https://www.youtube.com/watch?v=7wnove7K-ZQ","Day 1 — Introduction to Python")}
* {L("https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg","FULL Python Playlist")}

## ✅ Day 5 Checkpoint
- [ ] Declare variables and use all data types
- [ ] Take user input and process it
- [ ] Write if/elif/else conditions
- [ ] Use for and while loops confidently
- [ ] Solve basic pattern printing problems
{FOOTER}"""

CONTENT["01_Python_Foundation/Day06_to_Day10_Functions_Lists_Dicts.pdf"] = f"""{CSS}

# Python Foundation — Day 6 to Day 10: Functions, Lists & Dictionaries

---

## 📅 Day 6: Strings Deep Dive
* String indexing/slicing: `s[0]`, `s[1:5]`, `s[::-1]`
* Methods: `.upper()`, `.lower()`, `.strip()`, `.split()`, `.join()`, `.replace()`, `.find()`
* f-strings: `f"Name: {{name}}, Age: {{age}}"`
* **Practice:** Reverse a string, check palindrome, count vowels

## 📅 Day 7: Lists
* Creating lists, indexing, slicing
* Methods: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`
* List comprehensions: `[x**2 for x in range(10)]`
* **Practice:** Find max/min without built-in, remove duplicates

## 📅 Day 8: Tuples, Sets & Dictionaries
* Tuples: immutable sequences, packing/unpacking
* Sets: `.add()`, `.union()`, `.intersection()`
* Dictionaries: `.keys()`, `.values()`, `.items()`, `.get()`
* **Practice:** Word frequency counter, student record system

## 📅 Day 9: Functions
* `def`, parameters, return values
* Default arguments, `*args`, `**kwargs`
* Scope: local vs global
* Lambda functions
* **Practice:** Factorial, fibonacci, prime check functions

## 📅 Day 10: Practice Day
* Solve 10 problems using everything learned
* Build a mini contact book using dictionaries

---

## 🎬 Video Resources

### English — Corey Schafer
* {L("https://www.youtube.com/watch?v=W8KRzm-HUcc","Lists, Tuples & Sets (Deep Dive)")}
* {L("https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU","FULL Playlist (Dicts, Functions, Modules, Scope)")}

### Hindi — CodeWithHarry
* {L("https://www.youtube.com/watch?v=UrsmFxEIp5k","Complete Python Course 2024")}
* {L("https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg","FULL Python Playlist")}

## ✅ Day 10 Checkpoint
- [ ] Can write and call functions confidently
- [ ] Understands lists, tuples, sets, dictionaries
- [ ] Can use list comprehensions
- [ ] Has built at least 2 small programs using functions
{FOOTER}"""

CONTENT["01_Python_Foundation/Day11_to_Day15_OOP_and_FileHandling.pdf"] = f"""{CSS}

# Python Foundation — Day 11 to Day 15: OOP and File Handling

---

## 📅 Day 11: File Handling
* Modes: `r`, `w`, `a`, `r+`
* Reading: `.read()`, `.readline()`, `.readlines()`
* Writing: `.write()`, `.writelines()`
* `with` statement for safe file handling
* **Practice:** Read a text file, count words, write output to new file

## 📅 Day 12: Error Handling
* `try`, `except`, `finally`
* Catching: `ValueError`, `FileNotFoundError`, `TypeError`
* Raising exceptions: `raise ValueError("Invalid")`
* **Practice:** Add error handling to calculator and file reader

## 📅 Day 13: OOP Basics
* Classes and objects, `__init__()` constructor
* Instance variables and methods, `self` keyword
* **Practice:** Create a `Student` class with name, marks, grade method

## 📅 Day 14: OOP Continued
* Inheritance, method overriding, `super()`
* Encapsulation: private variables with `_` and `__`
* Special/dunder methods, property decorators
* **Practice:** Build a `BankAccount` class

## 📅 Day 15: Modules & Final Review
* Importing modules, creating your own
* `pip install` and third-party libraries
* **Final Project:** Student Management System (file-based, OOP design)

---

## 🎬 Video Resources

### English — Corey Schafer
* {L("https://www.youtube.com/watch?v=ZDa-Z5JzLYM","OOP 1 — Classes & Instances")}
* {L("https://www.youtube.com/watch?v=BJ-VvGyQxho","OOP 2 — Class Variables")}
* {L("https://www.youtube.com/watch?v=rq8cL2XMM5M","OOP 3 — Classmethods & Staticmethods")}
* {L("https://www.youtube.com/watch?v=RSl87lqOXDE","OOP 4 — Inheritance & Subclasses")}
* {L("https://www.youtube.com/watch?v=3ohzBxoFHAY","OOP 5 — Special / Dunder Methods")}
* {L("https://www.youtube.com/watch?v=jCzT9XFZ5bw","OOP 6 — Property Decorators")}
* {L("https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc","OOP FULL PLAYLIST")}
* {L("https://www.youtube.com/watch?v=Uh2ebFW8OYM","File Objects — Reading & Writing")}

### Hindi — CodeWithHarry
* {L("https://www.youtube.com/watch?v=o6zPAzl4ZtM","OOP — Classes & Objects")}
* {L("https://www.youtube.com/watch?v=UrsmFxEIp5k","Complete Python 2024 (OOP + File sections)")}
* {L("https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg","FULL Python Playlist")}

## ✅ Day 15 Checkpoint — Python Complete
- [ ] Can read/write files in Python
- [ ] Handles errors with try/except
- [ ] Understands classes, objects, inheritance
- [ ] Has built a final project using all concepts
- [ ] Ready to move to Data Handling (NumPy & Pandas)
{FOOTER}"""
