from pdf_css import *

CONTENT = {}

CONTENT["02_DSA_Parallel_Track/01_Arrays_and_Strings/Arrays_and_Strings_Guide.pdf"] = f"""{CSS}

# Arrays and Strings

The most frequently asked topics in coding interviews.

---

## 🎯 Key Concepts

### Arrays
* Contiguous memory, Access O(1), Search O(n)
* **Two Pointers:** Sorted arrays, pair problems
* **Prefix Sum:** Range queries
* **Kadane's Algorithm:** Maximum subarray sum O(n)

### Strings
* Immutable in Python
* Methods: `.find()`, `.count()`, `.replace()`, `.split()`, `.join()`
* **Sliding Window on Strings:** Find substrings matching condition

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

### English — NeetCode
* {L("https://www.youtube.com/watch?v=IiDuXLqV6e4","Arrays & Hashing Masterclass (1hr 53min)")}
* {L("https://www.youtube.com/playlist?list=PL_97vI-C8EX87glwX2xcMfFZTCinDEm8n","Arrays & Hashing Playlist (NeetCode 150)")}
* {L("https://www.youtube.com/playlist?list=PLtWSRlKFDhsqLgNOQpXALOGrRMweMJT32","DSA Beginners Full Course")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series — Lecture 1 (Shradha Ma'am)")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist")}
{FOOTER}"""

CONTENT["02_DSA_Parallel_Track/02_Hashing_and_Sliding_Window/Hashing_and_Sliding_Window_Guide.pdf"] = f"""{CSS}

# Hashing and Sliding Window

Hashing gives O(1) lookups. Sliding window solves subarray/substring problems efficiently.

---

## 🎯 Hashing
* Store key-value pairs with O(1) average lookup
* Python: `dict`, `collections.Counter`, `collections.defaultdict`
* "Find if X exists" → hash set, "Count occurrences" → Counter

## 🎯 Sliding Window
### Fixed-Size: Given window size k, slide across array
### Variable-Size: Expand until condition met, then shrink

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

### English — NeetCode
* {L("https://www.youtube.com/watch?v=IiDuXLqV6e4","Arrays & Hashing Full Masterclass")}
* {L("https://www.youtube.com/playlist?list=PL_97vI-C8EX87glwX2xcMfFZTCinDEm8n","Arrays & Hashing Playlist")}
* {L("https://www.youtube.com/@NeetCode/playlists","NeetCode All Playlists (Sliding Window)")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series — Lecture 1")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist")}
{FOOTER}"""

CONTENT["02_DSA_Parallel_Track/03_Recursion_and_Stack_Queue/Recursion_Stack_Queue_Guide.pdf"] = f"""{CSS}

# Recursion, Stack & Queue

---

## 🎯 Recursion
* Base case + recursive case, each call adds to call stack
* Common: Factorial, Fibonacci, Subsets, Permutations, Tree traversals

## 🎯 Stack (LIFO) & Queue (FIFO)
* Stack: `.append()` / `.pop()` — parentheses, DFS, monotonic stack
* Queue: `deque` — `.append()` / `.popleft()` — BFS, sliding window

## 📝 Must-Do Problems (15)
1. Climbing Stairs
2. Valid Parentheses (stack)
3. Min Stack
4. Next Greater Element
5. Subsets (backtracking)
6. Permutations
7. Combination Sum
8. Generate Parentheses
9. Queue using Stacks
10. Daily Temperatures
11. Evaluate Reverse Polish Notation
12. N-Queens
13. Word Search
14. Letter Combinations of Phone Number
15. Power of Two

---

## 🎬 Video Resources

### English — NeetCode
* {L("https://www.youtube.com/playlist?list=PLtWSRlKFDhsqLgNOQpXALOGrRMweMJT32","DSA Beginners Course (Recursion/Stack/Queue)")}
* {L("https://www.youtube.com/@NeetCode/playlists","NeetCode All Playlists (Stack & Queue)")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series — Lecture 1")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist")}
{FOOTER}"""

CONTENT["02_DSA_Parallel_Track/04_Trees_and_Graphs/Trees_and_Graphs_Guide.pdf"] = f"""{CSS}

# Trees and Graphs

Trees power decision trees in ML. Graphs power recommendation systems.

---

## 🎯 Trees
* Binary Tree: max 2 children, traversals (Inorder, Preorder, Postorder, Level Order)
* BST: Left < parent < right, O(log n) operations

## 🎯 Graphs
* Adjacency List representation, BFS (queue) and DFS (stack/recursion)
* Shortest Path (BFS/Dijkstra), Cycle Detection, Topological Sort

## 📝 Must-Do Problems (15)
1. Maximum Depth of Binary Tree
2. Invert Binary Tree
3. Binary Tree Level Order Traversal
4. Validate BST
5. Lowest Common Ancestor
6. Number of Islands (BFS/DFS)
7. Clone Graph
8. Course Schedule (topological sort)
9. Word Ladder
10. Serialize/Deserialize Binary Tree
11. Same Tree
12. Binary Tree from Preorder and Inorder
13. Pacific Atlantic Water Flow
14. Binary Tree Maximum Path Sum
15. Graph Valid Tree

---

## 🎬 Video Resources

### English — NeetCode
* {L("https://www.youtube.com/playlist?list=PLtWSRlKFDhsqLgNOQpXALOGrRMweMJT32","DSA Beginners Course (Trees & Graphs)")}
* {L("https://www.youtube.com/@NeetCode/playlists","NeetCode All Playlists (Trees/Graphs)")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series — Lecture 1")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist (Trees & Graphs)")}
{FOOTER}"""

CONTENT["02_DSA_Parallel_Track/05_Dynamic_Programming_Basics/Dynamic_Programming_Guide.pdf"] = f"""{CSS}

# Dynamic Programming Basics

DP = Recursion + Memoization.

---

## 🎯 Core Concepts
* **When to use:** Optimal (min/max), count, overlapping subproblems
* **Top-Down:** Recursion + cache, **Bottom-Up:** Iterative tabulation

## 📝 DP Patterns
| Pattern | Examples |
|---------|---------|
| Fibonacci-style | Climbing Stairs, House Robber |
| 0/1 Knapsack | Subset Sum, Partition Equal |
| Unbounded Knapsack | Coin Change, Rod Cutting |
| Longest Subsequence | LCS, LIS |
| Grid DP | Unique Paths, Min Path Sum |
| String DP | Edit Distance, Palindrome |

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

### English — NeetCode
* {L("https://www.youtube.com/watch?v=_i4Yxeh5ceQ","Dynamic Programming 1D — Full Course")}
* {L("https://www.youtube.com/watch?v=qMky6D6YtXU","Dynamic Programming 2D — Full Course")}
* {L("https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_tjrr_m2lgD2NsRHlNO","DP Full Playlist")}

### Hindi — Apna College
* {L("https://www.youtube.com/watch?v=VTLCoHnyACE","DSA Series — Lecture 1")}
* {L("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","Java & DSA Full Playlist (DP covered)")}
{FOOTER}"""
