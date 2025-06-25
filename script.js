window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

function showAddPost() {
  hideAllAdminForms();
  document.getElementById("add-post-form").classList.remove("hidden");
}

function showDeleteOptions() {
  hideAllAdminForms();
  const postList = document.getElementById("post-list");
  postList.innerHTML = '';
  const posts = document.querySelectorAll("#forum-posts .post");
  posts.forEach((post, index) => {
    const title = post.querySelector("h3").textContent;
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox" value="${index}"> ${title}</label>`;
    postList.appendChild(li);
  });
  document.getElementById("delete-posts").classList.remove("hidden");
}

function showUserPanel() {
  hideAllAdminForms();
  document.getElementById("user-panel").classList.remove("hidden");
}

function hideAllAdminForms() {
  document.querySelectorAll(".admin-form").forEach(form => form.classList.add("hidden"));
}

function addPost() {
  const title = document.getElementById("post-title").value.trim();
  const content = document.getElementById("post-content").value.trim();
  if (!title || !content) return alert("Заполните все поля!");

  const forum = document.getElementById("forum-posts");
  const post = document.createElement("article");
  post.classList.add("post");
  post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  forum.appendChild(post);

  document.getElementById("post-title").value = '';
  document.getElementById("post-content").value = '';
  alert("Пост добавлен!");
}

function deleteSelected() {
  const checkboxes = document.querySelectorAll("#post-list input[type='checkbox']");
  const posts = Array.from(document.querySelectorAll("#forum-posts .post"));
  checkboxes.forEach((cb, index) => {
    if (cb.checked) posts[cb.value].remove();
  });
  document.getElementById("delete-posts").classList.add("hidden");
}
