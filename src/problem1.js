const LEFT_PAGE_INDEX = 0;
const RIGHT_PAGE_INDEX = 1;
const FIRST_PAGE_NUM = 1;
const LAST_PAGE_NUM = 400;

function problem1(pobi, crong) {
  var answer;
  return answer;
}

class App {
  #pobi;
  #crong;
  constructor(pobi, crong) {
    this.#pobi = pobi;
    this.#crong = crong;
  }
}

function validatorInput(input) {
  if (!input.every((page) => !isNaN(page))) throw new Error('페이지는 숫자여야합니다.');
  if (input[RIGHT_PAGE_INDEX] - input[LEFT_PAGE_INDEX] !== 1) throw new Error('반드시 연속된 페이지를 입력해야합니다.');
  if (input[LEFT_PAGE_INDEX] === FIRST_PAGE_NUM || input[RIGHT_PAGE_INDEX] === LAST_PAGE_NUM)
    throw new Error('첫페이지와 마지막페이지는 제외해야합니다.');
}

module.exports = problem1;
