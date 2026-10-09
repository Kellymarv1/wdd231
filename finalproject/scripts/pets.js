// ==========================================
// PET DIRECTORY SCRIPT (Fetch + Filtering + Modal)
// ==========================================

import './main.js';

document.addEventListener('DOMContentLoaded', () => {
   const petsContainer = document.querySelector('#pets-container');
   const petModal = document.querySelector('#pet-modal');
   const modalBody = document.querySelector('#modal-body');
   const closeModal = document.querySelector('#close-modal');
   
   const filterAll = document.querySelector('#filter-all');
   const filterDogs = document.querySelector('#filter-dogs');
   const filterCats = document.querySelector('#filter-cats');

   let allPets = [];

   async function getPets() {
       try {
           const response = await fetch('data/pets.json');
           if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           allPets = await response.json();
           displayPets(allPets);
       } catch (error) {
           console.error('Failed to load pets data:', error);
           petsContainer.innerHTML = '<p class="error-msg">Sorry, we couldn’t load the pets right now. Please try again later.</p>';
       }
   }

   function displayPets(petsToDisplay) {
       petsContainer.innerHTML = '';

       petsToDisplay.forEach(pet => {
           const card = document.createElement('div');
           card.classList.add('pet-card');

           card.innerHTML = `
               <img src="${pet.image}" alt="${pet.name} the ${pet.breed}" loading="lazy" width="300" height="200">
               <h4>${pet.name}</h4>
               <p><strong>Breed:</strong> ${pet.breed}</p>
               <p><strong>Age:</strong> ${pet.age}</p>
               <button class="btn-details" data-id="${pet.id}">View Details</button>
           `;

           // Event listener for opening modal
           card.querySelector('.btn-details').addEventListener('click', () => {
               openPetModal(pet);
           });

           petsContainer.appendChild(card);
       });
   }

   // Modal display logic
   function openPetModal(pet) {
       modalBody.innerHTML = `
           <img src="${pet.image}" alt="${pet.name}" width="200">
           <h3>${pet.name} (${pet.gender})</h3>
           <p><strong>Species:</strong> ${pet.type.toUpperCase()}</p>
           <p><strong>Breed:</strong> ${pet.breed}</p>
           <p><strong>Age:</strong> ${pet.age}</p>
           <p><strong>About:</strong> ${pet.description}</p>
       `;
       petModal.showModal();
   }

   if (closeModal) {
       closeModal.addEventListener('click', () => {
           petModal.close();
       });
   }

   // Array filtering event listeners
   filterAll.addEventListener('click', () => {
       setActiveButton(filterAll);
       displayPets(allPets);
   });

   filterDogs.addEventListener('click', () => {
       setActiveButton(filterDogs);
       const dogs = allPets.filter(pet => pet.type === 'dog'); // Array filter method
       displayPets(dogs);
   });

   filterCats.addEventListener('click', () => {
       setActiveButton(filterCats);
       const cats = allPets.filter(pet => pet.type === 'cat'); // Array filter method
       displayPets(cats);
   });

   function setActiveButton(activeBtn) {
       document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
       activeBtn.classList.add('active');
   }

   getPets();
});