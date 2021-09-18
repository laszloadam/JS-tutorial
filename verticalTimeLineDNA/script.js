console.log('Hello');
let a = document.getElementsByTagName('a');
console.log(a[0])

function showIcon(x) {
  a[x].style.display="block"
}
function hiddenIcon(x) {
  a[x].style.display="none"
}