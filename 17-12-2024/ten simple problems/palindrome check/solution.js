function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split("").reverse().join("");
  // Check if the original string is equal to its reversed version
  return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
