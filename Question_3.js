//changePossibilities(amount, amount)

function changePossibilities(amount, denominations) {
  const result = [];
  for (let i = 0; i <= amount; i++) {
    if (i === 0) result[0] = 1
    else result[i] = 0;
  }

  for (let j = 0; j <= denominations.length; j++) {
    let currDenomonation = denominations[j];
    for (let currCoin = currDenomonation; currCoin <= amount; currCoin++) {
      const remainder = currCoin-currDenomonation;
      result[currCoin] += result[remainder];
    }
  }
  console.log(result)
  return result[amount];
}

console.log(changePossibilities(10, [1, 2, 3]));