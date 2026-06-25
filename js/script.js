
console.log("SCRIPT IS RUNNING");
(function () {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            })
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch(() => {
                alert("Failed to send message");
            });
        });
    }

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                student_name: document.getElementById("studentName").value,
                reg_no: document.getElementById("regNo").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                department: document.getElementById("department").value,
                year: document.getElementById("year").value,
                event: document.getElementById("event").value,
                reason: document.getElementById("reason").value,
            })
            .then(() => {
                alert("Registration successful!");
                registerForm.reset();
            })
            .catch(() => {
                alert("Registration failed");
            });
        });
    }

    const darkBtn = document.getElementById("darkBtn");

    if (darkBtn) {
        darkBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

    const timer = document.getElementById("timer");

    if (timer) {

        const targetDate = new Date("July 15, 2026 09:00:00").getTime();

        function updateTimer() {

            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                timer.innerHTML = "🎉 Event Started!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

});

function filterCategory(category) {

    const cards = document.querySelectorAll(".event-card");

    if (!cards.length) return;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(category.toLowerCase())
            ? "block"
            : "none";

    });
}
document.addEventListener("DOMContentLoaded", function () {

    const timer = document.getElementById("timer");

    if (!timer) {
        console.log("Timer element not found");
        return;
    }

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
            days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});