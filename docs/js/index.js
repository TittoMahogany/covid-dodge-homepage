// Grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})

console.log("BOh")