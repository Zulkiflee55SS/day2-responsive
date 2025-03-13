
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector(".nav-menu").classList.remove("show");
    });
});
