window.addEventListener("load", () => {
  // Убираем прелоадер
  document.getElementById("preloader").style.display = "none";
  // Показываем основной контент с анимацией
  document.getElementById("main-content").classList.remove("hidden");
});

function sendMsg() {
  const chatBox = document.getElementById("chat-box");
  const msgInput = document.getElementById("msgInput");
  const msg = msgInput.value.trim();
  if (!msg) return;
  const msgElem = document.createElement("div");
  msgElem.textContent = "👤 Гость: " + msg;
  chatBox.appendChild(msgElem);
  chatBox.scrollTop = chatBox.scrollHeight;
  msgInput.value = "";
}
