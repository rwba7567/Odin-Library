

//empty array of books
let myLibrary = [];


//Book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if (read == true){
            return (title + " by " + author + ", " + pages + " pages, " + "read yet");
        }
        else{
            return (title + " by " + author + ", " + pages + " pages, " + "not read yet");
        }
    }
}


function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function fillTable(){
    const table = document.querySelector("table");

    for (x in myLibrary){
        const row = document.createElement("tr");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const read = document.createElement("td");

        title.innerText = myLibrary[x].title;
        author.innerText = myLibrary[x].author;
        pages.innerText = myLibrary[x].pages;

        if (myLibrary[x].read == true)
            read.innerText = "Read";
        else
            read.innerText = "Not read";

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);

        table.appendChild(row);
    }  

}

//add sample books to array
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Moby Dick", "Herman Melville", 427, false);
fillTable();


//open addBookform
let btn = document.querySelector("button");
let overlay = document.querySelector("#addBook");

btn.addEventListener("click",function(){
    overlay.style.height = "100%";
});


//submit new data to array
let submit = document.querySelector('[type=submit]');
let form = document.querySelector("form");
submit.addEventListener("click", 
    function(){
        addBookToLibrary(form.elements['title'].value, form.elements['author'].value, form.elements['pages'].value, form.elements['read'].checked);
        overlay.style.height = "0";
    });