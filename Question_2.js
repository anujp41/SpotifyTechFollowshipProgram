//decodeString(s)
// Assumptions: the input string is always in the form of "k[encoded_string] where encoded_string can have additional square brackets nested within

function repeatStr(str, times) {
  return str.repeat(times);
}

function decodeString(s) {
  let result = ''; //variable will store final result
  let length = s.length-1;
  let subStr = ''; //variable will store strings between square braces prior to repeating the string
  while (length >= 0) { 
    if (s[length] === ']' || s[length] === '[') { // if current string is a bracket, function doesn't do anything
      length--;
    } else {
      let times = +s[length]; //checks if a string is a number; also helps verify that a square brackets pair is closed as all opening brackets have a number before them
      if (Number.isInteger(times)) {
        result = repeatStr((subStr+result), times); // saved the outut of each repetition to result which can be repeated again
        subStr = ''; //reset the substring after repeating
      } else {
        subStr = s[length]+subStr; //additional string is added to the front
      }
      length--;
    }
  }
  return result;
}