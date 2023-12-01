const user = "mrko"
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]

function findFriends(user, friends){
  const userFriends = [];
  friends.forEach((friend) => {
    if(friend.includes(user)){
      userFriends.push(...friend);
    }
  })

  return userFriends.filter((friend) => friend !== user);
}

function recommendList(userFrinds, friends, visitors){
  const list = [...new Set(friends), ... new Set(visitors)];
  const recommends = list.filter((people) => !userFrinds.includes(people))
  .map((people) => {return { name: people, point: 0}});

  friends.forEach((friend) => {
    const findIndex = recommends.findIndex((element) => element.name === friend);
    if(findIndex !== -1) recommends[findIndex].point = recommends[findIndex].point + 10;
  })

  visitors.forEach((visitor) => {
    const findIndex = recommends.findIndex((element) => element.name === visitor);
    if(findIndex !== -1) recommends[findIndex].point++;
  })

  return recommends.sort((a, b) => b.point - a.point || a.name.localeCompare(b.name)).map((people) => people.name).slice(0, 5);
}

function recommendFriends(user, friends, visitors){
  const userFriends = findFriends(user, friends);
  const bothFriends = [];

  userFriends.forEach((friend) => {
    const friendsList = findFriends(friend, friends);
    friendsList.forEach((list) => {
      if(!bothFriends.includes(list) && list !== user) bothFriends.push(list);
    })
  })

  return recommendList(userFriends, bothFriends, visitors);
}

function problem7(user, friends, visitors) {
  var answer = recommendFriends(user, friends, visitors);
  return answer;
}

problem7(user, friends, visitors)

module.exports = problem7;
