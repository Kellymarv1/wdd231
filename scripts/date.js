const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


// Get the current year automatically
currentYear.textContent = new Date().getFullYear();


// Get the document's last modified date automatically
lastModified.textContent =
    `Last Modification: ${document.lastModified}`;