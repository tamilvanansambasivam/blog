## Array Operations

Access elements by index.
Insert elements.
Delete elements.
Iterate through elements.

### Problem 1: Create and Access an Array

#### Write a program to:

Create an array of numbers.
Print the first and last element of the array.

```

// Solution
const numbers = [10, 20, 30, 40, 50];

console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

```

### Problem 2: Iterate Through an Array

Write a program to print each element in an array.

```
// Solution
const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Element ${i}:`, fruits[i]);
}
```
