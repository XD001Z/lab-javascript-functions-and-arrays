// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2)
}

// Iteration #2: Find longest word
function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0){
    return null
  }
  let longestWord = {
    wordLength: 0,
    word: ""
  }
  for (let i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i].length > longestWord["word"].length){
      longestWord["wordLength"] = arrayOfWords[i].length
      longestWord["word"] = arrayOfWords[i]
    }
  }
  return longestWord["word"]
}

// Iteration #3: Calculate the sum
function sumNumbers(arrayOfNum) {
  totalSum = 0
  for (let i = 0; i < arrayOfNum.length; i++) {
    totalSum += arrayOfNum[i]
  }
  return totalSum
}

// Iteration #3.1 Bonus:
function sum(mixedArray) {
  totalSum = 0
  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "string"){
      totalSum += mixedArray[i].length
    }
    else if (typeof mixedArray[i] === "boolean"){
      if (mixedArray[i]){
        totalSum++
      }
    }
    else if (typeof mixedArray[i] === "number") {
      totalSum += mixedArray[i]
    }
    else {
      throw new Error('Invalid parameter');
    }
  }
  return totalSum
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(arrayOfNum) {
  if (arrayOfNum.length === 0) {
    return null
  }
  let average = sumNumbers(arrayOfNum)/arrayOfNum.length
  return average
}

// Level 2: Array of strings
function averageWordLength(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null
  }
  let totalChar = 0
  for (let i = 0; i < arrayOfWords.length; i++) {
    totalChar += arrayOfWords[i].length 
  }
  let avgChar = totalChar/arrayOfWords.length
  return avgChar
}

// Bonus - Iteration #4.1
function avg(mixedArray) {
  if (mixedArray.length === 0) {
    return null
  }
  let totalSum = sum(mixedArray)
  let mixAvg = totalSum / mixedArray.length
  return mixAvg
}

// Iteration #5: Unique arrays
function uniquifyArray(dupeArray) {
  if (dupeArray.length === 0){
    return null
  }
  let uniqueArray = []
  for (let i = 0; i < dupeArray.length; i++) {
    if (!uniqueArray.includes(dupeArray[i])) {
      uniqueArray.push(dupeArray[i])  
    }
  }
  return uniqueArray
}

// Iteration #6: Find elements
function doesWordExist(arrayOfWords, wordToSearch) {
  if (arrayOfWords.length === 0) {
    return null
  }
  if (arrayOfWords.includes(wordToSearch)) {
    return true
  }
  return false
}

// Iteration #7: Count repetition
function howManyTimes(arrayOfWords, wordToSearch) {
  let timesFound = 0
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (wordToSearch === arrayOfWords[i]) {
      timesFound++
    }
  }
  return timesFound
}

// Iteration #8: Bonus
function greatestProduct(matrix) {
  let prod = undefined
  let maxProd = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((j-3) >= 0) {
        prod = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2] * matrix[i][j-3]
        if (prod > maxProd) {
          maxProd = prod   
        }
      }
      if ((i-3) >= 0) {
        prod = matrix[i][j] * matrix[i-1][j] * matrix[i-2][j] * matrix[i-3][j]
        if (prod > maxProd) {
          maxProd = prod
        }
      }
    }
  }
  return maxProd
}

//Level 2
function greatestProductOfDiagonals(matrix) {
  let prod = undefined
  let maxProd = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((i - 3) >= 0 && (j - 3) >= 0) {
        prod = matrix[i][j] * matrix[i-1][j-1] * matrix[i-2][j-2] * matrix[i-3][j-3]
        if (prod > maxProd) {
          maxProd = prod   
        }
      }
      if ((i - 3) >= 0 && (j - 3) <= 0) {
        prod = matrix[i][j] * matrix[i-1][j+1] * matrix[i-2][j+2] * matrix[i-3][j+3]
        if (prod > maxProd) {
          maxProd = prod
        }
      }
    }
  }
  return maxProd
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
