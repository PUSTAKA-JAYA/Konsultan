function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage('user', message);
    userInput.value = '';

    const response = getConsultantResponse(message);
    setTimeout(() => {
        appendMessage('consultant', response);
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getConsultantResponse(userInput) {
    if (userInput.toLowerCase().includes("harga")) {
        return "Harga produk kami berkisar antara Rp 100.000 hingga Rp 1.000.000.";
    } else if (userInput.toLowerCase().includes("kualitas")) {
        return "Kami menjamin kualitas terbaik untuk semua produk kami.";
    } else if (userInput.toLowerCase().includes("pengiriman")) {
        return "Pengiriman biasanya memakan waktu 3-5 hari kerja.";
    } else {
        return "Maaf, saya tidak mengerti pertanyaan Anda. Bisa dijelaskan lebih detail?";
    }
}
