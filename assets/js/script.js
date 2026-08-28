
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        const menuIsOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", menuIsOpen);
    });
