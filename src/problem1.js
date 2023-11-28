const pobi = pickRandomPage();
const crong = pickRandomPage();

function pickRandomPage(){
  let page = pickRandomNumber(1, 400);

  while(page === 1 || page === 400){
    page = pickRandomNumber(1, 400);
  }

  if(page % 2 === 1){
    return [page, page + 1];
  }

  if(page % 2 === 0){
    return [page - 1, page];
  }
}

function pickRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculate(number){
  const numbers = String(number).split('');
  let sumNumber = 0;
  let multiNumber = 1;

  numbers.forEach((num) => {
    sumNumber = sumNumber + Number(num);
    multiNumber = multiNumber * num;
  })

  return [sumNumber, multiNumber];

}

function selectMaxNumber(array){
  const leftPage = calculate(array[0]);
  const rightPage = calculate(array[1]);

  return Math.max(...leftPage, ...rightPage);
}

function validate(pobi, crong){

  if(pobi.length !== 2 || crong.length !== 2) return false

  if(pobi[0] !== pobi[1] - 1 || crong[0] !== crong[1] - 1) return false

  const test = [...pobi, ...crong]
  
  test.forEach((number) => {
    if(isNaN(number)) return false
    if(number < 1 || number > 400) return false
  })

  return true
}

function compareNumber(pobi, crong){

  if(pobi > crong) return 1

  if(pobi < crong) return 2
  
  if(pobi === crong) return 0
}

function problem1(pobi, crong) { 

  if(!validate(pobi, crong)) return -1

  const pobiNumber = selectMaxNumber(pobi);
  const crongNumber = selectMaxNumber(crong);

  var answer = compareNumber(pobiNumber, crongNumber);

  return answer;
}

problem1(pobi, crong);

module.exports = problem1;
