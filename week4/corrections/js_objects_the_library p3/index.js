// You can work here or download the template!
/**
Instructions
Create a base class LibraryItem  with private fields for title and author, and a method getInfo() to return a string with the item's title and author
Since we are using private class fields, we need to create special functions called getters to get the info securely from other classes that inherit from it.
 

Create a subclass Book that inherits from LibraryItem and adds a private field pages and a public method getInfo() that extends getInfo() to include the number of pages.
 

Create another subclass Member with private fields name and booksCheckedOut (an array to store Book objects). Add public methods checkOutBook(book), returnBook(book), and listBooks() to manage the books a member has checked out.
 

In this example, the getInfo() method in LibraryItem and Book classes is a form of polymorphism. Remember, objects responding differently to the same methods. 
 */
