
/* const meio2 = document.querySelector('.Meio2');
const fundoMeio = document.querySelector('.FundoMeio');
const containerMeio = document.querySelector('.ContainerMeio');

meio2.addEventListener('mouseenter', () => {
    fundoMeio.classList.add('ativo');

    // Aguarda um pouco e ativa a ContainerMeio depois
    setTimeout(() => {
        containerMeio.classList.add('ativo');
    }, 500); // 0.5 segundo depois
}); */

const meio2 = document.querySelector('.Meio2');
const fundoMeio = document.querySelector('.FundoMeio');
const containerMeio = document.querySelector('.ContainerMeio');

// Função que verifica a posição da rolagem e ativa a animação
function verificarScroll() {
    const meio2Pos = meio2.getBoundingClientRect().top; // Posição do elemento Meio2
    const alturaJanela = window.innerHeight; // Altura da janela de visualização

    // Verifica se o elemento Meio2 está visível na tela
    if (meio2Pos < alturaJanela * 0.8) { // Ativa quando 80% do elemento Meio2 estiver visível
        fundoMeio.classList.add('ativo');

        // Aguarda 0.5 segundo e ativa o containerMeio
        setTimeout(() => {
            containerMeio.classList.add('ativo');
        }, 500); // Delay de 0.5s
    }
}

// Adiciona um listener de rolagem na janela
window.addEventListener('scroll', verificarScroll);


window.addEventListener("load", function() {
    this.document.querySelector("header").classList.add("Header");
    this.document.querySelector('.topo').classList.add('Animar');
    this.document.querySelector('#TextoHeader').classList.add('Animar');
});


const ContatoZap = document.querySelector('.Contato');

ContatoZap.addEventListener('mouseover', () => {
    ContatoZap.style.transform = 'scale(1.2)';
    ContatoZap.style.transition = 'transform 0.3s';
});

ContatoZap.addEventListener('mouseout', () => {
    ContatoZap.style.transform = 'scale(1)';
})

const ContatoZap2 = document.querySelector('.Contato2');

ContatoZap2.addEventListener('mouseover', () => {
    ContatoZap2.style.transform = 'scale(1.2)';
    ContatoZap2.style.transition = 'transform 0.3s';
});

ContatoZap2.addEventListener('mouseout', () => {
    ContatoZap2.style.transform = 'scale(1)';
})

const ContatoZap3 = document.querySelector('#Contato1');

ContatoZap3.addEventListener('mouseover', () => {
    ContatoZap3.style.transform = 'scale(1.2)';
    ContatoZap3.style.transition = 'transform 0.3s';
});

ContatoZap3.addEventListener('mouseout', () => {
    ContatoZap3.style.transform = 'scale(1)';
})

const ContatoZap4 = document.querySelector('#Contato2');

ContatoZap4.addEventListener('mouseover', () => {
    ContatoZap4.style.transform = 'scale(1.2)';
    ContatoZap4.style.transition = 'transform 0.3s';
});

ContatoZap4.addEventListener('mouseout', () => {
    ContatoZap4.style.transform = 'scale(1)';
})
