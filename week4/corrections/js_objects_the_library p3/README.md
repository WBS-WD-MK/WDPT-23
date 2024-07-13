<h4>Objective</h4>
<p>Learn and apply the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.</p>
<h4>Instructions</h4>
<ul>
<li>Create a base class <code>LibraryItem</code>&nbsp; with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties" target="_blank" rel="noopener">private fields</a> for <code>title</code> and <code>author</code>, and a method <code>getInfo()</code> to return a string with the item's title and author
<ul>
<li>Since we are using private class fields, we need to create special functions called <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get" target="_blank" rel="noopener"><code>getters</code></a> to get the info securely from other classes that inherit from it.</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Create a subclass <code>Book</code> that inherits from <code>LibraryItem</code> and adds a private field <code>pages</code> and a public method <code>getInfo()</code> that extends <code>getInfo()</code> to include the number of pages.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Create another subclass <code>Member</code> with private fields <code>name</code> and <code>booksCheckedOut</code> (an array to store <code>Book</code> objects). Add public methods <code>checkOutBook(book)</code>, <code>returnBook(book)</code>, and <code>listBooks()</code> to manage the books a member has checked out.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>In this example, the <code>getInfo()</code> method in <code>LibraryItem</code> and <code>Book</code> classes is a form of polymorphism. Remember, objects responding differently to the same methods.&nbsp;</li>
</ul>