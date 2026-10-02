import { items } from '../data/items.mjs';

// 1. Dynamically render the 8 cards
const discoverGrid = document.querySelector('#discoverGrid');

if (discoverGrid) {
   items.forEach((item, index) => {
       const card = document.createElement('section');
       card.classList.add(`card-${index + 1}`);
       card.innerHTML = `
           <h2>${item.name}</h2>
           <figure>
               <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
           </figure>
           <address>${item.address}</address>
           <p>${item.description}</p>
           <button type="button">Learn More</button>
       `;
       discoverGrid.appendChild(card);
   });
}

// 2. LocalStorage Visitor Message Logic
const visitorMsg = document.querySelector('#visitorMessage');

if (visitorMsg) {
   const lastVisit = window.localStorage.getItem('chamber-last-visit');
   const currentVisit = Date.now();

   if (!lastVisit) {
       visitorMsg.textContent = "Welcome! Let us know if you have any questions.";
   } else {
       const daysBetween = Math.floor((currentVisit - Number(lastVisit)) / (1000 * 60 * 60 * 24));

       if (daysBetween < 1) {
           visitorMsg.textContent = "Back so soon! Awesome!";
       } else if (daysBetween === 1) {
           visitorMsg.textContent = "You last visited 1 day ago.";
       } else {
           visitorMsg.textContent = `You last visited ${daysBetween} days ago.`;
       }
   }

   window.localStorage.setItem('chamber-last-visit', currentVisit);
}