
fetch("./data.json")
    .then(data => data.json())
    .then(biblio => {
        createBook(biblio.books)
    })
    
const createBook = (book) => {
    var n=0;
    while(n < book.length){
        document.getElementById('allBook').innerHTML += '<div class="books" id="book'+n+'"><h2>'+book[n].title+'</h2></div>';
        n++
    }
    for(let i=0; i<book.length; i++){
        document.getElementsByClassName("books")[i].style.backgroundImage = "url('http://localhost:5500/JSON"+book[i].image+"')"
    };
    
}