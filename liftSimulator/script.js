//let levels = document.getElementsByClassName('levels');
let liftCabine=document.getElementById('lift');
let lv0 = document.getElementById('lv0');


var levelHeight =0;

let lift =[];

var lakok=0;

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


function general() {
  let addember =setInterval(adding, 400)
  function adding() {
    
    let randomLevel = Math.floor(Math.random()*10);
    let randomN = Math.floor(Math.random()*10);
    console.log(levelArrays)
    if(lakok >=60){
      clearInterval(addember)
    } else{
      levelArrays[randomLevel].push(randomN);
      writeArrays();
      lakok++;
      
        if (levelArrays[randomLevel].length >= 5) {
          levelArrays[randomLevel].shift(0)
        }
      }
    }
  };




function addOn(x){
  levelArrays[x].push(1);
  writeArrays();
  if(levelArrays.find(notEmpty)){
    lifting(x);
  }
};


function lifting(n){
  setInterval(liftUp, 10);
  
  function liftUp() {
    if(levelHeight < n+'0'){
      liftCabine.style.bottom = levelHeight + "%";
      levelHeight++;
      } else if(levelHeight == n+'0') {
        clearInterval(liftUp);
        if(levelArrays[n].length !=0){
          lift.push(levelArrays[n].shift(0));
          liftCabine.innerHTML = lift.length
          writeArrays();
          liftUp();
          if((n+1)>9){
            console.log('tető!');
            setInterval(liftDown, 50);
            function liftDown(){
              while(n>=0){
                console.log(n+'0');
                n--;
                liftCabine.style.bottom = n + "0%";
              } if ((n+1)<1){

                // Nem áll le. csináld meg!
                console.log('futás vége');
                clearInterval(liftDown)
              }
              }
            }
          
          
        }
      }
      
    }
  
  
}