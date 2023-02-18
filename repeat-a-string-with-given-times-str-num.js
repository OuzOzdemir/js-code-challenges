Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//lets understand what the challenge asks for

//return the "str" "num"ber of times
//retrun an empty string " " if num < 1(pozitife number)

//lets read user stories
//repeatStringNumTimes("*", 3) should return "***".
//repeatStringNumTimes("abc", 3) should return "abcabcabc".
//repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
//repeatStringNumTimes("abc", 1) should return "abc".
//repeatStringNumTimes("*", 8) should return "********".
//repeatStringNumTimes("abc", -2) should return "".
//repeatStringNumTimes("abc", 0) should return "".
function repeatStringNumTimes(str, num) {
    if(num < 1){
      return "";
    } else if (num === 1) {
      return str;
    }else{
      return str + repeatStringNumTimes(str, num -1);
    }
  }
  
  repeatStringNumTimes("abc", 3);