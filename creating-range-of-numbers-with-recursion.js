/*
There is a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins 
with a number represented by the startNum parameter and ends 
with a number represented by the endNum parameter. The starting 
number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use 
loops of any kind. It should also work for cases where both 
startNum and endNum are the same.
*/

//Starting number must be stable!
//That's why it is written as "var newArray = rangeOfNumbers(startNum, endNum - 1)"
// Since starting number is stable endNum must be endNum -1 !
// and then endNum is pushed as .push(endNum)

// First way
function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
      return [startNum];
    } 
    else{
      var newArray = rangeOfNumbers(startNum, endNum - 1);
      newArray.push(endNum);
      return newArray;
    }
  }
console.log(rangeOfNumbers(1, 10));

// Second way
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
console.log(rangeOfNumbers(1, 10));

// Third way
function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
  }

