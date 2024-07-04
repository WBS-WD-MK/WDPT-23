// You can work here or download the template
// Create the header element and its children
const header = document.createElement('header');
header.classList.add('header');

const nav = document.createElement('nav');
nav.classList.add('nav');

const logo = document.createElement('a');
logo.href = '#';
logo.classList.add('logo');
logo.textContent = 'Coffee Shop';

const navList = document.createElement('ul');
navList.classList.add('nav-list');

const navItems = ['Home', 'Menu', 'About', 'Contact'];
navItems.forEach(item => {
  const navItem = document.createElement('li');
  navItem.classList.add('nav-item');
  const navLink = document.createElement('a');
  navLink.href = '#';
  navLink.textContent = item;
  navItem.appendChild(navLink);
  navList.appendChild(navItem);
});

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);

// Create the hero section and its children
const hero = document.createElement('section');
hero.classList.add('hero');

const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');

const heroHeading = document.createElement('h1');
heroHeading.textContent = 'Welcome to Our Coffee Shop';

const heroText = document.createElement('p');
heroText.textContent = 'Enjoy the best coffee in town.';

const heroButton = document.createElement('a');
heroButton.href = '#';
heroButton.classList.add('btn');
heroButton.textContent = 'Explore Our Menu';

heroContent.appendChild(heroHeading);
heroContent.appendChild(heroText);
heroContent.appendChild(heroButton);
hero.appendChild(heroContent);

// Create the footer and its children
const footer = document.createElement('footer');
footer.classList.add('footer');

const footerText = document.createElement('p');
footerText.innerHTML = '&copy; 2024 Coffee Shop. All rights reserved.';
footer.appendChild(footerText);

// Append all sections to the body
document.body.appendChild(header);
document.body.appendChild(hero);
document.body.appendChild(footer);

// Apply CSS styles using element.style

// Header styles
header.style.backgroundColor = '#fff';
header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
header.style.padding = '1rem 0';

// Nav styles
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.maxWidth = '1200px';
nav.style.margin = '0 auto';
nav.style.padding = '0 1rem';

// Logo styles
logo.style.fontSize = '1.5rem';
logo.style.fontWeight = 'bold';
logo.style.color = '#333';
logo.style.textDecoration = 'none';

// Nav-list styles
navList.style.display = 'flex';
navList.style.listStyle = 'none';

// Nav-item styles
document.querySelectorAll('.nav-item').forEach(navItem => {
  navItem.style.marginLeft = '1.5rem';
});

// Nav-link styles
document.querySelectorAll('.nav-item a').forEach(navLink => {
  navLink.style.textDecoration = 'none';
  navLink.style.color = '#333';
  navLink.style.fontWeight = 'bold';
});

// Hero styles
hero.style.height = '560px';
hero.style.background =
  'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = '#fff';

// Hero-content styles
heroContent.style.maxWidth = '600px';
heroContent.style.height = '100%';
heroContent.style.display = 'flex';
heroContent.style.flexDirection = 'column';
heroContent.style.justifyContent = 'space-around';
heroContent.style.alignItems = 'center';
heroContent.style.textAlign = 'center';

// Hero-heading styles
heroHeading.style.fontSize = '2.5rem';
heroHeading.style.marginBottom = '1rem';

// Hero-text styles
heroText.style.fontSize = '1.2rem';
heroText.style.marginBottom = '2rem';

// Button styles
heroButton.style.backgroundColor = '#333';
heroButton.style.color = '#fff';
heroButton.style.padding = '0.75rem 1.5rem';
heroButton.style.textDecoration = 'none';
heroButton.style.borderRadius = '5px';
heroButton.style.transition = 'background-color 0.3s ease';

heroButton.addEventListener('mouseover', () => {
  heroButton.style.backgroundColor = '#555';
});
heroButton.addEventListener('mouseout', () => {
  heroButton.style.backgroundColor = '#333';
});

// Footer styles
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '1rem 0';
footer.style.marginTop = 'auto';
