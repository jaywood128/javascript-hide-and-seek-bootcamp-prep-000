function getFirstSelector(selector) {
     document.querySelector(selector)

   return document.querySelector(selector)
}
function nestedTarget() {
   document.querySelector('#nested .target')

  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  const list = document.querySelector('ul.ranked-list li')
   for(i = 0; i <list.length; i++ ){
       list[i].innerHTML = (i + n).toString
   }
   return list
}
