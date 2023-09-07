const menu = document.querySelector(".menu");

function OpenMenu(){
    menu.style.display = "block";
    document.documentElement.style.setProperty('overflow', 'hidden');
}

function CloseMenu(){
    menu.classList.add('fechamento');
    document.documentElement.style.setProperty('overflow', 'auto');

    // Define um tempo para remover a classe após a animação
    setTimeout(() => {
        menu.classList.remove('fechamento');
        menu.style.display = 'none'; // Esconde o menu após a animação
    }, 1000); // Ajuste o valor para corresponder à duração da animação em milissegundos
}