// 1. Hero Slider Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// 2. Simple Cart Interaction
const cartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');
let count = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.innerText = count;
        
        // Visual feedback
        button.innerText = "Added!";
        button.style.backgroundColor = "#27ae60";
        
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.backgroundColor = "#333";
        }, 1000);
    });
});

// 3. Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// 4. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* GUIDE FOR IMAGES:
   - Create a folder named 'images' in your project root.
   - For Slider: images/slider1.jpg (Landscape, high res), images/slider2.jpg
   - For Products: images/product1.jpg to product6.jpg (Square aspect ratio, 500x500px)
   - For Testimonials: images/user1.jpg to user4.jpg (Circular crop works best)
*/