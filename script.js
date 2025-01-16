// Simulando o armazenamento de usuários e mensagens em um sistema simples (em produção seria um banco de dados).
let users = JSON.parse(localStorage.getItem("users")) || [];
let messages = JSON.parse(localStorage.getItem("messages")) || [];

// Registro de usuário
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (!username || !password) return alert("Por favor, preencha todos os campos.");

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Conta criada com sucesso! Agora você pode fazer login.");
    window.location.href = "login.html";
});

// Login do usuário
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "chat.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Página de chat
if (window.location.pathname.includes("chat.html")) {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("userName").textContent = loggedInUser;

        // Carregar e exibir as mensagens
        messages.forEach(msg => {
            let messageDiv = document.createElement("div");
            messageDiv.textContent = `${msg.user}: ${msg.text}`;
            document.getElementById("chatBox").appendChild(messageDiv);
        });

        // Enviar mensagem
        document.getElementById("sendMessage").addEventListener("click", function() {
            let message = document.getElementById("message").value;
            if (message.trim()) {
                messages.push({ user: loggedInUser, text: message });
                localStorage.setItem("messages", JSON.stringify(messages));

                // Exibir nova mensagem
                let messageDiv = document.createElement("div");
                messageDiv.textContent = `${loggedInUser}: ${message}`;
                document.getElementById("chatBox").appendChild(messageDiv);

                // Limpar a caixa de texto
                document.getElementById("message").value = "";
            }
        });

        // Listar usuários online
        let onlineUsers = users.filter(u => u.username !== loggedInUser); // Excluir o usuário logado
        onlineUsers.forEach(user => {
            let li = document.createElement("li");
            li.textContent = user.username;
            document.getElementById("userList").appendChild(li);
        });
    }
}
