//QUANDO O USUÁRIO CLICAR NOS LINKS INTERNOS DO SITE,
// ADICIONE A CLASSE ATIVO AO ITEM CLICADO E REMOVA DOS
// DEMAIS ITENS CASO ELES POSSUAM A MESMA. PREVINA
// O COMPORTAMENTO PADRÃO DESSES LINKS.

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach(link => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
    console.log(event);
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

// SELECIONE TODOS OS ELEMENTOS DO SITE COMEÇANDO A PARTIR DO BODY,
// AO CLIQUE MOSTRE EXATAMENTE QUAIS ELEMENTOS ESTÃO SENDO CLICADOS.

const todosElementos = document.querySelectorAll('body *');

function elementClick (event) {
   console.log(event.currentTarget);
}

todosElementos.forEach(element => {
    element.addEventListener('click', elementClick);
})

// UTILIZANDO O CÓDIGO ANTERIOR, AO INVÉS DE MOSTRAR NO CONSOLE
// REMOVA O ELEMENTO QUE ESTÁ SENDO CLICADO, O MÉTODO REMOVE() REMOVE UM ELEMENTO

/*const todosElementos1 = document.querySelectorAll('body *');

function elementRemove (event) {
   event.currentTarget.remove();
}

todosElementos.forEach(element => {
    element.addEventListener('click', elementRemove);
})*/

// SE O USUÁRIO CLICAR NA TECLA(T), AUMENTE TODO O TEXTO DO SITE

function teclaT(event) {
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', teclaT);