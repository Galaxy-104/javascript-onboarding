function deleteDuplicete(cryptogram){
  const words = cryptogram.split('');
  let isDuplicate = false;
  let result = words;

  while(!isDuplicate){
    const filterWord = result.filter((letter, index) => {
      return letter !== result[index + 1] && letter !== result[index - 1];
    })

    if(result.join('') === filterWord.join('')) isDuplicate = true;

    result = filterWord;

  }

  return result.join('');
}

function validateCryptogram(cryptogram){
  const words = cryptogram.split('');

  if(words.length < 1 || words.length > 1000){
    throw new Error("유효한 문자가 아닙니다.");
  }

  words.forEach((letter) => {
    if(letter !== letter.toLowerCase()){
      throw new Error("유효한 문자가 아닙니다.");
    }
  })
}

function problem2(cryptogram) {
  validateCryptogram(cryptogram);

  var answer = deleteDuplicete(cryptogram);
  return answer;
}

problem2("browoanoommnaon");

module.exports = problem2;
