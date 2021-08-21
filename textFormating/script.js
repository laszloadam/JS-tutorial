
let outputText = document.getElementById('outputText');
let test = document.getElementById('test');

function send(){
  let inputText = document.getElementById('inputText').value;
  outputText.innerHTML = inputText
}

function textStyle(x) {
  outputText.classList.toggle(x);
}
function fontSizeChange() {
  let textSize = document.getElementById('textSize').value;
  test.innerHTML = textSize;
  outputText.style.fontSize = textSize+'px';
}
function textAlign(x) {
  outputText.classList.remove('left');
  outputText.classList.remove('center');
  outputText.classList.remove('right');
  outputText.classList.add(x);
}
