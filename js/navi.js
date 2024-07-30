const search = document.querySelector("main header input.search");
const search_icon = document.querySelector("main header nav .search-icon");
const header = document.querySelector("header");

search_icon.addEventListener("mouseenter", () => {
    search.classList.add("active");
})
header.addEventListener("mouseleave", () => {
    search.classList.remove("active");
    search.value = "";
})

