document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    const dynamicContent = document.getElementById('dynamicContent');

    // Ensure all elements are correctly selected
    // if (!contactForm  || !formResponse || !dynamicContent) {
    //     console.error('One or more elements not found in the DOM');
    //     return;
    // }
//git config --global user.email "you@example.com"
  //git config --global user.name "Your Name"
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');
        const city = document.getElementById('city');

        try {
            if (!name.value || name.value===null || !email.value || email.value===null || !phone.value || phone.value===null || !address.value || address.value===null  || !city.value || city.value===null) {
                throw new Error('Please fill in all required fields.');
            }

            // Perform form validation and submit logic here
            // For example, you can send the form data to a server using AJAX
            console.log('Form submitted successfully');

            // Display a success message (without resetting the form fields)
            if (formResponse) {
                formResponse.classList.remove('hidden');
                formResponse.textContent = 'Thank you for your message!';
                alert('Form Submitted successfully');
            } else {
                console.error('formResponse element not found in the DOM');
            }

        } catch (error) {
            console.error(error);
            // Handle the error, e.g., display an error message to the user
            alert(error.message);
        }
    });

    toggleContent.addEventListener('click', function() {
        dynamicContent.style.display = dynamicContent.style.display === 'none' ? 'block' : 'none';
    });
});
