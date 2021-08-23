let images = ['dog.jpg', 'afternoon.jpg', 'lori.jpg', 'boardwalk.jpg']

let fullView = document.getElementById('fullView');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let minis = document.getElementById('minis');
let miniView = document.getElementsByClassName('miniView');
let picsArray=[];

fullView.setAttribute('src', "./pics/"+images[1]);
// one.setAttribute('src', "./pics/"+images[0]);
// two.setAttribute('src', "./pics/"+images[1]);
// three.setAttribute('src', "./pics/"+images[2]);

function imgList () {
for (let i=0; i<images.length; i++){
    picsArray.push('<div onclick="select('+i+')"><img class="miniView" src="./pics/'+images[i]+ '" alt="miniView"></div>');
    }
    minis.innerHTML=picsArray
};


function rightStep(){
for(let x=0; x<=miniView.length; x++){
    miniView.setAttribute('left', '-160px');
}
    picsArray.push(picsArray.shift(0));
    
    minis.innerHTML=picsArray
}

imgList()

// function select(x) {
//     fullView.setAttribute('src', './pics/'+images[x])
// }
