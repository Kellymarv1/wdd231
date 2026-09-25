const currentUrl = window.location.search;
const urlParams = new URLSearchParams(currentUrl);

const resultsContainer = document.querySelector("#results");

const first = urlParams.get("first");
const last = urlParams.get("last");
const email = urlParams.get("email");
const phone = urlParams.get("phone");
const organization = urlParams.get("organization");
const timestamp = urlParams.get("timestamp");

if (resultsContainer) {
   resultsContainer.innerHTML = `
       <p><strong>Name:</strong> ${first} ${last}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Organization:</strong> ${organization}</p>
       <p><strong>Application Date & Time:</strong> ${timestamp}</p>
   `;
}