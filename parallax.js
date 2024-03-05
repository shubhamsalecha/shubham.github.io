// parallax.js
document.addEventListener("DOMContentLoaded", function () {
    let parallaxElements = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", function () {
        parallaxElements.forEach(function (element) {
            let distance = window.scrollY * 0.5;
            element.style.backgroundPositionY = distance + "px";
        });
    });
});
