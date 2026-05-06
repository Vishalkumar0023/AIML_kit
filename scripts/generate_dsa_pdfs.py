#!/usr/bin/env python3
"""Generate PDFs for the empty 02_DSA_Parallel_Track subdirectories."""

import os, sys, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pdf_css import CSS, FOOTER, DSA_EN, DSA_HI, L

BASE = "/Users/vishalmahto/Desktop/AIML_starterKit/paid_Bundle/AI-Engineer-Foundation-System/02_DSA_Parallel_Track"

PDFS = {
"01_Arrays_and_Strings/Arrays_and_Strings_Guide.pdf": f"""{CSS}

# Arrays and Strings

Arrays and strings are the most frequently asked topics in coding interviews and the foundation of all DSA.

---

## 🎯 Key Concepts

### Arrays
* Contiguous block of memory storing elements of the same type
* Access by index: O(1), Search: O(n), Insert/Delete: O(n)
* Python uses `list` — dynamic arrays that auto-resize

### Common Array Patterns
* **Two Pointers:** One from start, one from end — use for sorted arrays, pair problems
* **Prefix Sum:** Precompute cumulative sums for range queries
* **Kadane's Algorithm:** Maximum subarray sum in O(n)
* **Dutch National Flag:** Sort 0s, 1s, 2s in one pass

### Strings
* Immutable in Python — every operation creates a new string
* Common methods: `.find()`, `.count()`, `.replace()`, `.split()`, `.join()`
* **Sliding Window on Strings:** Find substrings matching a condition

## 📝 Must-Do Problems (20)
1. Two Sum
2. Best Time to Buy and Sell Stock
3. Contains Duplicate
4. Maximum Subarray (Kadane's)
5. Move Zeroes
6. Merge Sorted Array
7. Valid Anagram
8. Reverse String
9. Longest Common Prefix
10. Remove Duplicates from Sorted Array
11. Rotate Array
12. Product of Array Except Self
13. 3Sum
14. Container With Most Water
15. Group Anagrams
16. Longest Substring Without Repeating Characters
17. Valid Palindrome
18. String to Integer (atoi)
19. Implement strStr()
20. Next Permutation

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}""",

"02_Hashing_and_Sliding_Window/Hashing_and_Sliding_Window_Guide.pdf": f"""{CSS}

# Hashing and Sliding Window

Hashing gives O(1) lookups. Sliding window solves subarray/substring problems efficiently.

---

## 🎯 Hashing

### Hash Maps (Dictionaries in Python)
* Store key-value pairs with O(1) average lookup
* Use for counting, grouping, and fast lookups
* Python: `dict`, `collections.Counter`, `collections.defaultdict`

### When to Use Hashing
* "Find if X exists" → hash set
* "Count occurrences" → hash map / Counter
* "Find pairs with sum K" → hash map (complement lookup)
* "Group elements" → defaultdict(list)

## 🎯 Sliding Window

### Fixed-Size Window
* Given window size k, slide across array
* Example: Maximum sum of k consecutive elements

### Variable-Size Window
* Expand window until condition is met, then shrink
* Example: Smallest subarray with sum ≥ target

### Template
```python
left = 0
for right in range(len(arr)):
    # expand window: add arr[right]
    while condition_violated:
        # shrink window: remove arr[left]
        left += 1
    # update answer
```

## 📝 Must-Do Problems (15)
1. Two Sum (hash map)
2. Valid Anagram (Counter)
3. Group Anagrams
4. Longest Consecutive Sequence
5. Top K Frequent Elements
6. Maximum Sum Subarray of Size K
7. Longest Substring Without Repeating Characters
8. Minimum Size Subarray Sum
9. Longest Repeating Character Replacement
10. Permutation in String
11. Fruit Into Baskets
12. Subarrays with K Different Integers
13. Sliding Window Maximum
14. First Unique Character in String
15. Subarray Sum Equals K

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}""",

"03_Recursion_and_Stack_Queue/Recursion_Stack_Queue_Guide.pdf": f"""{CSS}

# Recursion, Stack & Queue

Recursion is thinking in smaller subproblems. Stacks and queues are essential data structures for many algorithms.

---

## 🎯 Recursion

### How Recursion Works
* A function calls itself with a smaller input
* Must have a **base case** (stopping condition) and a **recursive case**
* Each call adds to the call stack — too deep = StackOverflow

### Template
```python
def solve(n):
    if n == 0:        # base case
        return 1
    return n * solve(n - 1)  # recursive case
```

### Common Recursive Problems
* Factorial, Fibonacci, Power
* Binary search (recursive version)
* Subsets, Permutations (backtracking)
* Tree traversals (inorder, preorder, postorder)

## 🎯 Stack (LIFO — Last In, First Out)
* Use Python `list`: `.append()` to push, `.pop()` to pop
* **Use cases:** Balanced parentheses, undo operations, expression evaluation, DFS
* **Monotonic Stack:** Find next greater/smaller element in O(n)

## 🎯 Queue (FIFO — First In, First Out)
* Use `collections.deque`: `.append()` to enqueue, `.popleft()` to dequeue
* **Use cases:** BFS traversal, task scheduling, sliding window max

## 📝 Must-Do Problems (15)
1. Climbing Stairs
2. Power of Two
3. Valid Parentheses (stack)
4. Min Stack
5. Next Greater Element (monotonic stack)
6. Subsets (backtracking)
7. Permutations (backtracking)
8. Combination Sum
9. Generate Parentheses
10. Implement Queue using Stacks
11. Daily Temperatures (stack)
12. Evaluate Reverse Polish Notation
13. N-Queens
14. Word Search (backtracking)
15. Letter Combinations of Phone Number

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}""",

"04_Trees_and_Graphs/Trees_and_Graphs_Guide.pdf": f"""{CSS}

# Trees and Graphs

Trees power decision trees in ML. Graphs power recommendation systems and social networks.

---

## 🎯 Trees

### Binary Tree Basics
* Each node has at most 2 children (left, right)
* **Root:** Top node. **Leaf:** Node with no children.
* **Height:** Longest path from root to leaf

### Traversals
* **Inorder (Left, Root, Right):** Gives sorted order in BST
* **Preorder (Root, Left, Right):** Used to copy/serialize tree
* **Postorder (Left, Right, Root):** Used to delete tree
* **Level Order (BFS):** Process level by level using queue

### Binary Search Tree (BST)
* Left child < parent < right child
* Search, insert, delete: O(log n) average, O(n) worst

## 🎯 Graphs

### Representation
* **Adjacency List:** `graph = {{A: [B, C], B: [A, D]}}` — most common
* **Adjacency Matrix:** 2D array — good for dense graphs

### Traversals
* **BFS (Breadth-First Search):** Level by level, uses queue. Finds shortest path.
* **DFS (Depth-First Search):** Go deep first, uses stack/recursion.

### Key Algorithms
* **Shortest Path:** BFS (unweighted), Dijkstra (weighted)
* **Cycle Detection:** DFS with visited tracking
* **Topological Sort:** For DAGs (directed acyclic graphs)

## 📝 Must-Do Problems (15)
1. Maximum Depth of Binary Tree
2. Invert Binary Tree
3. Same Tree
4. Binary Tree Level Order Traversal
5. Validate Binary Search Tree
6. Lowest Common Ancestor
7. Binary Tree from Preorder and Inorder
8. Number of Islands (graph BFS/DFS)
9. Clone Graph
10. Course Schedule (topological sort)
11. Pacific Atlantic Water Flow
12. Word Ladder
13. Serialize and Deserialize Binary Tree
14. Binary Tree Maximum Path Sum
15. Graph Valid Tree

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}""",

"05_Dynamic_Programming_Basics/Dynamic_Programming_Guide.pdf": f"""{CSS}

# Dynamic Programming Basics

DP = Recursion + Memoization. If you can solve it recursively with overlapping subproblems, you can optimize with DP.

---

## 🎯 Core Concepts

### When to Use DP
* Problem asks for optimal (min/max), count, or existence
* Overlapping subproblems: same inputs computed multiple times
* Optimal substructure: optimal solution uses optimal sub-solutions

### Two Approaches
* **Top-Down (Memoization):** Recursion + cache results in a dictionary
* **Bottom-Up (Tabulation):** Build solution iteratively from smallest subproblem

### Template (Top-Down)
```python
memo = {{}}
def solve(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = solve(n-1) + solve(n-2)
    return memo[n]
```

### Template (Bottom-Up)
```python
dp = [0] * (n + 1)
dp[1] = 1
for i in range(2, n + 1):
    dp[i] = dp[i-1] + dp[i-2]
return dp[n]
```

## 📝 Common DP Patterns
| Pattern | Examples |
|---------|---------|
| Fibonacci-style | Climbing Stairs, House Robber |
| 0/1 Knapsack | Subset Sum, Partition Equal Subset |
| Unbounded Knapsack | Coin Change, Rod Cutting |
| Longest Subsequence | LCS, LIS |
| Grid DP | Unique Paths, Minimum Path Sum |
| String DP | Edit Distance, Palindrome Substring |

## 📝 Must-Do Problems (15)
1. Climbing Stairs
2. Fibonacci Number
3. House Robber
4. Coin Change
5. Longest Increasing Subsequence
6. Longest Common Subsequence
7. 0/1 Knapsack
8. Unique Paths
9. Minimum Path Sum
10. Word Break
11. Edit Distance
12. Partition Equal Subset Sum
13. Target Sum
14. Longest Palindromic Substring
15. Decode Ways

---

## 🎬 Video Resources
**English:** {DSA_EN}
**Hindi:** {DSA_HI}
{FOOTER}"""
}

success = 0
for rel_path, markdown in PDFS.items():
    pdf_path = os.path.join(BASE, rel_path)
    md_path = pdf_path.replace(".pdf", ".md")
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    with open(md_path, "w") as f:
        f.write(markdown)
    print(f"Generating: {rel_path} ...")
    try:
        subprocess.run(["npx", "md-to-pdf", md_path], cwd=os.path.dirname(md_path),
                        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        success += 1
    except Exception as e:
        print(f"  FAILED: {e}")
    if os.path.exists(md_path):
        os.remove(md_path)

print(f"\nDONE: {success}/{len(PDFS)} DSA PDFs generated.")
