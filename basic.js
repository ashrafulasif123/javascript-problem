/**
 * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 */
const reverse = string => {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString =  reverseString + string[i];
    }
    return reverseString;
}

const revString = 'hello world';
const output = reverse(revString);
console.log(output);

/**
 * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
 */

const sumPositive = numbers =>{
  // console.log(numbers)
  let sum = 0;   
  for(i = 0; i <= numbers.length; i++){
    if(numbers[i] > 0){
      sum = sum + numbers[i];
    } 
  }
  return sum;
}

const alNumbers = [2, -5, 2, 8]
const result = sumPositive(alNumbers)
console.log(result)
/**
 * Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
 */
function mostFrequentElement(array) {
  // Create an object to store the frequency of each element in the array.
  const counts = {};
  for (const element of array) {
    if (counts[element] === undefined) {
      counts[element] = 1;
    } else {
      counts[element]++;
    }
  }

  // Find the element with the highest frequency.
  let mostFrequentElement = null;
  let maxCount = 0;
  for (const element in counts) {
    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mostFrequentElement = element;
    }
  }

  // Return the most frequent element.
  return mostFrequentElement;
}

const array = ["a", "b", "a", "b", "a", "c", "a", "c", "c", "c" , "c"];
console.log(mostFrequentElement(array)); // "a"

/**
 * Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
 */
const findTwoNumbersWithSum = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no such pair is found, return an empty array
  return [];
};

const sortedArray = [1, 3, 5, 7, 10];
const target = 10;

const result2 = findTwoNumbersWithSum(sortedArray, target);
console.log('The result is', result2);

/**
 * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 */
const generateRandomPassword = (length) => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
};

// Example usage: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

/**
 * Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */

const romanToInt = (romanNumeral) => {
  const romanNumeralsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralsMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21
console.log(romanToInt("MMXXI")); // Output: 2021
console.log(romanToInt("XLV")); // Output: 45

/**
 * Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

const findSecondSmallest = (numbers) => {
  if (numbers.length < 2) {
    throw new Error("The array must contain at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of numbers) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("There is no second smallest element in the array.");
  }

  return secondSmallest;
};

const numbers = [7, 1, 3, 5, 8, 4, 6];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); // Output: 2
