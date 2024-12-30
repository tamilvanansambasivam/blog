Now, let’s manipulate arrays.

### Problem 3: Add and Remove Elements

Add a new element at the end of an array.
Remove the first element.

```
// Solution

const animals = ["Cat", "Dog", "Elephant"];
animals.push("Fox"); // Add at the end
console.log("After adding Fox:", animals);

animals.shift(); // Remove the first element
console.log("After removing the first element:", animals);

```

### Problem 4: Find the Largest Number

Write a program to find the largest number in an array.

```
// Solution

const numbers = [5, 12, 8, 20, 1];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Largest number:", max);

```

## Slightly Challenging Problems

Now, practice more problem-solving with arrays.

### Problem 5: Reverse an Array

Write a function to reverse an array without using built-in methods.

```
// Solution

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
console.log("Reversed Array:", reverseArray(numbers));
```
