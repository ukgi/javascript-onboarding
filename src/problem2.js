function problem2(cryptogram) {
  let isContinuous = true;
  const arr = [...cryptogram];
  while (isContinuous) {
    isContinuous = false;
    arr.forEach((_char, i) => {
      if (arr[i] === arr[i + 1]) {
        isContinuous = true;
        arr.splice(i, 2);
      }
    });
  }
  return arr.join('');
}

module.exports = problem2;
