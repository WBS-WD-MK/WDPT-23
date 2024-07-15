// You can work here or download the template
// You can work here or download the template
/**
 Instructions:

Use setTimeout to schedule the creation of a promotion message after 3 seconds.
Create a new DOM element (e.g., a <div>) for the promotion message.
Add some text to the promotion message, like "Special Offer: Get 20% off your next purchase!".
Use Tailwind CSS to style the message with a background color, padding, rounded corners, and centered text.
Append the new element to the message-container div.
 */

setTimeout(() => {
  const promotionDiv = document.createElement('div');
  promotionDiv.textContent = 'Special Offer: Get 20% off your next purchase!';
  console.log('HELLO');
  promotionDiv.className = 'bg-red-500 text-white p-4 rounded-lg shadow-lg mx-auto mx-w-md';
  document.getElementById('message-container').appendChild(promotionDiv);
}, 3000);
