function problem7(user, friends, visitors) {
  const userFriends = checkUserFriends(user, friends);
  const mutualFriends = checkMutualFriends(user, userFriends, friends);
  const visitorList = checkVisitor(userFriends, visitors);
  const combineMutualAndVisitor = combineScores(
    makeObject(mutualFriends, 'mutualFriend').concat(makeObject(visitorList, 'visitor'))
  );
  return sortArray(combineMutualAndVisitor);
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
  return mutualFriendsWithUserFriends.flat(2).filter((user) => !userFriends.includes(user));
}

function checkVisitor(userFriends, visitors) {
  const visitorList = [];
  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      visitorList.push(visitor);
    }
  });
  return visitorList;
}

// ✅
// 배열의 요소로 어떤값을 새롭게 매핑한다 -> map
// 기존의 배열의 요소를 활용해서 어떤 값을 추출한다 -> reduce
function makeObject(friends, option) {
  return friends.reduce((acc, cur) => {
    let found = false;
    const updatedAcc = acc.map((friend) => {
      if (friend.name === cur) {
        found = true;
        return option === 'visitor' ? { ...friend, score: friend.score + 1 } : { ...friend, score: friend.score + 10 };
      }
      return friend;
    });

    if (!found) {
      option === 'visitor' ? updatedAcc.push({ name: cur, score: 1 }) : updatedAcc.push({ name: cur, score: 10 });
    }
    return updatedAcc;
  }, []);
}

// ✅
// 함꼐아는 친구이면서 방문자인경우에는 점수를 합쳐야된다
function combineScores(arr) {
  const scoreMap = {};
  arr.forEach(({ name, score }) => {
    if (scoreMap.hasOwnProperty(name)) {
      scoreMap[name] += score;
    } else {
      scoreMap[name] = score;
    }
  });

  return Object.keys(scoreMap).map((name) => ({
    name,
    score: scoreMap[name],
  }));
}

function sortArray(arr) {
  return arr
    .sort()
    .sort((a, b) => b['score'] - a['score'])
    .map((user) => user.name);
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
