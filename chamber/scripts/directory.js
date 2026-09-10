const membersURL = "data/members.json";
const memberContainer = document.querySelector("#memberContainer");
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

async function getMembers() {
   try {
       const response = await fetch(membersURL);
       if (response.ok) {
           const data = await response.json();
           displayMembers(data);
       } else {
           throw Error(await response.text());
       }
   } catch (error) {
       console.error("Error fetching member data:", error);
   }
}

// Display members dynamically in the DOM
function displayMembers(members) {
   memberContainer.innerHTML = ""; // Clear existing cards

   members.forEach((member) => {
       let card = document.createElement("section");
       card.classList.add("member-card");

       // Format membership level text based on the number code
       let levelText = "";
       if (member.membershipLevel === 3) {
           levelText = "Gold Member";
       } else if (member.membershipLevel === 2) {
           levelText = "Silver Member";
       } else {
           levelText = "Member";
       }

       card.innerHTML = `
           <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
           <div class="member-info">
               <h3>${member.name}</h3>
               <p class="membership-level">${levelText}</p>
               <p><strong>Address:</strong> ${member.address}</p>
               <p><strong>Phone:</strong> ${member.phone}</p>
               <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
               <p class="member-desc">${member.description}</p>
           </div>
       `;

       memberContainer.appendChild(card);
   });
}

// Event Listeners for Grid / List View Toggles
gridButton.addEventListener("click", () => {
   memberContainer.classList.add("grid");
   memberContainer.classList.remove("list");
   gridButton.classList.add("active");
   listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
   memberContainer.classList.add("list");
   memberContainer.classList.remove("grid");
   listButton.classList.add("active");
   gridButton.classList.remove("active");
});

// Initialize the data fetch on page load
getMembers();