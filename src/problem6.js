const users = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]


function findDuplicate(forms){
  const userNames = forms.map((user) => user[1]);
  const userEmails = forms.map((user) => user[0]);
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

function validateForms(forms){

  if(forms.length < 1 || forms.length > 10000){
    throw new Error('유효하지 않은 데이터입니다.');
  }

  forms.forEach((user) => {
    if(user[0].length < 11 || user[0].length >= 20){
      throw new Error('유효하지 않은 사용자입니다.');
    }

    const regExp = new RegExp(/[가-힣]/)
    if(!regExp.test(user[1])){
      throw new Error('유효하지 않은 사용자입니다.');
    }

    if(user[1].length < 1 || user[1].length >= 20){
      throw new Error('유효하지 않은 사용자입니다.')
    }

  })

}

function problem6(forms) {
  validateForms(forms);

  var answer = findDuplicate(forms);
  return answer;
}

problem6(users)

module.exports = problem6;
