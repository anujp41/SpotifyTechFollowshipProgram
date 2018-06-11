//changePossibilities(amount, amount)

function changePossibilities(amount, denominations) {
  const result = [];
  for (let i = 0; i <= amount; i++) {
    if (i === 0) result[0] = 1 //if target amount is 0, then there is 1 way of returning that amount; as this is always, we set the first value of result to 1
    else result[i] = 0;
  }

  for (let j = 0; j <= denominations.length; j++) {
    let currDenomonation = denominations[j];
    for (let currCoin = currDenomonation; currCoin <= amount; currCoin++) { // inner for-loop helps determine if we will use the current denomination by comparing it to target amount
      const remainder = currCoin-currDenomonation;
      result[currCoin] += result[remainder];
    }
  }
  return result[amount];
}