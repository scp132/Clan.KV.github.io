window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

// Чат-функция (локальная)
function sendMsg() {
  const chatBox = document.getElementById("chat-box");
  const msgInput = document.getElementById("msgInput");
  const msg = msgInput.value.trim();
  if (msg) {
    const msgElem = document.createElement("div");
    msgElem.textContent = "👤 Гость: " + msg;
    chatBox.appendChild(msgElem);
    chatBox.scrollTop = chatBox.scrollHeight;
    msgInput.value = "";
  }
}
