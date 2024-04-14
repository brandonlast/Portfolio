let text = "Network Administrator...";
let speed = 100;
let elem = document.getElementById('cycle');

elem.style.fontSize = "30px";

function typeWriter() {
  if (elem.textContent.length > 0) {
    elem.textContent = elem.textContent.slice(0, -1);
    setTimeout(typeWriter, speed);
  } else {
    typeMessage(text, 0);
  }
}

function typeMessage(message, index) {
  if (index < message.length) {
    elem.textContent += message.charAt(index);
    index++;
    setTimeout(function() {
      typeMessage(message, index);
    }, speed);
  }
}

setTimeout(function(){
  typeWriter();
}, 3000);


const toggleButton = document.getElementById('dark-theme-toggle');
const body = document.body;

function toggleTheme() {
  const isDarkTheme = body.classList.contains('dark-theme');
  body.classList.toggle('dark-theme');

  // Store user preference in localStorage (optional)
  localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
}

toggleButton.addEventListener('click', toggleTheme);

// Check for user preference on page load (optional)
const themePreference = localStorage.getItem('theme');
if (themePreference === 'dark') {
  body.classList.add('dark-theme');
}


