// Basic JavaScript for CashHack-Pro
document.addEventListener('DOMContentLoaded', function() {
    console.log('CashHack-Pro loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add some interactivity - you can expand this later
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('click', function() {
            console.log('Hero section clicked!');
        });
    }
});
