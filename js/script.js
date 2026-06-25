// =========================
// COUNTDOWN TIMER
// =========================

const targetDate =
new Date("July 15, 2026 09:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {

        const timer =
        document.getElementById("timer");

        if (timer) {
            timer.innerHTML =
            "🎉 Event Started!";
        }

        return;
    }

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    const timer =
    document.getElementById("timer");

    if (timer) {

        timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }
}

updateTimer();
setInterval(updateTimer, 1000);


// =========================
// DARK MODE
// =========================

const darkBtn =
document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            darkBtn.innerHTML = "☀️";

        } else {

            darkBtn.innerHTML = "🌙";

        }

    });

}


// =========================
// EVENT SEARCH
// =========================

function searchEvents() {

    let input =
    document.getElementById("searchInput");

    if (!input) return;

    let filter =
    input.value.toLowerCase();

    let cards =
    document.querySelectorAll(".event-card");

    cards.forEach(card => {

        if (
            card.innerText
            .toLowerCase()
            .includes(filter)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
window.onload = () => {
  alert("Welcome to Student Event Management Portal 🎓");
};