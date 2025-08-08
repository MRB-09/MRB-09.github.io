const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        botao.style.transform = 'scale(1.2)';
        botao.style.transition = 'transform 0.3s';
    });

    botao.addEventListener('mouseout', () => {
        botao.style.transform = 'scale(1)';
    });
});

const meio2 = document.querySelector('.Meio2');
const fundoMeio = document.querySelector('.FundoMeio');
const containerMeio = document.querySelector('.ContainerMeio');

meio2.addEventListener('mouseenter', () => {
    fundoMeio.classList.add('ativo');

    // Aguarda um pouco e ativa a ContainerMeio depois
    setTimeout(() => {
        containerMeio.classList.add('ativo');
    }, 500); // 0.5 segundo depois
});


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

const BotoesMidia = document.querySelectorAll('.BotaoMidia');

BotoesMidia.forEach(BotaoMidia => {
    BotaoMidia.addEventListener('mouseover', () => {
    BotaoMidia.style.transform = 'scale(1.2)';
    BotaoMidia.style.transition = 'transform 0.3s';
});

BotaoMidia.addEventListener('mouseout', () => {
    BotaoMidia.style.transform = 'scale(1)';
})    
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
