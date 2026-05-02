const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Toggle Password Visibility
togglePassword.addEventListener('click', function (e) {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Clear validation on input
[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', () => {
        const group = input.closest('.input-group');
        group.classList.remove('error');
        group.classList.remove('success');
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isFormValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Name is required');
        isFormValid = false;
    } else {
        setSuccess(nameInput);
    }

    // Validate Email
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        setError(emailInput, 'Email is required');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Enter a valid email address');
        isFormValid = false;
    } else {
        setSuccess(emailInput);
    }

    // Validate Password
    if (passwordInput.value.length < 6) {
        setError(passwordInput, 'Password must be at least 6 characters');
        isFormValid = false;
    } else {
        setSuccess(passwordInput);
    }

    // Submit Logic
    if (isFormValid) {
        const btn = document.getElementById('submitBtn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;

        // Simulate API call and show beautiful success overlay
        setTimeout(() => {
            const successOverlay = document.getElementById('successMessage');
            successOverlay.classList.add('active');
        }, 1200);
    }
});

function setError(input, message) {
    const formGroup = input.closest('.input-group');
    const errorDisplay = formGroup.querySelector('.error-msg');
    
    errorDisplay.innerText = message;
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
}

function setSuccess(input) {
    const formGroup = input.closest('.input-group');
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}