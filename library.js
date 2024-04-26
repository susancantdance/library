const addBookButton = document.querySelector(".button-add");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".button-close");
const bookList = document.querySelector(".books");
const addButtonModal = document.querySelector(".modal-button");
const bookAuthor = document.querySelector(".author");
const bookTitle = document.querySelector(".title");


addButtonModal.addEventListener("click", (event) => {
    const aNewBook = new Book(bookAuthor.value, bookTitle.value);
    addBookToLibrary(aNewBook);
    event.preventDefault();
    bookAuthor.value = '';
    bookTitle.value = '';
})


addBookButton.addEventListener("click", () => {
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
})

const myLibrary = [];

function Book(author, title, read) {
  this.author = author;
  this.title = title;
  this.read = read;
  return this;
}

function addBookToLibrary(someBook) {
    myLibrary.push(someBook);
    displayBooks(myLibrary);
    
}

function displayBooks(myLibrary) {
    while (bookList.hasChildNodes()) {
            bookList.removeChild(bookList.lastChild);
    }
    for (let property in myLibrary) {
        const newRow = document.createElement("tr")
        const authCell = document.createElement("td");
        const titleCell = document.createElement("td");
        const readButtonCell = document.createElement("td");
        const buttonCell = document.createElement("td");
        authCell.textContent = myLibrary[property].author; 
        titleCell.textContent = myLibrary[property].title;
        newRow.id = '_' + property
        bookList.appendChild(newRow);
        newRow.appendChild(authCell);
        newRow.appendChild(titleCell);
        newRow.appendChild(readButtonCell);
        newRow.appendChild(buttonCell);

        const markReadButt = document.createElement("INPUT");
        markReadButt.type = 'checkbox';
        markReadButt.checked = myLibrary[property].read;
        markReadButt.id = '_' + property;
        readButtonCell.appendChild(markReadButt);

        markReadButt.addEventListener("click", () => {
            myLibrary[property].read = markReadButt.checked;
        });

        const removeButt = document.createElement("button");
        removeButt.textContent = 'click me';
        removeButt.id = '_' + property
        buttonCell.appendChild(removeButt);


        removeButt.addEventListener("click", () => {
        delete myLibrary[property];
        newRow.remove();
        authCell.remove();
        titleCell.remove();
        removeButt.remove();
        readButtonCell.remove();
        readCell.remove();
        });
    }


}

const testBook = new Book('theother', 'tytle', true);
addBookToLibrary(testBook);

const testyBook = new Book('theother', 'tytle', false);
addBookToLibrary(testyBook);

