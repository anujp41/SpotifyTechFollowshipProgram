//decodeString(s)
// This function works in the given test conditions
// Assumptions: the input string is always in the form of "k[encoded_string] where encoded_string can have addditional square brackets"

function repeatStr(str, times) {
  return str.repeat(times);
}

function decodeString(s) {
  let result = '';
  let length = s.length-1;
  let subStr = '';
  while (length >= 0) {
    if (s[length] === ']' || s[length] === '[') {
      length--;
    } else {
      let times = +s[length];
      if (Number.isInteger(times)) {
        result = repeatStr((subStr+result), times);
        subStr = '';
      } else {
        subStr = s[length]+subStr;
      }
      length--;
    }
  }
  return result;
}

const inputArr = ['4[ab]', '2[b3[a]]']

console.log(inputArr.map(item => decodeString(item)));