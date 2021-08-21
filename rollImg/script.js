let images = ['dog.jpg', 'afternoon.jpg', 'lori.jpg', 'boardwalk.jpg']

let fullView = document.getElementById('fullView');
let one = document.getElementById('one');
let two = document.getElementById('fullView');
let three = document.getElementById('three');

fullView.setAttribute('src', "./pics/"+images[1]);
one.setAttribute('src', "./pics/"+images[0]);
two.setAttribute('src', "./pics/"+images[1]);
three.setAttribute('src', "./pics/"+images[2]);

function select(x) {
    console.log(x);
    
}
