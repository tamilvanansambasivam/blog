### Problem Statement:

Write a function that takes an array of numbers as input and returns the sum of all elements.

eg:

```
Input: [1, 2, 3, 4]
Output: 10
```

Solution Plan:

Initialize a variable, `sum`, to store the total (start with 0).

Loop through the array and add each element to `sum`.

Return the `sum` after the loop.

```

function sumArray(arr) {
  let sum = 0; // Initialize sum to 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to sum
  }

  return sum; // Return the total sum
}

const arr = [1, 2, 3, 4];
console.log(sumArray(arr)); // Output: 10

```
