let linkTitle = document.getElementsByClassName('linkTitle');

function showIcon(x) {
  for(let n=0; n<=9; n++){
    if(x==n){
      linkTitle[x].style.right="-20px";
      linkTitle[x].style.opacity="1"
    } else {
      linkTitle[n].style.right="120px";
      linkTitle[n].style.opacity="0"
    }
  }
}