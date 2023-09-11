function problem6(forms) {
  const nicknameArr = makeNicknameArr(forms);
  const consecutiveLetters = checkDuplication(makeNicknameCombination(nicknameArr));
  const result = forms.reduce((acc, [email, nickname]) => {
    nickname.includes(consecutiveLetters) ? acc.push(email) : acc;
    return acc;
  }, []);
  return [...new Set(result)].sort();
}

function makeNicknameArr(forms) {
  return forms.reduce((acc, cur) => {
    acc.push(cur[1]);
    return acc;
  }, []);
}

function makeNicknameCombination(arr) {
  const combinationArr = [];
  arr.forEach((nickname) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      for (let j = 2; j <= nickname.length; j++) {
        nickname.slice(i, j).length < 2 ? combinationArr : combinationArr.push(nickname.slice(i, j));
      }
    }
  });
  return combinationArr;
}

// 여기서 중복된 값이 바로 연속적으로 포함된 글자
function checkDuplication(arr) {
  const duplication = [];
  arr.forEach((value, i) => {
    i !== arr.indexOf(value) ? duplication.push(value) : duplication;
  });
  return [...new Set(duplication)].join('');
}

module.exports = problem6;

// console.log(
//   problem6([
//     ['jm@email.com', '제이엠'],
//     ['jason@email.com', '제이슨'],
//     ['woniee@email.com', '워니'],
//     ['mj@email.com', '엠제이'],
//     ['nowm@email.com', '이제엠'],
//   ])
// );
