// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById('waitlistModal');
const joinWaitlistBtn = document.getElementById('joinWaitlist');
const closeModalBtn = document.querySelector('.close-modal');
const waitlistForm = document.getElementById('waitlistForm');

joinWaitlistBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = waitlistForm.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Waitlist signup:', email);
    
    // Show success message
    const formContent = waitlistForm.innerHTML;
    waitlistForm.innerHTML = `
        <div class="success-message">
            <p>Thanks for your interest! We'll keep you updated.</p>
        </div>
    `;
    
    // Reset form after 3 seconds
    setTimeout(() => {
        waitlistForm.innerHTML = formContent;
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 3000);
});

// Add scroll-based animation for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply initial styles and observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Add hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'translateY(-2px)';
    ctaButton.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'translateY(0)';
    ctaButton.style.boxShadow = 'none';
}); 