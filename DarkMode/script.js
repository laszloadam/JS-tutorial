let root = document.querySelector(':root');
let slider = document.getElementById('slider');

function viewMode() {
  if(slider.style.left =='22px') {
    slider.style.left ='2px';
    root.style.setProperty('--black', '#000000');
    root.style.setProperty('--white', '#FFFFFF');
  }else {
    slider.style.left ='22px';
    root.style.setProperty('--black', '#FFFFFF');
    root.style.setProperty('--white', '#000000');
  }
  
}