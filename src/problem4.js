const upperCase =  Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
const lowerCase =  Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

function changeWord(word){
  const words = word.split('')
  const change = words.map((letter) => {
    if(upperCase.includes(letter)){
      const array = [...upperCase].reverse();
      return array[upperCase.indexOf(letter)];
    }

    if(lowerCase.includes(letter)){
      const array = [...lowerCase].reverse();
      return array[lowerCase.indexOf(letter)];
    }

    return letter

  })

  return change.join('')
}

function validateWord(word){
  if(word.length < 1 || word.length > 1000){
    throw new Error("유효한 단어가 아닙니다.")
  }
}

function problem4(word) {
  validateWord(word)

  var answer = changeWord(word);
  return answer;
}

problem4("I love you");

module.exports = problem4;
