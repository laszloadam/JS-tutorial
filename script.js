let test = document.getElementById('test');
let result = document.getElementById('result');
let form = document.getElementById('form');
let questions = document.getElementsByClassName('questions');
let ratingTitle = document.getElementById('ratingTitle');
let ratingText = document.getElementById('ratingText');
let win = 0;
let fail = 0;
var actualValue = "";
let answers = [3,1,2];
var serial = 1;
let thisQ = '';

function selectQ(x) {
  actualValue = x.value;
  for(let i=1;i<=3;i++){
    document.getElementById('q'+serial+'_'+i+'Label').style.backgroundColor = "#909090";
  };
  document.getElementById('q'+serial+'_'+x.value+'Label').style.backgroundColor = "orange";
  document.getElementById('q'+serial+'_'+x.value+'Label').style.outline = "2px solid #000000";
  document.getElementById('qBtn'+serial).disabled=false;
}

function addHover(t){
  t.classList.add("hover")
}
function remHover(t){
  t.classList.remove("hover")
}


function nextQ(x){
    if(actualValue == answers[serial-1]){
      thisQ = document.getElementById('q'+serial+'_'+actualValue+'Label');
      thisQ.style.backgroundColor = "green";
      win++;
      result.innerHTML = 'Win: '+win+' || Fail: '+fail;
    }
    else {
      thisQ = document.getElementById('q'+serial+'_'+actualValue+'Label');
      thisQ.style.backgroundColor = "red";
      fail++;
      result.innerHTML = 'Win: '+win+' || Fail: '+fail;
    };
    document.getElementById('qBtn'+serial).setAttribute('onclick', 'scrolling('+x+')')
};


function scrolling(x) {
  document.getElementById('question'+x).scrollIntoView({behavior: "smooth"});
  serial=x;

};

function rating() {
if(win==answers.length){
  ratingTitle.innerHTML='Gratulálunk!';
  ratingText.innerHTML='Eltaláltad az összes választ!';
  }
  else if(win!=answers.length){
    ratingTitle.innerHTML='Gratulálunk!';
    ratingText.innerHTML='Sajnos nem találtad el az összes helyes választ, de újra kezdheted, hogy kijavítsd őket.';
    result.innerHTML = 'Helyes válaszok: '+win+' <br> Helytelen válaszok: '+fail;
  }
  else{
    ratingTitle.innerHTML=':('
    ratingText.innerHTML='Sajnos egy helyes választ sem találtál el. Kezdd elölről, hogy kijavítsd őket.'
  }
}

function resetAll(){
  form.scrollTo(0,0);
  serial=1;
  win=0;
  fail=0;
  for(let x=1; x<=answers.length; x++){
    document.getElementById('qBtn'+x).setAttribute('onclick', 'nextQ('+(x+1)+')')
  };
  for(let i=1; i<=answers.length; i++){
    questions[i].style.backgroundColor="#909090";
    document.getElementById('qBtn'+i).disabled=true;
    };
}
