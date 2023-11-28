const pobi = pickRandomPage();
const crong = pickRandomPage();

function pickRandomPage(){
  let page = pickRandomNumber(1, 400)

  while(page === 1 || page === 400){
    page = pickRandomNumber(1, 400)
  }

  if(page % 2 === 1){
    return [page, page + 1]
  }

  if(page % 2 === 0){
    return [page - 1, page]
  }
}

function pickRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function problem1(pobi, crong) {
  
  var answer;
  return answer;
}

problem1(pobi, crong);

module.exports = problem1;
