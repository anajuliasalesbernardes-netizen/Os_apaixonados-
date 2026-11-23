const noButton = document.getElementById("noButton");

function movebuton() {
    if (noButton.parentElement !== document.body) {
        document.body.appendChild(noButton);
    }

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

function nextPage() {
    window.location.href = "pagina2.html";
}