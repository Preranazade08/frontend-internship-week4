const app = document.getElementById("app");

const routes = {
    "/": {
        title: "Welcome to My SPA",
        content: "This is the Home page of our Single Page Application."
    },

    "/about": {
        title: "About Us",
        content: "This page is loaded dynamically without refreshing the browser."
    },

    "/services": {
        title: "Our Services",
        content: "We provide modern web design, development, and optimization services."
    },

    "/contact": {
        title: "Contact Us",
        content: "You can contact us through this section of the application."
    }
};

function loadPage(path) {

    const page = routes[path];

    if (!page) {
        app.innerHTML = `
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        `;
        return;
    }

    app.style.opacity = "0";
    app.style.transform = "translateY(10px)";

    setTimeout(() => {

        app.innerHTML = `
            <h1>${page.title}</h1>
            <p>${page.content}</p>
        `;

        app.style.opacity = "1";
        app.style.transform = "translateY(0)";

    }, 200);
}

function navigate(path) {
    history.pushState({}, "", path);
    loadPage(path);
}

document.addEventListener("click", function(event) {

    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const path = new URL(link.href).pathname;

    navigate(path);
});

window.addEventListener("popstate", function() {
    loadPage(window.location.pathname);
});

const currentPath = window.location.pathname;

if (currentPath.endsWith("index.html") || currentPath.endsWith("/")) {
    loadPage("/");
} else {
    loadPage(currentPath);
}
