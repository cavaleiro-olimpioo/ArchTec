function closePop() {
    let pop = document.querySelector('div#popup');
    let bd = document.getElementsByTagName('body')[0];
    let main = document.querySelector('div.main');

    // Aplica a animação de desaparecimento
    pop.style.animation = 'fadeOut 0.5s ease-in-out forwards';

    // Desativa o blur no fundo e permite rolar a página novamente
    main.style.filter = 'none';
    bd.style.overflowY = 'scroll';
}