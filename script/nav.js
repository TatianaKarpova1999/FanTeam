
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  const menu = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger-menu');

  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove('active');
  }
});
