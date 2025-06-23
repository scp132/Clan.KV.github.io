const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msgInput");

function sendMsg() {
  const msg = msgInput.value.trim();
  if (msg) {
    const msgElem = document.createElement("div");
    msgElem.textContent = "👤 Гость: " + msg;
    chatBox.appendChild(msgElem);
    chatBox.scrollTop = chatBox.scrollHeight;
    msgInput.value = "";
  }
}
