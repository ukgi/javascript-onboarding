function problem3(number) {
  let result = 0;
  const arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i.toString());
  }

  const filtered = arr.filter((num) => num.includes('3') || num.includes('6') || num.includes('9'));

  filtered.forEach((num) => {
    [...num].forEach((n) => {
      n === '3' || n === '6' || n === '9' ? result++ : result;
    });
  });
  return result;
}

module.exports = problem3;
