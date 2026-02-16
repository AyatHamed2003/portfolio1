// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Set initial state for hero (no animation)
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}

// Add parallax effect to profile image
window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image-wrapper');
    if (profileImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        profileImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add interactive glow effect on mouse move
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card, .tech-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            card.style.setProperty('--mouse-x', deltaX);
            card.style.setProperty('--mouse-y', deltaY);
        }
    });
});

// Add subtle pulse animation to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.style.animation = 'pulseGlow 3s ease-in-out infinite';
}

// Add CSS for pulse glow animation
const titleStyle = document.createElement('style');
titleStyle.textContent += `
    @keyframes pulseGlow {
        0%, 100% {
            text-shadow: 0 0 10px rgba(93, 173, 226, 0.3);
        }
        50% {
            text-shadow: 0 0 20px rgba(93, 173, 226, 0.5), 0 0 30px rgba(93, 173, 226, 0.3);
        }
    }
`;
document.head.appendChild(titleStyle);

// Add floating animation to tech icons
const techIcons = document.querySelectorAll('.tech-icon');
techIcons.forEach((icon, index) => {
    icon.style.animation = `floatIcon ${3 + index * 0.5}s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.2}s`;
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatIcon {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

