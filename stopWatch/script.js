let display = document.getElementById('display');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let flagDiv = document.getElementById('flagDiv');
  var stringHour = "0";
  var stringMinute = "0";
  var stringSecond = "0";
  var stringMSecond = "0";
  var h = 0;
  var m = 0;
  var s = 0;
  var ms = 0;
  var startLoop;

display.innerHTML = '0'+stringHour+':0'+stringMinute+':0'+stringSecond+':0'+stringMSecond;


function start(){
startBtn.disabled=true;
  if (ms == 100) {
    ms=0;
    s = s+1;
  };
  if (s == 60) {
    s=0;
    m = m+1;
  };
  if (m == 60) {
    m=0;
    h = h+1;
  };
  
  
if (ms <10){
  stringMSecond = '0'+ms.toString();
} else {stringMSecond = ms.toString()};

if (s < 10){
  stringSecond = '0'+s.toString();
} else {stringSecond = s.toString()};

if (m <10){
  stringMinute = '0'+m.toString();
} else {stringMinute = m.toString()};
 
if (h <10){
  stringHour = '0'+h.toString();
} else {stringHour = h.toString()};
  
  display.innerHTML = stringHour+':'+stringMinute+':'+stringSecond+':'+stringMSecond;
  ms = ms+1;
  startLoop = setTimeout(start, 10)
}

function flags() {
  flagDiv.innerHTML += '<li>'+stringHour+':'+stringMinute+':'+stringSecond+':'+stringMSecond+'</li>';
};

function stop() {
  startBtn.disabled=false;
    clearTimeout(startLoop)
};

function reset() {
  startBtn.disabled=false;
  flagDiv.innerHTML = '';
  clearTimeout(startLoop);
  display.innerHTML = '00:00:00:00';
  h=0;
  m=0;
  s=0;
  ms=0
}
  