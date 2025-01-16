// Seleciona o canvas e ajusta o tamanho
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para armazenar os pontos
let particles = [];

// Classe de Partícula
class Particle {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = canvas.height; // Reposiciona a partícula no final da tela
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

// Gera partículas aleatórias
function initParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1;
        const speed = Math.random() * 1.5 + 0.5;
        particles.push(new Particle(x, y, radius, speed));
    }
}

// Atualiza e desenha as partículas
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animateParticles);
}

// Ajusta o tamanho do canvas ao redimensionar
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Inicializa as partículas e inicia a animação
initParticles();
animateParticles();
