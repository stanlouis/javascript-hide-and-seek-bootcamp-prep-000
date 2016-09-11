function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (n + parseInt(lis[i].innerHTML, 10)).toString();
  }
}

function deepestChild() {
  //will refine later
  return document.querySelector('#grand-node div div div div');
}
