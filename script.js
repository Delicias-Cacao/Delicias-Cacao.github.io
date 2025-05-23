window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#1e1e1e"; // Color más oscuro
    } else {
        nav.style.backgroundColor = "#2e2e2e"; // Color original
    }
});
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.getElementById("modo").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});