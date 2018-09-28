function getFirstSelector(selector) {
  document.querySelector(selector)
<<<<<<< HEAD
   return document.querySelector(selector)
}
function nestedTarget() {
   document.querySelector('#nested .target')

   return document.querySelector('#nested .target')
=======
   return selector
}
function nestedTarget(element) {
  var element = document.getElementsById('#nested').target
>>>>>>> 2a5768cb96bedfa1a53efeba977ea4cffdcb44c0
}
