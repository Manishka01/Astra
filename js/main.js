
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}


const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);


document.querySelector('.theme-toggle').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  

  const icon = document.querySelector('.theme-toggle i');
  icon.className = `lucide lucide-${newTheme === 'light' ? 'moon' : 'sun'}`;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});


document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Thank you for subscribing to our newsletter!');
  this.reset();
});


const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);


document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});


let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});