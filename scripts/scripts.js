// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
    navbar.classList.remove('py-4');
    navbar.classList.add('py-2');
  } else {
    navbar.classList.remove('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
    navbar.classList.remove('py-2');
    navbar.classList.add('py-4');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('opacity-0', 'invisible');
    backToTopButton.classList.add('opacity-100', 'visible');
  } else {
    backToTopButton.classList.add('opacity-0', 'invisible');
    backToTopButton.classList.remove('opacity-100', 'visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form submission handling
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const className = document.getElementById('class').value;
  const date = document.getElementById('date').value;
  
  if (!name || !email || !phone || !className || !date) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // In a real implementation, you would send the form data to a server
  alert('Thank you for booking! We will contact you shortly to confirm your reservation.');
  contactForm.reset();
});