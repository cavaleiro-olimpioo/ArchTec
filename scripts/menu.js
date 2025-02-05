function menu() {
    const menu = document.querySelector('div.menu');
    const smb = document.querySelector('button.togglemenu');
    
    // Verifica se o menu já está visível
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');  // Remove a classe 'show' para esconder
        menu.classList.add('hide');     // Adiciona a classe 'hide' para mover para fora
    } else {
        menu.classList.remove('hide');  // Remove a classe 'hide' para iniciar a animação
        menu.classList.add('show');     // Adiciona a classe 'show' para mostrar o menu
    }
    
    // Adiciona ou remove a classe 'x' para a animação do botão
    smb.classList.toggle('x');
}