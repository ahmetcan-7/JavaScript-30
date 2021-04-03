//book class:repesent book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

//user interface(UI)=kullanıcı arayüzü  ekranda gozukecek tum fonksityonları burda tanımla
class UI {

    static displayBooks() {
        const books = Store.getBook();
        //0: {title: "ahmet", author: "can", isbn: "1234"}  books un içeris bu tarz bir array
        //1: {title: "meh", author: "dsfa", isbn: "4654"}
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const tableBody = document.querySelector("#book-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href=# class="delete-link"><i class="fas fa-trash-alt"></i><a/></td>
        
     `;
        tableBody.appendChild(row);


    }

    //remove element
    static deleteElement(a) {
        if (a.classList.contains("delete-link")) {
            a.parentElement.parentElement.remove();
        }
    }

    //showing succeed alert
    static succeedAlert() {
        const bookForm = document.querySelector(".alert");
        const div = document.createElement("div");
        div.className = "succeed";
        div.appendChild(document.createTextNode("Kitap başarılıyla eklendi"));
        bookForm.appendChild(div);

        //vanish in 3 seconds
        setTimeout(() => document.querySelector(".succeed").remove(), 1000);
    }
    //showing unsucceed alert
    static unSucceedAlert() {
        const bookForm = document.querySelector(".alert");
        const div = document.createElement("div");
        div.className = "unsucceed";
        div.appendChild(document.createTextNode("Boş alan bırakılamaz"));
        bookForm.appendChild(div);

        //vanish in 3 seconds
        setTimeout(() => document.querySelector(".unsucceed").remove(), 2000);
    }
    //clear field
    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }
}
// local store fonkisyonlarını burda tanımla
class Store {


    static addBook(book) {
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static getBook() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));

        }
        return books;

    }

    static removeBook(isbn) {
        const books = Store.getBook();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}

//displaybooks =domcontentloaded herşey yerleştiıkten sonra çalışır
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//add a book
const subBtn = document.querySelector("#book-form");
subBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    //get input value
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const book = new Book(title, author, isbn);
    if (title === "" || author === "" || isbn === "") {
        UI.unSucceedAlert()
    } else {

        //add book to UI
        UI.addBookToList(book);
        //addd book to storage
        Store.addBook(book);
        //clear book to UI
        UI.clearFields();
        UI.succeedAlert();
    }

});

//remove a book
const deleteBtn = document.querySelector("#book-list");
deleteBtn.addEventListener("click", (e) => {
    //remove book UI
    UI.deleteElement(e.target); //e.target kullandım cunku quarySelektor ile sonradan gelen bir elemente ulasamıyorum ama css ulasabılıyor ve styelnı degistirebiliyor
    //remove book store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);  //delete butonunun parentının yani td nin bir önceki kardeş elementinin tect içerigi  
});


//Edit a Book 










