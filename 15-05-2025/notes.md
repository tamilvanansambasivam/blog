Here’s a **custom set of 10 beginner-friendly array problems**, designed to go from **absolute basics** to **early problem-solving patterns**. All problems are doable with simple Python and no advanced tricks.

---

## 🧠 10 Custom Array Problems for Noobs — From Ground Up

---

### 🔹 **1. Sum All Elements**

**Problem:**
Given a list of integers, return the sum of all the elements.

**Example:**
Input: `[1, 2, 3, 4]` → Output: `10`

**code**

solution:

```
arrayValue = [1, 2, 3, 4]

sum = 0
for i in arrayValue:
    sum += i

print(sum)

```

---

### 🔹 **2. Find the Maximum Number**

**Problem:**
Return the largest number from the given list.

**Example:**
Input: `[5, 2, 9, 1]` → Output: `9`

**code**

```
arr = [5, 2, 9, 1]
largest = arr[0]

for num in arr:
    if num > largest:
        largest = num

print(largest)

```

---

### 🔹 **3. Count Even Numbers**

**Problem:**
Count how many even numbers are in the list.

**Example:**
Input: `[1, 2, 4, 7, 8]` → Output: `3`

**code**

```
arr = [1, 2, 4, 7, 8]
count = 0

for num in arr:
    if num % 2 == 0:
        count += 1

print(count)

```

---

### 🔹 **4. Reverse the Array**

**Problem:**
Return a new list with the elements in reverse order.

**Example:**
Input: `[1, 2, 3]` → Output: `[3, 2, 1]`

**code**

```
arr = [1, 2, 3]
reversed_arr = []

for i in range(len(arr) - 1, -1, -1):
    reversed_arr.append(arr[i])

print(reversed_arr)

```

---

### 🔹 **5. Replace All Zeros with -1**

**Problem:**
Change every `0` in the list to `-1` and return the new list.

**Example:**
Input: `[0, 2, 0, 4]` → Output: `[-1, 2, -1, 4]`

**code**

```
arr = [0, 2, 0, 4]
new_arr = []

for num in arr:
    if num == 0:
        new_arr.append(-1)
    else:
        new_arr.append(num)

print(new_arr)

```

---

### 🔹 **6. Create a List of Squares**

**Problem:**
Return a list where each element is the square of the original number.

**Example:**
Input: `[1, 2, 3]` → Output: `[1, 4, 9]`

**code**

```
arr = [1, 2, 3]
squares = []

for num in arr:
    squares.append(num * num)

print(squares)

```

---

### 🔹 **7. Count How Many Times a Number Appears**

**Problem:**
Given a list and a target number, count how many times the target appears.

**Example:**
Input: `[1, 2, 2, 3, 2]`, target = `2` → Output: `3`

**code**

```

```

---

### 🔹 **8. Remove All Negative Numbers**

**Problem:**
Return a list with all the negative numbers removed.

**Example:**
Input: `[1, -2, 3, -4]` → Output: `[1, 3]`

**code**

```

```

---

### 🔹 **9. Find the Second Largest Number**

**Problem:**
Return the second highest number in the list.

**Example:**
Input: `[3, 5, 1, 4]` → Output: `4`

**code**

```

```

---

### 🔹 **10. Shift Elements Right by One**

**Problem:**
Move all elements one step to the right. The last element should go to the front.

**Example:**
Input: `[1, 2, 3, 4]` → Output: `[4, 1, 2, 3]`

**code**

```

``

---
```
