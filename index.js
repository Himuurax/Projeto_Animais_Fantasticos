// Retorne no console todas as imagens do site
const imagem = document.querySelectorAll('img');
console.log(imagem)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(palavraImagem);

// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]');
console.log(link);

// Selecione o primeiro h2 dentro de .animais-descricao
const seletorH2 = document.querySelector('.animais-descricao h2');
console.log(seletorH2);

// Selecione o último p do site
const seletorUltimoP = document.getElementsByTagName('p')[24];
console.log(seletorUltimoP);
