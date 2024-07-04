// You can work here or download the template
/*
Instructions
Select Elements and Log to Console:

Select the h1 element inside the .hero-content div and log it to the console.
Select all the a elements inside the .nav-list and log them to the console.
Select the .btn element and log it to the console.
Modify Styles:

Change the background color of the .header element to #b5651d.
Change the font size of the h1 element inside the .hero-content div to 3rem.
Change the text color of all a elements inside the .nav-list to #faf0e6.
Add Content:

Select the .hero-content div and add a new p element with the text "Open daily from 7 AM to 9 PM." inside it. 
*/

const h1 = document.querySelector('.hero-content h1');
console.log(h1);
const navLinks = document.querySelectorAll('.nav-list a');
console.log(navLinks);
navLinks.forEach(link => console.log(link));
const button = document.querySelector('.btn');
console.log(button);
const header = document.querySelector('header');
header.style.backgroundColor = '#b5651d';
h1.style.fontSize = '3rem';
navLinks.forEach(link => (link.style.color = '#faf0e6'));

const heroContent = document.querySelector('.hero-content');
const p = document.createElement('p');
p.textContent = 'Open daily from 7 AM to 9 PM.';
heroContent.appendChild(p);
