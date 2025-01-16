// Registro de usuário
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) return alert("Por favor, preencha todos os campos.");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada com sucesso! Agora você pode fazer login.");
    window.location.href = "login.html";  // Redireciona para a página de login
});

// Login de usuário
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "chat.html";  // Redireciona para a página de chat
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Página de chat
if (window.location.pathname.includes("chat.html")) {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html";  // Se não estiver logado, redireciona para login
    } else {
        document.getElementById("userName").textContent = loggedInUser;
    }
}
