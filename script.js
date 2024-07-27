function toggleMenu() {
    const menuBar = document.getElementById('menu-bar');
    if (menuBar.style.width === '250px') {
        menuBar.style.width = '0';
    } else {
        menuBar.style.width = '250px';
    }
}

// scripts.js

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  