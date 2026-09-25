const timestamp = document.querySelector("#timestamp");
if (timestamp) {
   timestamp.value = new Date();
}

const npBtn = document.querySelector("#np-btn");
const bronzeBtn = document.querySelector("#bronze-btn");
const silverBtn = document.querySelector("#silver-btn");
const goldBtn = document.querySelector("#gold-btn");

const npModal = document.querySelector("#np-modal");
const bronzeModal = document.querySelector("#bronze-modal");
const silverModal = document.querySelector("#silver-modal");
const goldModal = document.querySelector("#gold-modal");

const closeBtns = document.querySelectorAll(".close-modal");

if (npBtn) {
   npBtn.addEventListener("click", () => npModal.showModal());
   bronzeBtn.addEventListener("click", () => bronzeModal.showModal());
   silverBtn.addEventListener("click", () => silverModal.showModal());
   goldBtn.addEventListener("click", () => goldModal.showModal());

   closeBtns.forEach((btn) => {
       btn.addEventListener("click", (e) => {
           e.target.closest("dialog").close();
       });
   });
}