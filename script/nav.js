
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Закрытие меню при клике по ссылке
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger-menu');

  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove('active');
  }
});
