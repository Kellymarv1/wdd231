// LocalStorage Visitor Message Logic
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