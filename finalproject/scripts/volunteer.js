// ==========================================
// VOLUNTEER PAGE SCRIPT (Local Storage)
// ==========================================

import './main.js'; // Hamburger menu

document.addEventListener('DOMContentLoaded', () => {
   const nameInput = document.querySelector('#fullname');
   const welcomeMsg = document.querySelector('#welcome-message');
   const contactForm = document.querySelector('#contact-form');

   // Check if user name exists in Local Storage
   const savedName = localStorage.getItem('safeHavenUserName');
   if (savedName && welcomeMsg) {
       welcomeMsg.textContent = `Welcome back, ${savedName}! Fill out the form below to update your info or submit a new inquiry.`;
       if (nameInput) nameInput.value = savedName;
   }

   // Save name to Local Storage on form submission
   if (contactForm) {
       contactForm.addEventListener('submit', () => {
           if (nameInput && nameInput.value.trim() !== '') {
               localStorage.setItem('safeHavenUserName', nameInput.value.trim());
           }
       });
   }
});