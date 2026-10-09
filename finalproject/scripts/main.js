// ==========================================
// MAIN JAVASCRIPT MODULE - HAMBURGER MENU
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
   const menuButton = document.querySelector('#menu-button');
   const navBar = document.querySelector('#nav-bar');

   if (menuButton && navBar) {
       menuButton.addEventListener('click', () => {
           navBar.classList.toggle('open');
           // Toggle hamburger icon symbol between ☰ and ✕
           menuButton.textContent = navBar.classList.contains('open') ? '✕' : '☰';
       });
   }
});