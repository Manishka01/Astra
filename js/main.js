// Theme Functions
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Load Saved Theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Theme Toggle
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.textContent =
        savedTheme === "light"
            ? "🌙"
            : "☀️";

    themeBtn.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        const newTheme =
            currentTheme === 'light'
                ? 'dark'
                : 'light';

        setTheme(newTheme);

        themeBtn.textContent =
            newTheme === "light"
                ? "🌙"
                : "☀️";
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target =
            document.querySelector(this.getAttribute('href'));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// Contact Form
const contactForm =
    document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        alert(
            'Thank you for your message! We will get back to you soon.'
        );

        this.reset();

    });

}

// Newsletter Form
const newsletterForm =
    document.querySelector('.newsletter-form');

if (newsletterForm) {

    newsletterForm.addEventListener('submit', function (e) {

        e.preventDefault();

        alert(
            'Thank you for subscribing to our newsletter!'
        );

        this.reset();

    });

}

// Section Animation
const observerOptions = {
    threshold: 0.1
};

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }

        });

    }, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Navbar Hide/Show on Scroll
let lastScroll = 0;

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (!navbar) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {

        navbar.classList.remove('scroll-up');
        return;

    }

    if (
        currentScroll > lastScroll &&
        !navbar.classList.contains('scroll-down')
    ) {

        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');

    }
    else if (
        currentScroll < lastScroll &&
        navbar.classList.contains('scroll-down')
    ) {

        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');

    }

    lastScroll = currentScroll;

});

// Mobile Menu
const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.querySelector(".nav-links");

const overlay =
    document.getElementById("overlay");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (overlay) {
            overlay.classList.toggle("active");
        }

        menuToggle.innerHTML =
            navLinks.classList.contains("active")
                ? "✕"
                : "☰";

    });

}

// Overlay Close
if (overlay && navLinks && menuToggle) {

    overlay.addEventListener("click", () => {

        navLinks.classList.remove("active");
        overlay.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

}