function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lmd = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lmd.length; i++){
    lmd[i].innerHTML = parseInt((i + n))
  }
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}