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

  return userFriends.filter((friend) => friend !== user)
}

function recommendFriends(user, friends, visitor){
  const userFriends = findFriends(user, friends);
  
}

function problem7(user, friends, visitors) {
  var answer = recommendFriends(user, friends, visitors);
  return answer;
}

problem7(user, friends, visitors)

module.exports = problem7;
