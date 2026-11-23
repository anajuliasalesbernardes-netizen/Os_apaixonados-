const emojis = ["💖", "💕", "💗", "💘", "❤️", "🌸", "✨"];

function criarCoracao() {
    const coracao = document.createElement("span");
    coracao.classList.add("coracao");
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 25 + 15) + "px";
    coracao.style.animationDuration = (Math.random() * 4 + 5) + "s";

    document.body.appendChild(coracao);

    // Remove o coração depois que ele sobe, para não pesar a página
    setTimeout(() => coracao.remove(), 9000);
}

setInterval(criarCoracao, 1000);