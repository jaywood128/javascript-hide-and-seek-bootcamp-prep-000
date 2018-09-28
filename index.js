function getFirstSelector(selector) {
     document.querySelector(selector)

   return document.querySelector(selector)
}
function nestedTarget() {
   document.querySelector('#nested .target')

  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  const list = document.querySelector('ul.ranked-list')
   for(let i = 0; i <list.length; i++ ){
       list[i].innerHTML = parseInt((i + n).toString)
   }
   return list
}
function deepestChild() {
  document.querySelector('#grand-node div div div div')

  return document.querySelector('#grand-node div div div div')
}
