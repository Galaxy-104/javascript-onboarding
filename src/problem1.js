const pobi = pickRandomPage(1, 400);
const crong = pickRandomPage(1, 400);

function problem1(pobi, crong) {
  console.log(pobi, crong)
  var answer;
  return answer;
}

function pickRandomPage(min, max){
  let page = Math.floor(Math.random() * (max - min + 1) + min)
  
  if(page % 2 === 1){
    return [page, page + 1]
  }

  if(page % 2 === 0){
    return [page - 1, page]
  }
}

problem1(pobi, crong);

module.exports = problem1;
