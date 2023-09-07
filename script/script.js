const menu = document.querySelector(".menu");

function OpenMenu(){
    menu.style.display = "block";
}

function CloseMenu(){
    menu.classList.add('fechamento');

    // Define um tempo para remover a classe após a animação
    setTimeout(() => {
        menu.classList.remove('fechamento');
        menu.style.display = 'none'; // Esconde o menu após a animação
    }, 1000); // Ajuste o valor para corresponder à duração da animação em milissegundos
}