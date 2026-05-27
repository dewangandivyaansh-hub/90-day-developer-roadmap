/* 🌙 DARK MODE */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");
}

/* 📞 CONTACT FORM */

function sendMessage(event) {

    event.preventDefault();

    document.getElementById("response")
        .innerText =
        "✅ Message sent successfully!";
}