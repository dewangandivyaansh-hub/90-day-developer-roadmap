function sendMessage() {

    let input = document.getElementById("messageInput");

    let messageText = input.value.trim();

    if (messageText === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // USER MESSAGE

    let userMessage = document.createElement("div");

    userMessage.classList.add("message", "user");

    userMessage.innerText = messageText;

    chatBox.appendChild(userMessage);

    // BOT REPLY

    setTimeout(() => {

        let botMessage = document.createElement("div");

        botMessage.classList.add("message", "bot");

        botMessage.innerText = "🤖 Message received!";

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}