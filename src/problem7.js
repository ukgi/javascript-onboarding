function problem7(user, friends, visitors) {
  return checkUserFriends(user, friends);
}

function checkUserFriends(user, friends) {
  const friendList = friends.reduce((acc, cur) => {
    if (cur.includes(user)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return friendList.flat(2).filter((u) => u !== user);
}

module.exports = problem7;

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);
