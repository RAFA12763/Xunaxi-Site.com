// Botão de download
document.getElementById("downloadBtn").addEventListener("click", () => {
    // Inicia o download do arquivo "glove abuse 3.0v.txt"
    const link = document.createElement("a");
    link.href = "glove abuse 3.0v.txt"; // Substitua pelo caminho correto do arquivo
    link.download = "glove abuse 3.0v.txt";
    link.click();
});

// Botão do Discord
document.getElementById("discordBtn").addEventListener("click", () => {
    // Abre o link do Discord
    window.open("https://discord.gg/7Qys7Gt45g", "_blank");
});

// Botão do YouTube (XUNAXI)
document.getElementById("youtubeXunaxi").addEventListener("click", () => {
    // Abre o canal XUNAXI YouTube
    window.open("https://www.youtube.com/@XUNAXI_Scripts", "_blank");
});

// Botão do YouTube (DonJosX)
document.getElementById("youtubeDonJosX").addEventListener("click", () => {
    // Abre o canal DonJosX YouTube
    window.open("https://youtube.com/@donjosx?si=9a65UUaIMVRtSlZu", "_blank");
});
