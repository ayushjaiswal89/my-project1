// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTopButton = document.getElementById('back-to-top');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button functionality
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

// Show modal on window load
window.onload = () => {
    if (modal) {
        modal.style.display = 'block';
    }
};

// Close modal
if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close modal if clicked outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel functionality
const carouselSlide = document.querySelector('.carousel-slide');
const images = carouselSlide ? carouselSlide.querySelectorAll('img') : [];
let counter = 0;

function carousel() {
    if (images.length > 0) {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        images[counter].classList.add('active');
        counter = (counter + 1) % images.length;
    }
}

if (carouselSlide) {
    setInterval(carousel, 3000);
}

// Lightbox functionality for gallery with navigation
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        const caption = document.createElement('p');
        caption.innerText = image.alt;
        caption.style.color = '#fff';
        caption.style.textAlign = 'center';
        lightbox.appendChild(caption);

        // Navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.innerText = '<';
        prevBtn.classList.add('lightbox-nav');
        prevBtn.style.left = '10px';
        lightbox.appendChild(prevBtn);
        
        const nextBtn = document.createElement('button');
        nextBtn.innerText = '>';
        nextBtn.classList.add('lightbox-nav');
        nextBtn.style.right = '10px';
        lightbox.appendChild(nextBtn);

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + galleryImages.length) % galleryImages.length;
            img.src = galleryImages[index].src;
            caption.innerText = galleryImages[index].alt;
        });

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % galleryImages.length;
            img.src = galleryImages[index].src;
            caption.innerText = galleryImages[index].alt;
        });

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Form validation functionality
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
}

// Subscribe form validation functionality
const subscribeForm = document.getElementById('subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('subscribe-email').value;

        if (email === '') {
            alert('Please enter your email.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Subscribed successfully!');
            subscribeForm.reset();
        }
    });
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}  