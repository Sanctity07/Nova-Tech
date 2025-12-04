const menuIcon = document.getElementById('menuIcon');
        const navLinks = document.getElementById('navLinks');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

// Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name || 'Product';
        const price = btn.dataset.price || '';
        alert(`${name} added to cart ${price}`);
    });
});



const contactForm = document.getElementById('contactForm');
if(contactForm){
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');
    const formSuccess = document.getElementById('formSuccess');

    function validateEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        errorName.textContent = '';
        errorEmail.textContent = '';
        errorMessage.textContent = '';
        formSuccess.textContent = '';

        if(!nameInput.value.trim()){
            errorName.textContent = 'Please enter your name.';
            valid = false;
        }
        if(!emailInput.value.trim()){
            errorEmail.textContent = 'Please enter your email.';
            valid = false;
        } else if(!validateEmail(emailInput.value.trim())){
            errorEmail.textContent = 'Please enter a valid email address.';
            valid = false;
        }
        if(!messageInput.value.trim()){
            errorMessage.textContent = 'Please enter a message.';
            valid = false;
        }

        if(!valid){
            if(errorName.textContent) nameInput.focus();
            else if(errorEmail.textContent) emailInput.focus();
            else if(errorMessage.textContent) messageInput.focus();
            return;
        }

        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);

        formSuccess.textContent = 'Message sent — thank you!';
        contactForm.reset();
        setTimeout(() => { formSuccess.textContent = ''; }, 5000);
    });
}