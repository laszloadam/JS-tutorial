let test = document.getElementById('test');
let form = document.getElementById('form');
let questions = document.getElementsByClassName('questions');
var actualValue = ""
let answers = [3,1,2];
var serial = 1;

test.innerHTML = actualValue;

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
      let thisQ = document.getElementById('q'+serial+'_'+actualValue+'Label');
      thisQ.style.backgroundColor = "green"
    };
    if (actualValue != answers[serial-1]) {
      thisQ.style.backgroundColor = "red";
    };
    console.log('q'+serial+'_'+actualValue+'Label');
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
