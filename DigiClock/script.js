
let clock = document.getElementById('clock');
let welcomeText = document.getElementById('welcomeText');

function timeWatch() {
let time = document.getElementById('time');
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
if(h <10) {
  h = '0'+h
};
if(m <10) {
  m = '0'+m
};
if(s <10) {
  s = '0'+s
};
  if(5 < h && h < 12 ) {
    clock.style.backgroundImage = 'url(" https://cdn.pixabay.com/photo/2016/03/24/13/45/coffee-1276778_1280.jpg")';
    welcomeText.textContent = "Good Morning!"
  }else if(12 < h && h < 18) {
    clock.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/09/29/11/35/trees-3711260_1280.jpg")';
    welcomeText.textContent = "Good Afternoon!"
  }  else {
    clock.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/07/10/15/09/star-3528884_1280.jpg")';
    welcomeText.textContent = "Good Night!"
  }
  
time.innerHTML = h +' : '+ m + ' : '+ s;
  setTimeout(timeWatch, 1000)
};
timeWatch()