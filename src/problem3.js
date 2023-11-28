
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

function problem3(number) {
  var answer = countClapping(number);
  return answer;
}

module.exports = problem3;
