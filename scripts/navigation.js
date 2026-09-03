const menuButton = document.querySelector("#menuButton");
const primaryNav = document.querySelector("#primaryNav");

menuButton.addEventListener("click", () => {

    const menuIsOpen = primaryNav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuButton.textContent = menuIsOpen
        ? "✕"
        : "☰";

});