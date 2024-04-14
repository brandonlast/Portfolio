
const toggleButton = document.getElementById('dark-theme-toggle');
const body = document.body;

function toggleTheme() {
  const isDarkTheme = body.classList.contains('dark-theme');
  body.classList.toggle('dark-theme');

  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('navbar-dark', isDarkTheme);

  localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
}

toggleButton.addEventListener('click', toggleTheme);

const themePreference = localStorage.getItem('theme');
if (themePreference === 'dark') {
  body.classList.add('dark-theme');
}