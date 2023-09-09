const amount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const result = [];
  amount.forEach((m) => {
    result.push(parseInt(money / m));
    money -= parseInt(money / m) * m;
  });
  return result;
}

module.exports = problem5;
