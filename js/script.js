var biografia = EscolhaSeletor(".sobre__titulo");
var redesSociais = EscolhaSeletor(".cabecalho__footer");

biografia.addEventListener('mouseover', adicionarEfeito(biografia));
biografia.addEventListener('mouseout', removerEfeito(biografia));

redesSociais.addEventListener('mouseover', adicionarEfeito(redesSociais));
redesSociais.addEventListener('mouseout', removerEfeito(redesSociais));

//Funções

function EscolhaSeletor(seletor) {
    return document.querySelector(seletor);
};

function adicionarEfeito(elemento) {
    elemento.addEventListener('mouseover', function() {
        elemento.classList.add('titulo-destacado');
    });

};

function removerEfeito(elemento) {
    elemento.addEventListener('mouseout', function() {
        elemento.classList.remove('titulo-destacado');
    });

};

