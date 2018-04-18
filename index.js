function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lmd = document.querySelectorAll('.ranked-list')
  const lm = lmd[0]
  const md = lmd[1]
  for (let i = 0; i < lmd.length; i++){
    lis[i].innerHTML = (i + 1).toString()
}
  }
}