---
layout: post
title: My GSoC Progress
date: 2025-05-29 00:00:00 # The blog will be posted at exactly this time and date (based on the US time mostly)
description: My progress in Google Summer of Code 2024!
tags: GSoC'24
categories: GSoC'24
featured: true
---

## My GSoC Progress:
---
### Created the C++ backend for:
1. Node
2. TreeNode
3. ArrayForTrees
4. BinaryTree
5. Binary Search Tree

### I am Speed!
C++ backend runs at an extremely fast speed, when compared to the Python backend. Here's an example:
```python
def test_cpp_BST_speed():
    BST = BinarySearchTree
    import time
    b = BST()
    t1 = time.time()
    for node in range(-1000,1000):
        b.insert(node, node)
    t2 = time.time()
    b2 = BST(backend=Backend.CPP)
    t3 = time.time()
    for node in range(-1000,1000):
        b2.insert(node, node)
    t4 = time.time()
    print("Time taken by Python backend: ",t2-t1,"s")
    print("Time taken by C++ backend:    ",t4-t3,"s")
    
test_cpp_BST_speed()
```
#### Output
```
Time taken by Python backend:  6.889980792999268 s
Time taken by C++ backend:     0.8916661739349365 s
```

### What's working (everything in the C++ backend):
Given below are example codes for everything that I have implemented. They also serve as test cases.
##### TreeNode C++ backend test:
```python
def test_cpp_TreeNode():
    n = TreeNode(1,100,backend=Backend.CPP)
    assert str(n) == "(None, 1, 100, None)"
```

##### BinaryTrees C++ backend test:
```python
def test_cpp_BinaryTree():
    b = BinaryTree(1,100,backend=Backend.CPP)
    assert raises(NotImplementedError, b.insert) # Correctly throws NotImplementedError: This is an abstract method
    assert raises(NotImplementedError, b.delete) # Correctly throws NotImplementedError: This is an abstract method
    assert raises(NotImplementedError, b.search) # Correctly throws NotImplementedError: This is an abstract method
    assert str(b) == "[(None, 1, 100, None)]"
```

##### ArrayForTrees C++ backend test:
```python
def test_cpp_ArrayForTrees():
    from pydatastructs.linear_data_structures._backend.cpp import _arrays
    from pydatastructs.utils._backend.cpp import _nodes
    AFT = _arrays.ArrayForTrees
    root = TreeNode(1, 100, backend=Backend.CPP)
    A = AFT(_nodes.TreeNode, [root])
    assert str(A) == "['(None, 1, 100, None)']"
    node = TreeNode(2, 200, backend=Backend.CPP)
    A.append(node)
    assert str(A) == "['(None, 1, 100, None)', '(None, 2, 200, None)']"
```

##### BinarySearchTree C++ backend test:

`search()`
```python
def test_cpp_BinarySearchTree_search():
    b = BinarySearchTree(1,100, backend=Backend.CPP)
    assert str(b) == "[(None, 1, 100, None)]"
    assert b.search(1) == 0
    assert b.search(1,parent=False) == 0
    assert b.search(1,parent=True) == (0, None)
```

`insert()`
```python
def test_cpp_BinarySearchTree_insert():
    BST = BinarySearchTree
    b = BST(8, 8, backend=Backend.CPP)
    b.insert(3, 3)
    b.insert(10, 10)
    b.insert(1, 1)
    b.insert(6, 6)
    b.insert(4, 4)
    b.insert(7, 7)
    b.insert(14, 14)
    b.insert(13, 13)
    assert str(b) == \
    ("[(1, 8, 8, 2), (3, 3, 3, 4), (None, 10, 10, 7), (None, 1, 1, None), "
    "(5, 6, 6, 6), (None, 4, 4, None), (None, 7, 7, None), (8, 14, 14, None), "
    "(None, 13, 13, None)]")
```

`delete()` , `_simple_path()`, `lowest common ancestor _lca_1()`, `lowest common ancestor _lca_2()`, `rank()`, `select()`, `lower_bound` and `upper_bound`
```python
def test_cpp_BST2():
    BST = BinarySearchTree
    b = BST(8, 8, backend=Backend.CPP)

    ##### insert() and delete() tests #####
    b.delete(8)
    b.insert(8, 8)
    b.insert(3, 3)
    b.insert(10, 10)
    b.insert(1, 1)
    b.insert(6, 6)
    b.insert(4, 4)
    b.insert(7, 7)
    b.insert(14, 14)
    b.insert(13, 13)
    # Explicit check for the __str__ method of Binary Trees Class
    assert str(b) == \
    ("[(1, 8, 8, 2), (3, 3, 3, 4), (None, 10, 10, 7), (None, 1, 1, None), "
    "(5, 6, 6, 6), (None, 4, 4, None), (None, 7, 7, None), (8, 14, 14, None), "
    "(None, 13, 13, None)]")

    ##### _simple_path() test #####
    path = b._simple_path(1,0)
    assert path[0] == 0
    assert path[1] == 1
    assert path[2] == 3

    ##### search() and delete() tests #####
    assert b.search(10) == 2
    assert b.search(-1) is None
    assert b.delete(13) is True
    assert b.delete(13) is None
    assert b.search(13) is None
    assert b.delete(10) is True
    assert b.search(10) is None
    assert b.delete(3) is True
    assert b.search(3) is None
    assert b.delete(13) is None
    assert str(b) == "[(1, 8, 8, 7), (3, 4, 4, 4), '', (None, 1, 1, None), (None, 6, 6, 6), '', (None, 7, 7, None), (None, 14, 14, None)]"

    b.delete(7)
    b.delete(6)
    assert b.delete(1, balancing_info=True) == 1
    b.delete(4)
    assert str(b) ==  "[(None, 8, 8, 2), '', (None, 14, 14, None)]"

    bc = BST(1, 1, backend=Backend.CPP)
    assert bc.insert(1, 2) is None
    assert bc.delete(1, balancing_info=True) is None

    b2 = BST(-8, 8, backend=Backend.CPP)
    b2.insert(-3, 3)
    b2.insert(-10, 10)
    b2.insert(-1, 1)
    b2.insert(-6, 6)
    b2.insert(-4, 4)
    b2.insert(-7, 7)
    b2.insert(-14, 14)
    b2.insert(-13, 13)
    assert str(b2) ==  "[(2, -8, 8, 1), (4, -3, 3, 3), (7, -10, 10, None), (None, -1, 1, None), (6, -6, 6, 5), (None, -4, 4, None), (None, -7, 7, None), (None, -14, 14, 8), (None, -13, 13, None)]"
    b2.delete(-13)
    assert str(b2) == "[(2, -8, 8, 1), (4, -3, 3, 3), (7, -10, 10, None), (None, -1, 1, None), (6, -6, 6, 5), (None, -4, 4, None), (None, -7, 7, None), (None, -14, 14, None)]"
    b2.delete(-10)
    b2.delete(-3)
    b2.delete(-13)
    assert str(b2) ==  "[(7, -8, 8, 1), (4, -1, 1, None), '', '', (6, -6, 6, 5), (None, -4, 4, None), (None, -7, 7, None), (None, -14, 14, None)]"

    bl1 = BST(backend=Backend.CPP)
    nodes = [50, 30, 90, 70, 100, 60, 80, 55, 20, 40, 15, 10, 16, 17, 18]
    for node in nodes:
        bl1.insert(node, node)
    assert str(bl1) == "[(1, 50, 50, 2), (8, 30, 30, 9), (3, 90, 90, 4), (5, 70, 70, 6), (None, 100, 100, None), (7, 60, 60, None), (None, 80, 80, None), (None, 55, 55, None), (10, 20, 20, None), (None, 40, 40, None), (11, 15, 15, 12), (None, 10, 10, None), (None, 16, 16, 13), (None, 17, 17, 14), (None, 18, 18, None)]"

    ##### lowest common ancestor _lca2_() tests #####
    assert bl1.lowest_common_ancestor(80, 55, 2) == 70
    assert bl1.lowest_common_ancestor(60, 70, 2) == 70
    assert bl1.lowest_common_ancestor(18, 18, 2) == 18
    assert bl1.lowest_common_ancestor(40, 90, 2) == 50

    assert bl1.lowest_common_ancestor(18, 10, 2) == 15
    assert bl1.lowest_common_ancestor(55, 100, 2) == 90
    assert bl1.lowest_common_ancestor(16, 80, 2) == 50
    assert bl1.lowest_common_ancestor(30, 55, 2) == 50

    assert raises(ValueError, lambda: bl1.lowest_common_ancestor(60, 200, 2))
    assert raises(ValueError, lambda: bl1.lowest_common_ancestor(200, 60, 2))
    assert raises(ValueError, lambda: bl1.lowest_common_ancestor(-3, 4, 2))

    bl2 = BST(backend=Backend.CPP)
    nodes = [50, 30, 90, 70, 100, 60, 80, 55, 20, 40, 15, 10, 16, 17, 18]
    for node in nodes:
        bl2.insert(node, node)
    assert str(bl2) == "[(1, 50, 50, 2), (8, 30, 30, 9), (3, 90, 90, 4), (5, 70, 70, 6), (None, 100, 100, None), (7, 60, 60, None), (None, 80, 80, None), (None, 55, 55, None), (10, 20, 20, None), (None, 40, 40, None), (11, 15, 15, 12), (None, 10, 10, None), (None, 16, 16, 13), (None, 17, 17, 14), (None, 18, 18, None)]"

    ##### lowest common ancestor _lca1_() tests #####
    assert bl2.lowest_common_ancestor(80, 55, 1) == 70
    assert bl2.lowest_common_ancestor(60, 70, 1) == 70
    assert bl2.lowest_common_ancestor(18, 18, 1) == 18
    assert bl2.lowest_common_ancestor(40, 90, 1) == 50

    assert bl2.lowest_common_ancestor(18, 10, 1) == 15
    assert bl2.lowest_common_ancestor(55, 100, 1) == 90
    assert bl2.lowest_common_ancestor(16, 80, 1) == 50
    assert bl2.lowest_common_ancestor(30, 55, 1) == 50

    assert raises(ValueError, lambda: bl2.lowest_common_ancestor(60, 200, 1))
    assert raises(ValueError, lambda: bl2.lowest_common_ancestor(200, 60, 1))
    assert raises(ValueError, lambda: bl2.lowest_common_ancestor(-3, 4, 1))

    ##### rank() tests #####
    assert bl2.rank(18) == 5
    assert bl2.rank(10) == 1
    rank_list = [2, 2, 4, 4, 5, 4, 5, 3, 2, 3, 2, 1, 3, 4, 5]
    for i,node in enumerate(nodes):
        assert bl2.rank(node) == rank_list[i]
    assert bl2.rank(200) is None

    ##### select() tests #####
    select_list = [10, 50, 55, 90, 100]
    for i in range(5):
        assert bl2.select(i+1).key == select_list[i]

    b3 = BST(backend=Backend.CPP)
    b3.insert(10, 10)
    b3.insert(18, 18)
    b3.insert(7, 7)

    ##### upper_bound() tests #####
    assert b3.upper_bound(9) == 10
    assert b3.upper_bound(7) == 10
    assert b3.upper_bound(-1) == 7
    assert b3.upper_bound(20) is None

    ##### lower_bound() tests #####
    assert b3.lower_bound(9) == 10
    assert b3.lower_bound(7) == 7
    assert b3.lower_bound(-1) == 7
    assert b3.lower_bound(20) is None
```