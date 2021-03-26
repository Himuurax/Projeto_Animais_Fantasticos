// DUPLIQUE O MENU E ADICIONE ELE EM COPY
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// SELECIONE O PRIMEIRO DT DA DL DE FAQ
const faq = document.querySelector('.faq');
const dt = faq.querySelector('dt');

// SELECIONE O DD REFERENTE AO PRIMEIRO DT
const proxDD = dt.nextElementSibling;

// SUBSTITUA O CONTEÚDO HTML DE .FAQ PELO DE .ANIMAIS
const faq1 = document.querySelector('.faq');
const animais = document.querySelector('.animais');
const substitui = faq1.appendChild(animais);