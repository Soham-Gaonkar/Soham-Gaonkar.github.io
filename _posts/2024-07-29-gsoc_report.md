---
layout: post
title: GSoC '24 Final Report
date: 2024-07-28 00:00:00 # The blog will be posted at exactly this time and date (based on the US time mostly)
description: My Google Summer of Code 2024 Report
tags: GSoC'24
categories: GSoC_Report
featured: true
---

# Google Summer of Code 2024 Report
This report summarizes the work done by me (**[Kishan Ved](https://github.com/Kishan-Ved)**) for **Google Summer of Code 2024** with the **NumFOCUS** organization, on the project **[Open Science Labs: PyDataStructs: Add a C++ Backend for tree data structures and their algorithms](https://summerofcode.withgoogle.com/programs/2024/projects/2nrxEFTg)**.
Weekly reports are available here: [GSoC BLogs](https://kishanved.tech/blog/)

This report is available as a GitHub Gist, it contains more revisions. [View here.](https://gist.github.com/Kishan-Ved/ebe0a971220d67517ae815e4f92d2459)

![alt text](../assets/img/GSoC_NumFOCUS.png){:width="100%"}

## About me
I am Kishan Ved, an undergraduate student at the Indian Institute of Technology Gandhinagar (IIT Gandhinagar), India, in the department of Computer Science and Engineering.

## About PyDataStructs

[PyDataStructs](https://github.com/codezonediitj/pydatastructs) aims to be a Python package for various data structures in computer science. We are also working on the development of algorithms including their parallel implementations. To the best of our knowledge, PyDataStructs is the first well-designed library/package which has covered most of the data structures and algorithms.

Features: 

- A single package for all your data structures and algorithms - We have and are implementing many popular and useful data structures and algorithms.

- Consistent and Clean Interface - The APIs we have provided are consistent with each other, clean and easy to use. We make sure of that before adding any new data structure or algorithm.

- Well Tested - We thoroughly test our code before making any new addition to PyDataStructs. 99 percent lines of our code have already been tested by us.

So, you can easily rely on PyDataStructs for any data structure or algorithm you want to use without worrying about implementing it from scratch. Everything is just a few calls away.

## GSoC Project Goals

My project involved adding a C++ backend for all tree data structures in [PyDataStructs](https://github.com/codezonediitj/pydatastructs), a Python package for advanced data structures and algorithms. The user has an option to select either the Python backend or the C++ backend.

```python
tree = RedBlackTree(backend=Backend.CPP)
```

For any data structure, the Python backend is developed first, and once completely tested and ready, its C++ backend is developed. Both the backends share full functionality and are completely compatible. The C++ backend is extremely fast, it executes codes 8-10 times faster. This enhances the computation speed, making it extremely valuable for scientific computing and high-performance applications.

## Project Outline
I started working from the community bonding period itself, and this gave me a good headstart and allowed me to complete the project in 12 weeks. Here's an outline of all the work I did:

### Pre GSoC Work

| PR Description | Contribution |
|------------------|--------------|
| [Added Introsort algorithm](https://github.com/codezonediitj/pydatastructs/pull/549) | **<span style="color: green;">+127</span>** |
| [Fixed version related bugs](https://github.com/codezonediitj/pydatastructs/pull/553) | **<span style="color: green;">+4</span>** |

### Community bonding period

| PR Description | Contribution |
|------------------|--------------|
| [C++ backend for Node, TreeNode, ArrayForTrees, BinaryTree and BinarySearchTree and all tree traversals implemented](https://github.com/codezonediitj/pydatastructs/pull/556) | **<span style="color: green;">+1,936</span>** |

### Coding Phase 1

| PR Description | Contribution |
|------------------|--------------|
| [C++ backend for Self Balancing Binary Tree](https://github.com/codezonediitj/pydatastructs/pull/559) | **<span style="color: green;">+328</span>** |
| [C++ backend for Red Black Trees](https://github.com/codezonediitj/pydatastructs/pull/560) | **<span style="color: green;">+748</span>** |
| [C++ backend for Binary Indexed Trees](https://github.com/codezonediitj/pydatastructs/pull/561) | **<span style="color: green;">+179</span>** |
| [C++ backend for Splay Trees](https://github.com/codezonediitj/pydatastructs/pull/562) | **<span style="color: green;">+423</span>** |

### Coding Phase 2

| PR Description | Contribution |
|------------------|--------------|
| [C++ backend for AVL Trees](https://github.com/codezonediitj/pydatastructs/pull/564) | **<span style="color: green;">+488</span>** |
| [C++ backend for Cartesian Trees](https://github.com/codezonediitj/pydatastructs/pull/567) | **<span style="color: green;">+254</span>** |
| [C++ backend for Treap](https://github.com/codezonediitj/pydatastructs/pull/568) | **<span style="color: green;">+150</span>** |
| [C++ backend for all trees in `binary_trees.py` file complete](https://github.com/codezonediitj/pydatastructs/pull/569) | **<span style="color: green;">+72</span>** |
| [Updated Documentation](https://github.com/codezonediitj/pydatastructs/pull/570) | **<span style="color: green;">+12</span>** |

---

## Contribution Stats:

Lines added: **<span style="color: green;">+4,709</span>** (#2 contributor in terms of lines added)

Commits made: 11

Total merged Pull Requests : 11

Here's a complete list of all my [merged PRs](https://github.com/codezonediitj/pydatastructs/pulls?q=is%3Apr+is%3Amerged+author%3AKishan-Ved)

## Speed results

Time taken for methods of Binary Search Tree class to execute in different backends:
<p align="center">
  <img src="https://gist.github.com/user-attachments/assets/2b8fdf65-75d4-4636-aba1-525289c76615" alt="Centered Image">
</p>


## Weekly reports
My Google Summer of Code blogs are available on my website: [https://kishanved.tech/blog/](https://kishanved.tech/blog/)

## Future work
Some issues have been opened, these can be addressed. Refer PyDataStructs Wiki on GitHub for upcoming plans.

## Learnings

**Tech**: Mastered the art of linking a Python code to a C++ backend by using the Python-C API to improve speeds greatly. Polished my C++ and Python coding skills.

**GitHub**: Learned various new commands, resolution of conflicts and merging branches for collaborative work.

**Perseverance**: GSoC taught me to read the documentation, be calm and perseverant. It's difficult at the start but smoother ahead!

---

Thanks to my mentor [Gagandeep Singh](https://github.com/czgdp1807) for his support and guidance. Thanks to [Ivan Ogasawara](https://github.com/xmnlab) and the team at Open Science Labs and NumFOCUS.