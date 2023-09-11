function problem7(user, friends, visitors) {
  const userFriends = checkUserFriends(user, friends);
  return checkMutualFriends(user, userFriends, friends);
}

function checkUserFriends(user, friends) {
  const friendListWithUser = friends.reduce((acc, cur) => {
    if (cur.includes(user)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return friendListWithUser.flat(2).filter((u) => u !== user);
}

function checkMutualFriends(user, userFriends, friends) {
  const mutualFriendsWithUserFriends = [];
  friends.forEach((friendList) => {
    userFriends.forEach((friend) => {
      if (friendList.includes(friend) && !friendList.includes(user)) {
        mutualFriendsWithUserFriends.push(friendList);
      }
    });
  });
  const mutualFriends = mutualFriendsWithUserFriends.flat(2).reduce((acc, cur) => {
    !userFriends.includes(cur) ? acc.push(cur) : acc;
    return acc;
  }, []);
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
