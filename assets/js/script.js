const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuButton.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});