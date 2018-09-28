function getFirstSelector(selector) {
     document.querySelector(selector)

   return document.querySelector(selector)
}
function nestedTarget() {
   document.querySelector('#nested .target')

  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')
   for(let i = 0; i <list.length; i++ ){
       list[i].innerHTML =  parseInt(list[i].innerHTML, 10) + n
   }
   return list
}
function deepestChild() {
  document.querySelector('#grand-node div div div div')

  return document.querySelector('#grand-node div div div div')
}
