function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    // Check if it's an anchor link within the same page
    if (targetId.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector(".menu-links");
        const mobileIcon = document.querySelector(".hamburger-icon");
        if (mobileMenu && mobileMenu.classList.contains("open")) {
          mobileMenu.classList.remove("open");
          mobileIcon.classList.remove("open");
        }
        
        // Calculate position accounting for fixed navbar
        const navbarHeight = document.querySelector('#desktop-nav')?.offsetHeight || 
                            document.querySelector('#hamburger-nav')?.offsetHeight || 70;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    }
    // If it's not an anchor link (external link), let it behave normally
  });
});