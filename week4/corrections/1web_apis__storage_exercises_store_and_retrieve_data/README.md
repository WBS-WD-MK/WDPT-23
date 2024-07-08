<h4>Objective:</h4>
<p>Get the value of an input field, store it in <code>localStorage</code> as an array of strings</p>
<h4>Instructions:</h4>
<p>Store data:</p>
<ol>
<li>From the boilerplate, get the contents of the input once the form is submitted.</li>
<li>Make sure the input is not empty before saving!</li>
<li>Store this value in <code>localStorage</code> as part of an array. Store the new value at the beginning of the array!</li>
<li>Reset the form</li>
</ol>
<p>Retrieve data:</p>
<ol>
<li>Every time you hit the "Submit" button, add a new list item to the empty <code>ul</code>. Make sure the new item is at the top!</li>
<li>Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type <code>load</code> to the window itself!</li>
</ol>
<p>Reload:</p>
<ol>
<li>Just because we can. Add an event to the <code>reload</code> button so it <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" target="_blank" rel="noopener">reloads the preview</a>. Your store data should reload too!</li>
</ol>
<p><strong>Tip: </strong>Verify the Storage section in the browser's developer tools to make sure the data is there!</p>