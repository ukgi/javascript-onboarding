const LEFT_PAGE_INDEX = 0;
const RIGHT_PAGE_INDEX = 1;
const FIRST_PAGE_NUM = 1;
const LAST_PAGE_NUM = 400;
const POBI_GAME_WIN = 1;
const CRONG_GAME_WIN = 2;
const DRAW_GAME = 0;
const ERROR_NUM = -1;

function problem1(pobi, crong) {
  try {
    const app = new App(pobi, crong);
    var answer = app.play();
    return answer;
  } catch (error) {
    return -1;
  }
}

class App {
  #pobi;
  #crong;

  constructor(pobi, crong) {
    this.#pobi = validatorInput(pobi);
    this.#crong = validatorInput(crong);
  }

  play() {
    const pobiMaxNum = this.#calculatorMaxNum(this.#pobi);
    const crongMaxNum = this.#calculatorMaxNum(this.#crong);
    return this.#printWinner(pobiMaxNum, crongMaxNum);
  }

  #calculatorMaxNum(input) {
    const maxLeftPageNum = this.#calculatorEachPageMaxNum(input[LEFT_PAGE_INDEX]);
    const maxRightPageNum = this.#calculatorEachPageMaxNum(input[RIGHT_PAGE_INDEX]);
    return maxLeftPageNum > maxRightPageNum ? maxLeftPageNum : maxRightPageNum;
  }

  #calculatorEachPageMaxNum(page) {
    const SumEachDigit = String(page)
      .split('')
      .reduce((acc, cur) => (acc += Number(cur)), 0);

    const MultiplyEachDigit = String(page)
      .split('')
      .reduce((acc, cur) => (acc *= Number(cur)), 1);

    return SumEachDigit > MultiplyEachDigit ? SumEachDigit : MultiplyEachDigit;
  }

  #printWinner(pobiMaxNum, crongMaxNum) {
    if (pobiMaxNum > crongMaxNum) return POBI_GAME_WIN;
    if (pobiMaxNum < crongMaxNum) return CRONG_GAME_WIN;
    if (pobiMaxNum === crongMaxNum) return DRAW_GAME;
    return ERROR_NUM;
  }
}

function validatorInput(input) {
  const userInput = [...input].map((page) => Number(page));
  if (!userInput.every((page) => !isNaN(page))) throw new Error('페이지는 숫자여야합니다.');
  if (userInput[RIGHT_PAGE_INDEX] - userInput[LEFT_PAGE_INDEX] !== 1)
    throw new Error('반드시 연속된 페이지를 입력해야합니다.');
  if (userInput[LEFT_PAGE_INDEX] === FIRST_PAGE_NUM || userInput[RIGHT_PAGE_INDEX] === LAST_PAGE_NUM)
    throw new Error('첫페이지와 마지막페이지는 제외해야합니다.');
  return userInput;
}

module.exports = problem1;
