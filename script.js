document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Controle do menu hambúrguer
  hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    hamburger.classList.toggle('open');
  });

  // Controle do modo noturno
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
});

