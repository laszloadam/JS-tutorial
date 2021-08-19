let test = document.getElementById('test');
let radioGroupN = document.getElementById('radioGroup'+serial);
let questions = document.getElementsByClassName('questions');
let answers = [3,1,2];
var serial = 1;
var actualValue =null;
let scrollHeight = 190;
let content = document.getElementById('content');
let scrollNumber = document.getElementById('scrollNumber');
let scrollValue = 0;

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
function scrolling() {
  content.scrollTo({
    top:scrollHeight,
    left:0,
    behavior: "smooth"
  });
  scrollHeight= scrollHeight+170
};

function resetAll(){
  scrollHeight=190;
  content.scrollTo(0,0);
  serial=1;
  for(let i=0; i<=questions.length; i++){
    questions[i].style.backgroundColor="#909090"
    };
  
}
function scrollLine() {
  scrollValue = content.scrollTop*0.1;
  scrollNumber.style.top=scrollValue+'px';
  if(scrollValue >=700){
    scrollValue =700
  }
  test.innerHTML = scrollValue
}