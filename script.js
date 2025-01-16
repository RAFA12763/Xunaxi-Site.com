// Button: Download File
document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "glove abuse 3.0v.txt"; // File to download
    link.download = "glove abuse 3.0v.txt";
    link.click();
});

// Button: Discord 1
document.getElementById("discordBtn1").addEventListener("click", () => {
    window.open("https://discord.gg/7Qys7Gt45g", "_blank");
});

// Button: Discord 2
document.getElementById("discordBtn2").addEventListener("click", () => {
    window.open("https://discord.gg/7Qys7Gt45g", "_blank");
});

// Button: XUNAXI YouTube
document.getElementById("youtubeXunaxi").addEventListener("click", () => {
    window.open("https://www.youtube.com/@XUNAXI_Scripts", "_blank");
});

// Button: DonJosX YouTube
document.getElementById("youtubeDonJosX").addEventListener("click", () => {
    window.open("https://youtube.com/@donjosx?si=9a65UUaIMVRtSlZu", "_blank");
});

// Button: Google
document.getElementById("googleBtn").addEventListener("click", () => {
    window.open("https://www.google.com", "_blank");
});
