// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
        nav.style.padding = '10px 0';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.padding = '20px 0';
    }
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');

        const icon = button.querySelector('.icon');
        icon.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});

// Form Handling
document.getElementById('mainContact')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Hemos recibido tu solicitud. Un asesor se contactará contigo en breve (mismo día hábil).');
    e.target.reset();
});
