function problem7(user, friends, visitors) {
  const userFriends = checkUserFriends(user, friends);
  const mutualFriends = checkMutualFriends(user, userFriends, friends);
  return makeObjectFriends(mutualFriends);
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
  return mutualFriends;
}

function makeObjectFriends(friends) {
  return friends.reduce((acc, cur) => {
    let found = false;
    const updatedAcc = acc.map((friend) => {
      if (friend.name === cur) {
        found = true;
        return { ...friend, score: friend.score + 10 };
      }
      return friend;
    });

    if (!found) {
      updatedAcc.push({ name: cur, score: 10 });
    }
    return updatedAcc;
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
