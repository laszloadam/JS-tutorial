let a = document.getElementsByTagName('a');

function showIcon(x) {
  for(let n=0; n<=9; n++){
    if(x==n){
      a[x].style.right="-20px";
      a[x].style.opacity="100%"
    } else {
      a[n].style.right="120px";
      a[n].style.opacity="0%"
    }
  }
}