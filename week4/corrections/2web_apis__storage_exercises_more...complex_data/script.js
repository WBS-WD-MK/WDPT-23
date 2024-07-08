// You can work here or download the template
/**
Store data:

From the boilerplate, get the contents of the input once the form is submitted.
Make sure the input is not empty before saving!
For every user input, create an object with the following properties:
id: check this out,since an UUID may not a valid CSS selector, we will remove the hyphens and prepend the prefix task-
content: the user input
Store this value in localStorage as part of an array. Store the new value at the beginning of the array!
Reset the form
Retrieve data:

Every time you hit the "Submit" button, add a new list item to the empty ul. Make sure the new item is at the top!
Set the id of the object as an id to the list item element, it'll come in handy.
Within the list item, add a red button that reads 'Delete'. Make it look cool! :D
Attach an event to this button on click, for now, just log the id of the item!
Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type load to the window itself!
Delete:

Make sure that clicking on a given 'Delete' button, deletes the item from the DOM but also from the array in localStorage. Tip: use the .filter method 
Reload:

Just because we can. Add an event to the reload button so it reloads the preview. Your store data should reload too!
Bonus:

Chances are your code for creating the list items on load and new creation is VERY similar, if not the same, try to abstract it into a reusable function called createListItem. This approach is called DRY
 */
