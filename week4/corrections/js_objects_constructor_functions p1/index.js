// You can work here or download the template!
/**
 Instructions
Create a constructor function called Book.
The Book constructor function should initialize the following properties:
title: a string representing the title of the book.
author: a string representing the author of the book.
pages: a number representing the total pages in the book.
isRead: a boolean indicating if the book has been read or not.
Add a method named summary to the prototype of the Book constructor. This method should return a string summarizing the book details in the format:
"Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".

 */
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.summary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${
    this.isRead ? 'Yes' : 'No'
  }`;
};

const myBook = new Book('title', 'me', 300, true);
localStorage.setItem('book', JSON.stringify(myBook));
console.log(myBook);
console.log(myBook.summary());
const localBook = JSON.parse(localStorage.getItem('book'));
// console.log(localBook.summary());
const newBook = new Book(localBook.title, localBook.author, localBook.pages, localBook.isRead);
console.log(newBook.summary());
