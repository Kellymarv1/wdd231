// scripts/home.js

const spotlightContainer = document.querySelector('#spotlightContainer');

async function getMemberData() {
   try {
       const response = await fetch('data/members.json');
       const members = await response.json();
       
       displaySpotlights(members);
   } catch (error) {
       console.error('Error fetching member data:', error);
   }
}

function displaySpotlights(members) {
   if (!spotlightContainer) return;

   // 1. Filter for Gold or Silver members 
   // (Adjust the condition below depending on whether your JSON uses numbers like 2/3 or strings like 'Gold'/'Silver')
   const filteredMembers = members.filter(member => 
       member.membershipLevel === 3 || member.membershipLevel === 2 || 
       member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
   );

   // 2. Randomly shuffle the filtered array
   const shuffled = filteredMembers.sort(() => 0.5 - Math.random());

   // 3. Select the first 2 or 3 members from the shuffled list
   const selectedMembers = shuffled.slice(0, 3); // Change to 2 if you only want 2 spotlights

   // 4. Clear container and render cards
   spotlightContainer.innerHTML = '';

   selectedMembers.forEach(member => {
       const card = document.createElement('div');
       card.classList.add('spotlight-card');

       // Format membership level nicely if it's a number
       let levelText = member.membershipLevel;
       if (levelText === 3) levelText = 'Gold Member';
       if (levelText === 2) levelText = 'Silver Member';

       card.innerHTML = `
           <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
           <div class="spotlight-info">
               <h3>${member.name}</h3>
               <p class="membership-level">${levelText}</p>
               <p><strong>Phone:</strong> ${member.phone}</p>
               <p><strong>Address:</strong> ${member.address}</p>
               <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
           </div>
       `;

       spotlightContainer.appendChild(card);
   });
}

// Run the function when the page loads
getMemberData();