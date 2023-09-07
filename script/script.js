const menu = document.querySelector(".menu");
menuOpen = false;

function OpenMenu(){
    menu.style.display = "block";
    menuOpen = true;
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

addEventListener('scroll', (e) => {
      if(menuOpen = true){
        CloseMenu();
      }
})

const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        const cor = entry.target.getAttribute('data-shadow-color');
        entry.target.style.setProperty('--cor-desejada', cor);
        if(entry.intersectionRatio <= 0){
            entry.target.classList.remove('neon');
        }else{
            entry.target.classList.add('neon');
        }
    })
})

Array.from(document.querySelectorAll('.project-img')).forEach(element =>{
    observer.observe(element)
})

