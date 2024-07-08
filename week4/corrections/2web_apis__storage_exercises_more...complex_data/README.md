<h4>Objective:</h4>
<p>Get the value of an input field, store it in <code>localStorage</code> as an array of objects.</p>
<h4>Instructions:</h4>
<p><strong>Store data:</strong></p>
<ul>
<li>From the boilerplate, get the contents of the input once the form is submitted.</li>
<li>Make sure the input is not empty before saving!</li>
<li>For every user input, create an object with the following properties:<br>
<ul>
<li>id: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID" target="_blank" rel="noopener">check this out,</a>since an UUID may not a valid CSS selector, we will remove the hyphens and prepend the prefix <code>task-</code></li>
<li>content: the user input</li>
</ul>
</li>
<li>Store this value in <code>localStorage</code> as part of an array. Store the new value at the beginning of the array!</li>
<li>Reset the form</li>
</ul>
<p><strong>Retrieve data:</strong></p>
<ul>
<li>Every time you hit the "Submit" button, add a new list item to the empty <code>ul</code>. Make sure the new item is at the top!
<ul>
<li>Set the id of the object as an id to the list item element, it'll come in handy.</li>
<li>Within the list item, add a red button that reads 'Delete'. Make it look cool! :D</li>
<li>Attach an event to this button on click, for now, just log the id of the item!</li>
</ul>
</li>
<li>Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type <code>load</code> to the window itself!</li>
</ul>
<p><strong>Delete:</strong></p>
<ul>
<li>Make sure that clicking on a given 'Delete' button, deletes the item from the DOM but also from the array in localStorage. Tip: use the <code>.filter</code> method&nbsp;</li>
</ul>
<p><strong>Reload:</strong></p>
<ul>
<li>Just because we can. Add an event to the <code>reload</code> button so it <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" target="_blank" rel="noopener">reloads the preview</a>. Your store data should reload too!</li>
</ul>
<p><strong>Bonus:<br></strong></p>
<ul>
<li>Chances are your code for creating the list items on load and new creation is VERY similar, if not the same, try to abstract it into a reusable function called <code>createListItem</code>. This approach is called <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank" rel="noopener">DRY</a></li>
</ul>
<p><strong>Tip: </strong>Verify the Storage section in the browser's developer tools to make sure the data is there!</p>