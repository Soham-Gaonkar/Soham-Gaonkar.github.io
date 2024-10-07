---
layout: post
title: PyCon 2024 Proposal
date: 2024-06-06 00:00:00 # The blog will be posted at exactly this time and date (based on the US time mostly)
description: My proposal for PyCon 2024, Bengaluru. Related to my work done in PyDataStructs during GSoC 2024.
tags: PyCon'24
categories: GSoC'24
featured: true
---

# Unleashing Python's Power: Lightning-fast speed with a C++ Backend
---

### Abstract
Python is an amazing programming language, because of it's simplicity, productivity and versatile ecosystem. However, when it comes to performance-critical tasks and numerical computing, the trade-off between ease of use and execution becomes a challenge. The solution to this: add a C++ backend! This retains all of Python's amazing functionality in the frontend and harnesses the lightning fast execution speed of C++. Experience the process of accelerating any Python code by adding a C++ backend.

### Description
PyDataStructs is an open source Python package for various data structures and algorithms, including their parallel implementations. As a part of Google Summer of Code 2024, I worked on adding a C++ backend for different tree data structures and their algorithms in PyDataStructs. This has greatly enhanced the speed of execution, making it 5-8 times faster. I have done this by extending Python with C++ using the Python C API. This allows the user to work in the simple and easy to understand Python frontend, while all the execution takes place in the C++ backend. The talk showcases the power of extending Python with C++ and provides an easy to understand demonstration of the same.

**Outline of the talk**

 - Introduction (2 minutes)
    - Welcome and a brief introduction of the speaker.
    - Overview of the talk's agenda and what the attendees can expect to learn.
 - What is PyDataStructs? (2 minutes)
    - Explaining PyDataStructs as an open source Python package for data structures and algorithms.
 - My contributions to PyDataStructs (1 minute)
    - A brief introduction of my work in Google Summer of Code 2024.
 - Speed benchmarks (1 minute)
    - Presenting performance benchmarks comparing Python and Python with a C++ backend.
 - Explaining the process of adding a C++ backend (an easy to understand example code will be used to support the points that follow)
    - Explaining what the example code's objective is and showing the Python code. (1 minute)
    - Introduction to Python C API (1 minute)
    - Explaining how custom types are created (1 minute)
    - Explaining how methods are defined (1 minute)
    - Explaining how members are defined (1 minute)
    - Explaining how memory is allocated and deallocated for custom types (1 minute)
    - Explaining pointer reference: counting, increasing and decreasing (1 minute)
    - Introducing setuptools and demonstrating how to build the module (1 minute)
    - Comparing the performance of the C++ backend against only Python code for this example. (1 minute)
 - Demonstrating the C++ backend in PyDataStructs (4 minutes)
    - Showcasing how this has been done for an entire Python package.
    - Demonstrating how OOPS concepts can be used in this.
    - Exhibiting how the user can change the backend to C++ (from regular Python)
 - Conclusion and  Takeaways (2 minutes)
    - Summarizing the key points covered in the talk.
    - Encouraging attendees to extend their Python codes/packages with C++ by using the Python C API.
 - Q&A session (5 minutes)
    - Allowing attendees to ask questions related to Python C API and PyDataStructs.
    - Engaging in discussions and providing clarifications as needed.
 - Closing Remarks (1 minute)
    - Extending gratitude to the audience for their participation.
    - Sharing contact information and additional resources for further exploration.

**Expected Takeaways**
Attendees will walk away with a comprehensive understanding of Python C API's capabilities, its role in enhancing Python's performance, and the practical steps to extend their Python projects with C/C++. They will be inspired to leverage the strengths of adding a C++ backend for amazingly fast computations without sacrificing Python's user-friendly features.

### Speaker information
Kishan Ved is a third year student at the Indian Institute of Technology Gandhinagar, India. He is pursuing a B.Tech degree in Computer Science and Engineering.

Kishan has contributed to Google Summer of Code 2024. He has developed open source software for NumFOCUS organization's project: PyDataStructs.

Being the Head Boy of his school, he has delivered a speech in a stadium, to an audience of 1000+ people, on the annual sports day. Here is a clip from the speech: [https://drive.google.com/file/d/1RtK_JPUGxIGHPMCT-JAw43ca922g0unf/view?usp=sharing](https://drive.google.com/file/d/1RtK_JPUGxIGHPMCT-JAw43ca922g0unf/view?usp=sharing)

### Pre-requisites
Basic knowledge of Python. A brief idea about C++  would be helpful (though not an absolute necessity).

### Content URLs
PyDataStructs: Website: [https://pydatastructs.readthedocs.io/en/stable/](https://pydatastructs.readthedocs.io/en/stable/)

PyDataStructs: GitHub: [https://github.com/codezonediitj/pydatastructs](https://github.com/codezonediitj/pydatastructs)

Slides: [https://drive.google.com/file/d/1K2DjwfJOrBZaMIlv5abQHZR0jxxO2yBE/view?usp=sharing](https://drive.google.com/file/d/1K2DjwfJOrBZaMIlv5abQHZR0jxxO2yBE/view?usp=sharing)

An example code will be used for explanation, as mentioned in the outline of the talk.

### Speaker links
GitHub: [https://github.com/Kishan-Ved](https://github.com/Kishan-Ved)

Google Summer of Code Blogs: [https://kishanved.tech/blog/](https://kishanved.tech/blog/)

Email: kishanved123456@gmail.com

LinkedIn: [https://www.linkedin.com/in/kishan-ved-506140259/](https://www.linkedin.com/in/kishan-ved-506140259/)