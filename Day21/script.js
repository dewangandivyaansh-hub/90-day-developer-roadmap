const botReplies = [
    "🤖 Interesting!",
    "😄 Nice message!",
    "🔥 Cool!",
    "👀 Tell me more!",
    "🚀 Awesome!",
    "💬 I understand!"
];

function sendMessage() {

    let input = document.getElementById("messageInput");

    let messageText = input.value.trim();

    if (messageText === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // CURRENT TIME

    let currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    // USER MESSAGE

    let userMessage = document.createElement("div");

    userMessage.classList.add("message", "user");

    userMessage.innerHTML = `
        ${messageText}
        <span class="time">${currentTime}</span>
    `;

    chatBox.appendChild(userMessage);

    // RANDOM BOT REPLY

    setTimeout(() => {

        let randomReply =
            botReplies[Math.floor(Math.random() * botReplies.length)];

        let botMessage = document.createElement("div");

        botMessage.classList.add("message", "bot");

        botMessage.innerHTML = `
            ${randomReply}
            <span class="time">${currentTime}</span>
        `;

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

/* ⌨️ ENTER KEY SUPPORT */

document.getElementById("messageInput")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            sendMessage();
        }
    });