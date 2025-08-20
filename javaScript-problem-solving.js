// Problem 1: Reverse a String
const reverseString = (s) => s.split('').reverse().join('');

// Problem 2: Count Vowels in a String
const countVowels = (s) => {
    const vowels = "aeiou";

    const strLow = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < strLow.length; i++) {
        if (vowels.includes(strLow[i])) {
            count += 1;
        }
    }
    return count;
}

// Problem 3: Check for Palindrome
const palindrome = (s) => {
    const strLow = s.toLowerCase();
    const reversedString = strLow.split('').reverse().join('');
    if (strLow === reversedString) {
        return true
    } else {
        return false
    }
}

// Problem 4: Find the Maximum Number
const maxNum = (arr) => Math.max(...arr);

// Problem 5: Remove Duplicates from an Array
const removeDuplicates = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

// Problem 6: Sum of All Numbers in an Array
const sumOfArray = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
}

// Problem 7: Find Even Numbers in an Array
const findEvenNum = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result
}


// Problem 8: Capitalize First Letter of Each Word
const capitalizeFirstLetter = (word) => {
    return word
        .trim()
        .split(" ")
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join(" ")
}

// Problem 9: Find the Factorial of a Number
const factorialOfNum = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Problem 10: PingPong Challenge
const pingPong = () => {
    let result = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("PingPong")
        }
        else if (i % 3 === 0) {
            result.push("Ping")
        }
        else if (i % 5 ===0 ) {
            result.push('Pong')
        } else {
            result.push(i)
        }
    }
    console.log(result.join(", "))
}


