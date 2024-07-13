<h4>Objective</h4>
<p>Learn how to initialize objects using constructor functions in JavaScript and understand how to define properties and methods within a constructor function.</p>
<h4>Instructions</h4>
<ol>
<li>Create a constructor function called <code>Book</code>.</li>
<li>The <code>Book</code> constructor function should initialize the following properties:
<ul>
<li><code>title</code>: a string representing the title of the book.</li>
<li><code>author</code>: a string representing the author of the book.</li>
<li><code>pages</code>: a number representing the total pages in the book.</li>
<li><code>isRead</code>: a boolean indicating if the book has been read or not.</li>
</ul>
</li>
<li>Add a method named <code>summary</code> to the prototype of the <code>Book</code> constructor. This method should return a string summarizing the book details in the format:
<ul>
<li><code>"Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"</code>.</li>
</ul>
</li>
</ol>
<p><strong>Tip:&nbsp;</strong>To add a method to a prototype using a constructor function, you need to do:</p>
<pre><code>YourObject.prototype.methodName = function(){}</code></pre>