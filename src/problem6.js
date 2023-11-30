const users = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]


function findDuplicate(forms){
  const userNames = forms.map((user) => user[1]);
  const userEmails = forms.map((user) => user[0])
  const duplicateNames = [];

  userNames.forEach((name, nameIndex) => {
    name.split('').forEach((letter, letterIndex) => {
      const word = letter + name[letterIndex + 1];
      const duplicateArray = [...userNames].filter((user) => {
        return user.includes(word)
      })

      if(duplicateArray.length > 1){
        duplicateNames.push(userEmails[nameIndex])
      }
    })

  })
  
  const result = [...new Set(duplicateNames)];

  return result.sort();
}

function problem6(forms) {
  var answer = findDuplicate(forms);
  console.log(answer)
  return answer;
}

problem6(users)

module.exports = problem6;
