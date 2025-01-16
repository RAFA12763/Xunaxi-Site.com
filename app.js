// Função para enviar mensagens de chat
function sendMessage() {
    const message = document.getElementById('message').value;
    const chatMessages = document.getElementById('chatMessages');
    
    // Adiciona a mensagem ao chat
    chatMessages.innerHTML += `<p><strong>${localStorage.getItem("loggedInUser")}:</strong> ${message}</p>`;
    document.getElementById('message').value = ''; // Limpa a caixa de texto
}

// Função de registro
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
});

// Função de login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "chat.html"; // Redireciona para o chat
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Verificar se o usuário está logado ao acessar o chat
if (document.getElementById("userName")) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html"; // Redireciona para login se não estiver logado
    } else {
        document.getElementById("userName").textContent = loggedInUser;
    }
}
