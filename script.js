const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show"); // show when scrolled down
    } else {
        backToTop.classList.remove("show"); // hide at the top
    }
})