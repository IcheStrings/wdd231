document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Save to local storage
        localStorage.setItem('contactName', name);
        localStorage.setItem('contactEmail', email);
        localStorage.setItem('contactMessage', message);

        alert('Thank you for your message! We will get back to you shortly.');

        // Reset form
        contactForm.reset();
    });

    // Load stored values (if any) when the page loads
    if (localStorage.getItem('contactName')) {
        document.getElementById('name').value = localStorage.getItem('contactName');
    }
    if (localStorage.getItem('contactEmail')) {
        document.getElementById('email').value = localStorage.getItem('contactEmail');
    }
    if (localStorage.getItem('contactMessage')) {
        document.getElementById('message').value = localStorage.getItem('contactMessage');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class
    });

    // Optional: Close the menu when clicking a link
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});