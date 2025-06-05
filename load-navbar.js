fetch('navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  });
