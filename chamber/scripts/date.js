const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
   currentYearSpan.textContent = new Date().getFullYear();
}

// 2. Get the last modified date of the document
const lastModifiedSpan = document.querySelector("#lastmodified");
if (lastModifiedSpan) {
   lastModifiedSpan.textContent = document.lastModified;
}