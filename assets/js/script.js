document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6b6b';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#fff';
        });
    });
});
