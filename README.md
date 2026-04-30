# Bunny Array Manipulation

A simple JavaScript project that demonstrates array manipulation techniques including `push()`, `filter()`, and `unshift()` methods.

## Overview

This project showcases fundamental array operations in JavaScript by managing a list of bunny names. It's part of the TechyJaunt Week 2 Assignment 1 on Backend Development.

## Project Structure

- `bunny.js` - Main JavaScript file containing the array manipulation logic

## What Does It Do?

The `bunny.js` file performs the following operations on an array of bunny names:

1. **Initial Array**: Starts with 6 bunnies: oreo, lucy, daisy, snowball, coco, and thumper
2. **Add a Bunny**: Uses `push()` to add "mario" to the end of the array
3. **Remove a Bunny**: Uses `filter()` to remove "lucy" from the array
4. **Add at the Beginning**: Uses `unshift()` to add "luigi" at the start of the array
5. **Output**: Logs the final array to the console

## Code Walkthrough

```javascript
let bunnies = ["oreo", "lucy", "daisy", "snowball", "coco", "thumper"];
// Initial array with 6 bunnies

bunnies.push("mario");
// Array now: ["oreo", "lucy", "daisy", "snowball", "coco", "thumper", "mario"]

bunnies = bunnies.filter((bunny) => bunny !== "lucy");
// Array now: ["oreo", "daisy", "snowball", "coco", "thumper", "mario"]

bunnies.unshift("luigi");
// Array now: ["luigi", "oreo", "daisy", "snowball", "coco", "thumper", "mario"]

console.log(bunnies);
// Output: ["luigi", "oreo", "daisy", "snowball", "coco", "thumper", "mario"]
```

## Array Methods Used

- **`push()`** - Adds one or more elements to the end of an array
- **`filter()`** - Creates a new array with elements that pass the test implemented by the provided function
- **`unshift()`** - Adds one or more elements to the beginning of an array
- **`console.log()`** - Outputs the result to the console

## How to Run

1. Make sure you have Node.js installed on your machine
2. Navigate to the project directory
3. Run the file using:
   ```bash
   node bunny.js
   ```
4. View the output in your console

## Expected Output

```
['luigi', 'oreo', 'daisy', 'snowball', 'coco', 'thumper', 'mario']
```

## Learning Objectives

This project helps demonstrate:
- How to manipulate arrays in JavaScript
- Understanding of array methods: push, filter, and unshift
- How to work with arrow functions in callbacks
- Basic console output for debugging

## Author

Chigybillionz

## License

This is an educational assignment for TechyJaunt Week 2 Backend Development course.