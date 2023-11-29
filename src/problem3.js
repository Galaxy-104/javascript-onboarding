
function countClapping(number){
  let index = 1;
  let count = 0;

  while(index <= number){
    const numbers = String(index).split('');
    numbers.forEach((num) => {
      if(Number(num) === 3 || Number(num) === 6 || Number(num) === 9) count++;
    })
    index++
  }

  return count

}

function validateNumber(number){
  if(number < 1 || number > 10000){
    throw new Error("유효한 숫자가 아닙니다.")
  }

  if(number % 1 !== 0){
    throw new Error("유효한 숫자가 아닙니다.")
  }
}

function problem3(number) {
  validateNumber(number)

  var answer = countClapping(number);
  return answer;
}

module.exports = problem3;
