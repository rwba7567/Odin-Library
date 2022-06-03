
//Used as a key to store objects in session storage

if (sessionStorage.getItem("counter") == null)
    sessionStorage.setItem("counter", 0);
let sessionStorageCounter = sessionStorage.getItem("counter");

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
    const newBookJSON = JSON.stringify(newBook);
    sessionStorage.setItem(sessionStorageCounter, newBookJSON);
    sessionStorageCounter++;
    sessionStorage.setItem("counter", sessionStorageCounter)
}

function fillTable(){
    
    const table = document.querySelector("table");
    
    for (let key=0; key < sessionStorage.length; key++)
    {

        if (isNaN(sessionStorage.key(key)) == true)
        {
            continue;
        }

        const row = document.createElement("tr");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const read = document.createElement("td");
        const book = JSON.parse(sessionStorage.getItem(sessionStorage.key(key)));

        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;

        if (book.read == true)
            read.innerText = "Read";
        else
            read.innerText = "Not read";

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.setAttribute("id","book"+sessionStorage.key(key));

        table.appendChild(row);
    }  

}

//add sample books to array
if (sessionStorage.getItem("0") == null)
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
if (sessionStorage.getItem("1") == null)
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
if (sessionStorage.getItem("2") == null)
    addBookToLibrary("Moby Dick", "Herman Melville", 427, false);

fillTable();


//open addBookform
let openBtn = document.querySelector("button");
let overlay = document.querySelector("#addBook");

openBtn.addEventListener("click",function(){
    overlay.style.height = "100%";
});


//close addBookform
let closeBtns = document.querySelectorAll(".closeIcon");
let infoPage = document.querySelector("#info");

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click",function(){
        overlay.style.height = "0";
        infoPage.style.height = "0";
    })
});

//submit new data to array
let submit = document.querySelector('[type=submit]');
let form = document.querySelector("#addBook form");
submit.addEventListener("click", 
    function(){
        if (form.elements['addTitle'].value == "")
            {
                alert("Input book title!");
                preventDefault()
                return 0;
            }
        else if (form.elements['addAuthor'].value == "")
            {
                alert("Input book author!");
                preventDefault()
                return 0;
            }
        else if (form.elements['addPages'].value == "")
        {
            alert("Input no. of pages!");
            preventDefault()
            return 0;
        }
        else
        {
            addBookToLibrary(form.elements['addTitle'].value, form.elements['addAuthor'].value, form.elements['addPages'].value, form.elements['addRead'].checked);
            overlay.style.height = "0";
            return 1;
        }
    });

//Open information card
let tableRows = document.querySelectorAll("tr:not(:first-child)");


tableRows.forEach(row => {
    row.addEventListener("click",function(){
        let info = document.querySelector("#info form");
        let readStatus = document.querySelector("#infoReadStatus")

        let bookId = row.id;
        bookId = bookId.replace("book","");


        const book = JSON.parse(sessionStorage.getItem(bookId));

        info.elements["infoTitle"].value = book.title;
        info.elements["infoAuthor"].value = book.author;
        info.elements["infoPages"].value = book.pages;
        if (book.read == false)
        {
            readStatus.innerText = "Not Read";
        }
        infoPage.style.height = "100%";
    })
});