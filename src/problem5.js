const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function exchangeMoney(money){
  const result = [];
  let changeMoney = money

  for(let number of unit){
    let count = 0;
    let division = Math.floor(changeMoney / number);

    if(division >= 1){
      count = division;
      changeMoney = changeMoney - (number * division);
    }

    result.push(count);
  }

  return result;

}

function problem5(money) {
  var answer = exchangeMoney(money);
  return answer;
}

problem5(50237)

module.exports = problem5;
