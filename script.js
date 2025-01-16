// Função para simular o login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Usuário e senha pré-definidos (poderiam ser obtidos de um banco de dados, por exemplo)
    var correctUsername = "usuario";
    var correctPassword = "senha123";

    // Verificando se o login está correto
    if (username === correctUsername && password === correctPassword) {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para outra página
        // window.location.href = "pagina_interna.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
