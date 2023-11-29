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

function problem2(cryptogram) {
  var answer = deleteDuplicete(cryptogram);
  return answer;
}

problem2("browoanoommnaon");

module.exports = problem2;
