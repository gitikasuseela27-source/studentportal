document.addEventListener("DOMContentLoaded", function () {

    // ================= EMAILJS INIT =================
    if (typeof emailjs !== "undefined") {
        emailjs.init("kwIU3uQkqHiWlzc8D");
    }

    // ================= CONTACT FORM =================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.send("service_jnfddi9", "template_g6bzrjy", {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            }).then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            }).catch(() => {
                alert("Failed to send message");
            });

        });
    }

    // ================= REGISTRATION FORM =================
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.send("service_jnfddi9", "template_g6bzrjy", {
                student_name: document.getElementById("studentName").value,
                reg_no: document.getElementById("regNo").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                department: document.getElementById("department").value,
                year: document.getElementById("year").value,
                event: document.getElementById("event").value,
                reason: document.getElementById("reason").value,
            }).then(() => {
                alert("Registration successful!");
                registerForm.reset();
            }).catch(() => {
                alert("Registration failed");
            });

        });
    }

    // ================= COUNTDOWN TIMER =================
    const timer = document.getElementById("timer");

    if (timer) {

        const targetDate = new Date("July 15, 2026 09:00:00").getTime();

        function updateTimer() {

            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                timer.innerHTML = "🎉 Event Started!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            timer.innerHTML =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

});

// ================= CATEGORY FILTER =================
function filterCategory(category) {

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(category.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// ================= SEARCH EVENTS =================
function searchEvents() {

    const input = document.getElementById("searchInput");
    if (!input) return;

    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll(".event-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}