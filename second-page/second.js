const BURGER = document.querySelector(".burger");
const NAV = document.querySelector(".nav");

BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    BURGER.classList.remove("active");
    NAV.classList.remove("active");
}))




