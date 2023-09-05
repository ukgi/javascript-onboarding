function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

function getScore(page) {
  // 입력 배열의 요소가 숫자이기 때문에 string 타입으로 변환
  // 스프레드로 나눠준다
  // reduce를 이용해서 합을 구한다
  const leftSum = [...(page[0] + '')].reduce((acc, cul) => Number(cul) + acc, 0);
  const rightSum = [...(page[1] + '')].reduce((acc, cul) => Number(cul) + acc, 0);
  const leftMultiply = [...(page[0] + '')].reduce((acc, cul) => Number(cul) * acc, 1);
  const rightMultiply = [...(page[1] + '')].reduce((acc, cul) => Number(cul) * acc, 1);

  const result = [leftSum, rightSum, leftMultiply, rightMultiply];
  result.sort((a, b) => a - b);
  return result[result.length - 1];
}
