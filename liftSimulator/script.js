//let levels = document.getElementsByClassName('levels');
let liftCabine = document.getElementById('lift');
let lv0 = document.getElementById('lv0');



let lift =[];

var lakok=20;
lv0.textContent=lakok;

let randomLevel;

let incoming;

let levelArrays = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
  ];

function writeArrays(){
document.getElementById('level1').innerHTML=levelArrays[0];
document.getElementById('level2').innerHTML=levelArrays[1];
document.getElementById('level3').innerHTML=levelArrays[2];
document.getElementById('level4').innerHTML=levelArrays[3];
document.getElementById('level5').innerHTML=levelArrays[4];
document.getElementById('level6').innerHTML=levelArrays[5];
document.getElementById('level7').innerHTML=levelArrays[6];
document.getElementById('level8').innerHTML=levelArrays[7];
document.getElementById('level9').innerHTML=levelArrays[8];
document.getElementById('level10').innerHTML=levelArrays[9];
};
writeArrays();


function notEmpty(x){
  return x !=''
};


function somebodyIncoming() {
  levelArrays[0].push(1)
  writeArrays();
  console.log(levelArrays.filter(notEmpty))
}


function general() {
  let addember =setInterval(adding, 2000)
  function adding() {
    
    randomLevel = Math.floor(Math.random()*10);
    if(randomLevel == 0){
      incoming = Math.floor(Math.random()*10);

    }
    if(lakok <=1){
      clearInterval(addember);
      console.log('Szimuláció vége')
    }
    else {
      levelArrays[randomLevel].push('1');
      addOn(randomLevel)
      //writeArrays();
      
    }
  }
};
function addOn(x){
  writeArrays();
  if(levelArrays.find(notEmpty)){
    liftCabine.style.bottom = x + "0%";
    setTimeout(liftUp, 1000);
    
    function liftUp() {
      lift.push(levelArrays[x].shift(0));
      liftCabine.innerHTML = lift.length;
      writeArrays();
    }
    // if (condition) {
      
    // }
    if(lift.length == 4){
      
      setTimeout(liftDown, 1000);
      function liftDown(){
        console.log('megtelt');
        liftCabine.style.bottom = "0%";
        setTimeout(liftOut, 1000)
        function liftOut(){
          lift=[];
          lakok=lakok-5;
          liftCabine.innerHTML = lift.length
          lv0.textContent=lakok;
        }
      }
    }
  }
}