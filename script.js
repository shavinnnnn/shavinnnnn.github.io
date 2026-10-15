// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));

// Close menu after clicking a link and highlight the active section
const links = document.querySelectorAll('#navMenu a');
links.forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));

const sectionIds = ['home', 'about', 'education', 'skills', 'projects', 'hobbies', 'resume', 'contact'];
window.addEventListener('scroll', () => {
  let current = 'home';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});
