//abrir menu lateral

const botaoFechar = document.querySelector('.botao');
const botaoFechar2 = document.querySelector('.botao2');
const burger = document.querySelector('.burger');
const burgerResponsive = document.querySelector('.burger-responsive');
const menuLateral = document.querySelector('.menu-lateral');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    const isActive = menuLateral.classList.toggle('ativar');
    overlay.style.display = isActive ? 'block' : 'none';
    document.body.classList.toggle('menu-ativo', isActive);
}

burger.addEventListener('click', toggleMenu);
burgerResponsive.addEventListener('click', toggleMenu);
botaoFechar.addEventListener('click', toggleMenu);
botaoFechar2.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);

//abrir menu lateral


//navegar no conteudo do menu

const botaoinfo = document.querySelector('.nav-menu-lateral-info');
const botaonavmenu = document.querySelector('.nav-menu-lateral-navmenu');

function mostrar() {
    const conteudo = document.querySelector('.menu-lateral-container-nav');
    const conteudo2 = document.querySelector('.menu-lateral-container-info');

    conteudo.classList.add('ativo');
    conteudo2.classList.remove('ativo');

    botaonavmenu.classList.add('ativo');
    botaoinfo.classList.remove('ativo');
}

function mostrar2() {
    const conteudo = document.querySelector('.menu-lateral-container-nav');
    const conteudo2 = document.querySelector('.menu-lateral-container-info');

    conteudo2.classList.add('ativo');
    conteudo.classList.remove('ativo');

    botaoinfo.classList.add('ativo');
    botaonavmenu.classList.remove('ativo');
}

botaonavmenu.addEventListener('click', mostrar);
botaoinfo.addEventListener('click', mostrar2);


mostrar2();

//navegar no conteudo do menu


