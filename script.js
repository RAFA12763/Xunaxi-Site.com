
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "usuario";
    var correctPassword = "senha123";

    if (username === correctUsername && password === correctPassword) {
        alert("Login bem-sucedido!");

    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
