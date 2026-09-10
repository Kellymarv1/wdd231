const menuButton = document.querySelector("#menuButton");
const primaryNav = document.querySelector("#primaryNav");

if (menuButton && primaryNav) {
   menuButton.addEventListener("click", () => {
       primaryNav.classList.toggle("open");
       
       // Dynamically toggle the hamburger icon and accessibility label
       if (primaryNav.classList.contains("open")) {
           menuButton.textContent = "✕"; 
           menuButton.setAttribute("aria-label", "Close navigation menu");
       } else {
           menuButton.textContent = "☰"; 
           menuButton.setAttribute("aria-label", "Open navigation menu");
       }
   });
}