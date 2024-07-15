// You can work here or download the template!
/**
Instructions
Create a base class LibraryItem  with private fields for title and author, and a method getInfo() to return a string with the item's title and author
Since we are using private class fields, we need to create special functions called getters to get the info securely from other classes that inherit from it.
 

Create a subclass Book that inherits from LibraryItem and adds a private field pages and a public method getInfo() that extends getInfo() to include the number of pages.
 

Create another subclass Member with private fields name and booksCheckedOut (an array to store Book objects). Add public methods checkOutBook(book), returnBook(book), and listBooks() to manage the books a member has checked out.
 

In this example, the getInfo() method in LibraryItem and Book classes is a form of polymorphism. Remember, objects responding differently to the same methods. 
 */
class LibraryItem {
  #title;
  #author;
  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }
  get getTitle() {
    return this.#title;
  }
  get getAuthor() {
    return this.#author;
  }
  getInfo() {
    return `Title ${this.#title}, Author ${this.#author}.`;
  }
}

class Book extends LibraryItem {
  #pages;
  constructor(title, author, pages) {
    super(title, author);
    this.#pages = pages;
  }
  getInfo() {
    return `Title ${this.getTitle}, Author ${this.getAuthor}, Pages ${this.#pages}.`;
  }
}
class Member {
  #name;
  #booksCheckedOut;
  constructor(name, booksCheckedOut = []) {
    this.#name = name;
    this.#booksCheckedOut = booksCheckedOut;
  }
  get getName() {
    return this.name;
  }
  get getBooksCheckedOut() {
    return this.#booksCheckedOut;
  }
  checkOutBook(book) {
    this.#booksCheckedOut.push(book);
  }
  returnBook(book) {
    this.#booksCheckedOut = this.#booksCheckedOut.filter(b => b !== book);
  }
  listBooks() {
    return this.#booksCheckedOut;
  }
}

const book = new Book('test', 'author1', 500);
const book1 = new Book('test2', 'author12', 200);
console.log(book.getInfo());

const member = new Member('John');
member.checkOutBook(book);
member.checkOutBook(book1);
console.log(member.listBooks());
member.returnBook(book1);
console.log(member.listBooks());
