# Site interativo: Apaixonados

## Objetivo

Este site é uma página romântica e descontraída. A primeira tela pergunta se a pessoa é apaixonada: o botão **Não** muda de lugar quando o cursor passa por cima, enquanto o botão **Sim** leva a uma segunda página com uma declaração de amor e corações animados.

## Como abrir

Abra o arquivo `index.html` em um navegador. Não é necessário instalar dependências nem iniciar um servidor: o projeto usa HTML, CSS, JavaScript e imagens locais.

## Como o site funciona

1. `index.html` apresenta a pergunta, o GIF e os botões **Sim** e **Não**.
2. `scrip.js` controla as ações dos botões.
3. Ao clicar em **Sim**, o navegador abre `pagina2.html`.
4. `pagina2.html` mostra a mensagem e carrega `scrip2.js`, que cria corações periodicamente.

## Arquivos do projeto

- `index.html`: estrutura da página inicial e ligação com `estilo.css` e `scrip.js`.
- `estilo.css`: cores, posicionamento e aparência da página inicial.
- `scrip.js`: movimentação do botão **Não** e navegação para a segunda página.
- `pagina2.html`: estrutura da página de declaração.
- `estilo2.css`: aparência e animações visuais da segunda página.
- `scrip2.js`: criação e remoção dos corações flutuantes.
- `img/`: imagens usadas pelo site. O GIF da primeira página está na pasta principal do projeto.

## Principais comandos

### HTML

- `<link rel="stylesheet" href="estilo.css">`: conecta o arquivo HTML ao CSS responsável pelo visual.
- `<script src="scrip.js"></script>`: carrega o JavaScript da página.
- `onclick="nextPage()"`: chama a função `nextPage` quando o botão é clicado.
- `onmouseover="movebuton()"`: chama `movebuton` quando o cursor passa sobre o botão **Não**.
- `<img src="..." alt="...">`: exibe uma imagem e fornece uma descrição alternativa.

### JavaScript da página inicial (`scrip.js`)

- `document.getElementById("noButton")`: encontra o botão **Não** pelo seu `id`.
- `movebuton()`: move o botão para uma posição aleatória dentro da janela do navegador. `Math.random()` sorteia as coordenadas; `window.innerWidth` e `window.innerHeight` informam o tamanho da janela.
- `noButton.style.position = "fixed"`: posiciona o botão em relação à janela, permitindo movê-lo livremente.
- `nextPage()`: altera `window.location.href` para abrir `pagina2.html`.

### JavaScript da segunda página (`scrip2.js`)

- `emojis`: lista de símbolos usados como corações flutuantes.
- `document.createElement("span")`: cria um elemento HTML para cada coração.
- `Math.floor(Math.random() * emojis.length)`: escolhe um emoji aleatório da lista.
- `classList.add("coracao")`: aplica ao elemento os estilos e a animação definidos em `estilo2.css`.
- `document.body.appendChild(coracao)`: adiciona o coração à página.
- `setInterval(criarCoracao, 1000)`: cria um coração a cada 1.000 milissegundos (1 segundo).
- `setTimeout(() => coracao.remove(), 9000)`: remove o coração após 9 segundos para evitar manter elementos desnecessários na página.

### CSS

- `display: flex`, `justify-content` e `align-items`: organizam e centralizam os elementos.
- `min-height: 100vh`: faz a página ocupar pelo menos a altura da janela.
- `position: fixed`, `left` e `top`: posicionam os corações e permitem mover o botão pela tela.
- `@keyframes`: define as etapas de uma animação, como a subida dos corações.
- `animation`: aplica uma animação CSS a um elemento.
