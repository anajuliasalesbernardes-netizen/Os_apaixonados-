# 💕 Apaixonados

> Uma experiência romântica, divertida e cheia de corações! ✨

<p align="center">
  <img src="animation%20bambi%20GIF%20by%20Disney.gif" alt="Bambi apaixonado" width="420">
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,javascript" alt="Ícones das tecnologias HTML, CSS e JavaScript">
</p>

## 💘 Sobre o projeto

Este é um site interativo e romântico em que o visitante responde a uma pergunta muito importante: **vocês são apaixonados?**

- O botão **Sim** leva o usuário para uma declaração especial.
- O botão **Não** fica tímido e muda de lugar ao passar o cursor por cima.
- Na segunda página, corações flutuantes tornam o momento ainda mais fofo! 🥰

## 🎮 Como abrir

Não é necessário instalar nada nem usar um servidor.

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Escolha sua resposta com cuidado... 😏

## 🛠️ Tecnologias utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📂 Estrutura dos arquivos

| Arquivo | Para que serve? |
| --- | --- |
| `index.html` | 🏠 Estrutura da página inicial |
| `estilo.css` | 🎨 Visual da primeira página |
| `scrip.js` | 🏃 Faz o botão **Não** fugir e abre a próxima página |
| `pagina2.html` | 💌 Estrutura da declaração |
| `estilo2.css` | 🌈 Visual e animações da segunda página |
| `scrip2.js` | 💕 Cria os corações que flutuam pela tela |
| `img/` | 🖼️ GIFs e imagens usadas nas páginas |

## ✨ Como o site funciona

### Página inicial

A primeira página apresenta o GIF, a pergunta e os dois botões.

- `onmouseover="movebuton()"` faz o botão **Não** mudar de posição.
- `onclick="nextPage()"` chama a função que abre `pagina2.html`.
- `Math.random()` ajuda a sortear novas coordenadas para o botão fugitivo.

### Segunda página

A declaração aparece junto com uma animação divertida:

- `document.createElement("span")` cria um novo coração.
- `Math.floor(Math.random() * emojis.length)` escolhe um emoji aleatório.
- `classList.add("coracao")` aplica o estilo e a animação.
- `setInterval(criarCoracao, 1000)` cria um coração a cada segundo.
- `setTimeout(() => coracao.remove(), 9000)` remove o coração depois de 9 segundos.

## 🌈 Destaques do código

- `display: flex` — centraliza os elementos com flexibilidade.
- `min-height: 100vh` — ocupa a altura da tela do navegador.
- `position: fixed` — permite posicionar o botão e os corações livremente.
- `@keyframes` — cria a animação em que os corações sobem pela tela.
- `window.location.href` — direciona o visitante para a segunda página.

## 🤝 Créditos

Projeto criado com HTML, CSS e JavaScript — e uma boa dose de romance! 💖
