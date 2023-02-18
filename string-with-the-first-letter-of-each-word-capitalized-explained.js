/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");


/*
titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {


    //1
    let splitStr = str.toLowerCase().split(' ');
    //.toLowerCase() turns all the letters in the string into lower case.
    //.split(' ') takes all individual words and puts them into a new array
    
    //2
    for (let i = 0; i < splitStr.length; i++){
    // created for loop to iterate each word of the string
  
    //3
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
    //splitStr[i].charAt(0) bring the first index of each word
    //splitStr[i].charAt(0).toUpperCase() and capitilize first letter of each word
    //splitStr[i].substring(1) selects and starts from index one to rest of the word
    }
    
    //4
    return splitStr.join(' '); 
    //splitStr.join(' ')) ads all elements together  
  }
  
  console.log(titleCase("I'm a little tea pot"));