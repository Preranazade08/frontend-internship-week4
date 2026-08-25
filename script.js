// ---------- Smooth scrolling ----------
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const sectionId = this.getAttribute("href");

        if (sectionId.startsWith("#")) {
            event.preventDefault();

            const section = document.querySelector(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// ---------- Mobile navigation button ----------
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    const menuButton = document.createElement("button");
    menuButton.className = "menu-toggle";
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open menu");

    navbar.appendChild(menuButton);

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

// ---------- Dark / Light mode ----------
const themeButton = document.createElement("button");
themeButton.id = "themeToggle";
themeButton.innerHTML = "🌙";
themeButton.setAttribute("aria-label", "Dark mode");
document.body.appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
});

// ---------- Contact form validation ----------
const contactForm = document.querySelector(".contact form");

if (contactForm) {
    const formMessage = document.createElement("p");
    formMessage.id = "formMessage";
    contactForm.appendChild(formMessage);

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been sent successfully.";
        formMessage.style.color = "green";

        contactForm.reset();
    });
}