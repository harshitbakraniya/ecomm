let bars = document.getElementById("bars");
let close = document.getElementById("close");
let nav_links = document.getElementById("nav-links");

bars.addEventListener("click", () => {
    nav_links.classList.add("active");
})
close.addEventListener("click", () => {
    nav_links.classList.remove("active");
})

window.addEventListener("scroll", () => {
    let nav = document.getElementById("navbar");
    if (window.pageYOffset > 5) {
        // nav.style.background = "white";
        // nav.style.boxShadow = "0 0 7px 0 rgba(0,0,0,0.1)";
        // nav.style.border = "5px solid #06d6a0";
    } else {
        // nav.style.background = "transparent";
        // nav.style.boxShadow = "none";    
        // nav.style.border = "5px solid #ffffff";
    }
})