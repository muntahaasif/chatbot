function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is robo. I'm AI";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("do you solve my problems")) {
        output = "Sure! I can try to solve your problems.";
    } else if (input.includes("html stand for")) {
        output = "HTML stands for Hyper Text Markup Language.";
    } else {
        output = "Sorry, I don't understand that. Please try again.";
    }
    return output;
}

function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}


document.getElementById("sendBtn").onclick = function() {
    let input = document.getElementById("userInput").value;
    if (input.trim() === "") return;
    displayUserMessage(input);
    let botReply = chatbot(input);
    displayBotMessage(botReply);
    document.getElementById("userInput").value = "";
};