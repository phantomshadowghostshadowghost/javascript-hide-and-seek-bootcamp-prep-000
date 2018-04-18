function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lmd = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lmd.length; i++){
    lis[i].innerHTML = parseInt((i + n))

  }
}