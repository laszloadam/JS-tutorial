
fetch("./data.json")
    .then(data => data.json())
    .then(biblio => {
        createBook(biblio.books);
    });
    

const bookTitle = (title) => {
    return '<h2>'+title+'</h2>'
};
const bookAuthor = (author) => {
    return '<p>Író: '+author+'</p>'
};

const bookCharacters = (characters) => {
    return '<p>Író: '+characters+'</p>'
};

const properties = (info, rating) => {
    return '<p>Kiadás éve: '+info+'</p><p>Értékelés: '+rating+'/5</p>'
};
const button = (button, n) => {
    
    
    return '<button onclick="showFullInfo('+n+')">'+button+'</button>'
};

function showInfo(n) {
    document.getElementById('book'+n).style.display='flex'
}
function hideInfo(n) {
    document.getElementById('book'+n).style.display='none'
}
function showFullInfo(n){
    document.getElementById('fullInfoDiv'+n).style.display='flex'
}
function hideFullInfo(n){
    document.getElementById('fullInfoDiv'+n).style.display='none'
}
function fullInfo(characters, description, n) {
    return '<div class="fullInfoDiv" id="fullInfoDiv'+n+'"><div class="fullInfo"><button onclick="hideFullInfo('+n+')">X</button><h3>Karakter/ek:</h3><p>'+characters+'</p><hr><h3>Összefoglaló:</h3><p>'+description+'</p></div></div>'
}

const createBook = (book) => {
    var n=0;
    while(n < book.length){
        document.getElementById('allBook').innerHTML += '<div class="books"  onmouseover="showInfo('+n+')" onmouseout="hideInfo('+n+')"><div class="info" id="book'+n+'"style="display:none"><div>'
        +bookTitle(book[n].title)+bookAuthor(book[n].author)
        +properties(book[n].publication, book[n].rating)
        +'</div>'
        +button('Infó', n)
        +'</div></div>';
        document.getElementsByTagName('body')[0].innerHTML += fullInfo(book[n].characters, book[n].description, n);
        n++
    }
    for(let i=0; i<book.length; i++){
        document.getElementsByClassName("books")[i].style.backgroundImage = "url('http://localhost:5500/JSON"+book[i].image+"')"
    };
    
    console.log(document.querySelectorAll('.books'))
}

