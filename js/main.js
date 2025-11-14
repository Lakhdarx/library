let myLibrary = [];
const container = document.querySelector(".main");
const addBtn = document.querySelector("#add-book");
const bookForm = document.querySelector("#book-form");

class Book {
    constructor(name, author, pages, status) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function addBook(name, author, pages, status) {
   const book = new Book(name, author, pages, status);
   myLibrary.push(book); 
}




function displayBooks() {
    container.innerHTML = '';

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const nameB = document.createElement('h5');
        nameB.textContent = `Name: ${book}`;

        const auth = document.createElement('h5');
        auth.textContent = `Author: ${book.author}`;

        const pgs = document.createElement('h5');
        pgs.textContent = `Pages: ${book.pages}`;

        const stat = document.createElement('h5');
        stat.textContent = `Status: ${book.status}`;

        const BtnR = document.createElement('button');
        BtnR.textContent = 'Remove';
        BtnR.classList.add('remove-btn');
        BtnR.dataset.id = book.id;

        card.appendChild(nameB);
        card.appendChild(auth);
        card.appendChild(pgs);
        card.appendChild(stat);
        card.appendChild(BtnR);
        container.appendChild(card);

    });
    attachRemoveListeners();

}

function attachRemoveListeners() {
    const btns = document.querySelectorAll("remove-btn");
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            myLibrary = myLibrary.filter((book) => book.id !== id);
            displayBooks();
        });
    });
}


addBtn.addEventListener('click', (e) => {
    bookForm.style.display = bookForm.style.display === 'none' ? 'block' : 'none';   
});


bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name-input').value;
    const author = document.querySelector("#author-input").value;
    const pages = document.querySelector("#pages-input").value;
    const status = document.querySelector("status-input").value;

    bookForm.reset();
    bookForm.style.display = 'none';
    addBook(name, author, pages, status);
    displayBooks();

});
