function problem6(forms) {
  const nickNames = makeNicknames(forms);
  console.log(nickNames);
}

module.exports = problem6;

function makeNicknames(forms) {
  const result = [];
  forms.forEach((user) => {
    result.push(user[1]);
  });
  return result;
}

problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '워니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);
