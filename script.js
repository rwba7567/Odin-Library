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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Moby Dick", "Herman Melville", 427, false);
console.log(myLibrary[0].info());
console.log(myLibrary[1].info());
console.log(myLibrary[2].info());