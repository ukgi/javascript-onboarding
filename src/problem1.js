function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

function getScore(page) {
  const leftSum = [...(page[0] + '')].reduce((acc, cul) => Number(cul) + acc, 0);
  const rightSum = [...(page[1] + '')].reduce((acc, cul) => Number(cul) + acc, 0);
  const leftMultiply = [...(page[0] + '')].reduce((acc, cul) => Number(cul) * acc, 1);
  const rightMultiply = [...(page[1] + '')].reduce((acc, cul) => Number(cul) * acc, 1);

  const result = [leftSum, rightSum, leftMultiply, rightMultiply];
  result.sort((a, b) => a - b);
  return result[result.length - 1];
}

function exceptionHandler(page) {
  if (page[0] === 1 || page[1] === 2 || page[0] === 399 || page[1] === 400) return false;
  else if (page[1] - page[0] !== 1) return false;
  else if (page[0] % 2 === 0 || page[1] % 2 !== 0) return false;
  else return true;
}
