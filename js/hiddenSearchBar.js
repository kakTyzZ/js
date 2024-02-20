const search = document.querySelector(".search");
const btn = document.querySelector(".searchBtn");
const input = document.querySelector(".inputSearchHeader");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});