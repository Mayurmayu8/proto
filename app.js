document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();  

        emailjs.sendForm('service_vfblx2h', 'template_nnw4nce', contactForm)
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset(); 
            }, function(error) {
                alert('Failed to send message, please try again.');
                console.error('EmailJS Error:', error);
            });
    });
});

function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}
