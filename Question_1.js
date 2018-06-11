//sortByStrings

function sortByString(s, t) {
  const sArray = s.split('');
  sArray.sort(function(prev, curr) {
    return t.indexOf(prev) - t.indexOf(curr);
  });
  const result = sArray.join('');
  return result;
}