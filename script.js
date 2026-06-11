const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Configurações do Personagem
let player = {
    x: 50,
    y: 175,
    width: 40,
    height: 40,
    speed: 5,
    color: "#fbc02d" // Cor destaque do Agrinho
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Simulação de cenário (Divisão Campo/Cidade)
    ctx.fillStyle = "#81c784"; // Lado Campo
    ctx.fillRect(0, 0, 400, 400);
    ctx.fillStyle = "#90a4ae"; // Lado Cidade
    ctx.fillRect(400, 0, 400, 400);
    
    ctx.fillStyle = "black";
    ctx.fillText("CAMPO", 170, 30);
    ctx.fillText("CIDADE", 570, 30);

    drawPlayer();
    requestAnimationFrame(update);
}

// Controle de Teclado
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && player.x < canvas.width - player.width) player.x += player.speed;
    if (e.key === "ArrowLeft" && player.x > 0) player.x -= player.speed;
    if (e.key === "ArrowUp" && player.y > 0) player.y -= player.speed;
    if (e.key === "ArrowDown" && player.y < canvas.height - player.height) player.y += player.speed;
});

update();
