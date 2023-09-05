function problem2(cryptogram) {
  let isContinuous = true;
  const arr = [...cryptogram];
  while (isContinuous) {
    isContinuous = false; // 초기에 false로 설정
    arr.forEach((char, i) => {
      if (arr[i] === arr[i + 1]) {
        isContinuous = true; // 두 문자가 같으면 true로 설정
        arr.splice(i, 2);
      }
    });
  }
  return arr.join('');
}

module.exports = problem2;

console.log(problem2('browoanoommnaon'));
