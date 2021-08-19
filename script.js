let test = document.getElementById('test');
let form = document.getElementById('form');
let scrollSlider = document.getElementById('scrollSlider');

let scrollPoint = document.getElementsByClassName('scrollPoint');
let questions = document.getElementsByClassName('questions');

let answers = [3,1,2];
var serial = 1;


function selectQ(x) {
  actualValue = x.value;
  let xLabel = document.getElementById(x.id+'Label');
  if ((answers[serial-1]) == actualValue) {
    xLabel.style.backgroundColor="green"
  } else {
    xLabel.style.backgroundColor="red"
  };
  for(let i=1;i<=3;i++){
    document.getElementById('p'+serial+'_'+i).setAttribute('disabled');
  }
}

function nextQ(x){
  
    serial = x;
};

function scrolling(x) {
  document.getElementById('question'+x).scrollIntoView({behavior: "smooth"})
};

function resetAll(){
  form.scrollTo(0,0);
  scrollSlider.style.top = '-20px';
  serial=1;
  for(let i=0; i<=questions.length; i++){
    questions[i].style.backgroundColor="#909090"
    };
}

function jumpTo(x){
  document.getElementById(x).scrollIntoView({behavior: "smooth"})
}

function slideTo(x){
  scrollSlider.style.top =(x*2)+'5%'
}