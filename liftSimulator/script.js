let levels = document.getElementsByClassName('levels');
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


let levelArrays = [
  level1Array = [],
  level2Array = [],
  level3Array = [],
  level4Array = [],
  level5Array = [],
  level6Array = [],
  level7Array = [],
  level8Array = [1],
  level9Array = [],
  level10Array = []
  ];


var lakok=0;

//function general() {
  let addember =setInterval(adding, 400)
  function adding() {
    
    let randomLevel = Math.floor(Math.random()*10);
    let randomN = Math.floor(Math.random()*10);
    console.log(levelArrays)
    if(lakok >=60){
      clearInterval(addember)
    } else{
      levelArrays[randomLevel].push(randomN);
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
      lakok++;
      
        if (levelArrays[randomLevel].length >= 5) {
          levelArrays[randomLevel].shift(0)
        }
    }
    
  }
  
}