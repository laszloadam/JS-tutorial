let levels = document.getElementsByClassName('levels');
let liftCabine=document.getElementById('lift');
let lv0 = document.getElementById('lv0');

let level1 = document.getElementById('level1');

let level2 = document.getElementById('level2');

let level3 = document.getElementById('level3');

let level4 = document.getElementById('level4');

let level5 = document.getElementById('level5');

let level6 = document.getElementById('level6');

let level7 = document.getElementById('level7');

let level8 = document.getElementById('level8');

let level9 = document.getElementById('level9');

let level10 = document.getElementById('level10');

var levelHeight =1;

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
  level1.innerHTML=levelArrays[0];
  level2.innerHTML=levelArrays[1];
  level3.innerHTML=levelArrays[2];
  level4.innerHTML=levelArrays[3];
  level5.innerHTML=levelArrays[4];
  level6.innerHTML=levelArrays[5];
  level7.innerHTML=levelArrays[6];
  level8.innerHTML=levelArrays[7];
  level9.innerHTML=levelArrays[8];
  level10.innerHTML=levelArrays[9];
}

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

function notEmpty(x){
  return x !=''
}

function addOn(x){
  levelArrays[x].push(1);
  writeArrays();
  if(levelArrays.find(notEmpty)){
    lifting(x);
    lv0.innerHTML =x
    if(levelHeight==x){
    writeArrays();
    }
    
  }
}

console.log(levelArrays.filter(empty));
function empty(x){
  return x != ''
}


function lifting(n){
  writeArrays();
  setInterval(liftUp, 50);

  function liftUp() {
    if(levelHeight <=90){
      liftCabine.style.bottom = levelHeight + "%";
      levelHeight++
      } else {
        clearInterval(liftUp);
        if(levelArrays[n].length !=0){
          lift.push(levelArrays[n].shift(0));
          liftCabine.innerHTML = lift
          writeArrays();
        }
      };
      if(lift.length!=0){
        setInterval(liftDown, 50);
        }
    }
  function liftDown(){
    liftCabine.style.bottom = levelHeight+'0%';
    if(levelHeight>0){
      levelHeight--
    } else {
      clearInterval(liftDown)
    }
  }
  // for(let x=0;x<=9;x++){
  //   if (levelArrays[x].length !=0){
  //     let liftCabine=document.getElementById('lift');
  //     setInterval(liftGo, 100);


  //     function liftGo() {
  //       lv0.innerHTML=levelHeight;
  //       if(levelHeight<=(x+"0")){
  //         liftCabine.style.bottom = levelHeight + "%";
  //         levelHeight++
  //       }
        
  //       else{
  //         clearInterval(liftGo);
  //         lift.push(levelArrays[x].shift(0));
  //         writeArrays();
  //         liftCabine.innerHTML = lift;
  //         lv0.innerHTML = lift.length
  //       }
  //     }
  //   }
  // }
}