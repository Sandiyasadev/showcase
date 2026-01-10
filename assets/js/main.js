// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const menuIcon = mobileBtn?.querySelector('span');
    
    if (isMenuOpen) {
        mobileMenu?.classList.remove('translate-x-full');
        mobileMenu?.classList.add('active');
        if (menuIcon) menuIcon.textContent = 'close';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu?.classList.add('translate-x-full');
        mobileMenu?.classList.remove('active');
        if (menuIcon) menuIcon.textContent = 'menu';
        document.body.style.overflow = 'auto';
    }
}

if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMenu);
}

// Close menu when clicking a link
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// Reveal on Scroll with stagger animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // Hero animations on load
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.1}s`;
    });

    // Feature card glow effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
