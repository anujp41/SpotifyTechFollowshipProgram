//decodeString(s)

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