//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA
const iconoMenu = document.querySelector('#incono-menu'),
    menu =document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    //Alternar estilos para el menu y el body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //Alternar atributo "src" para el icono del menú
    const rutaActual = e.target.getAttribute('src');

    if (rutaActual == './styles/imagenes/menuHamburguesa.png'){
        e.target.setAttribute('src', './styles/imagenes/menuHamburguesa.png');
    }else{
        e.target.setAttribute('src', './styles/imagenes/menuHamburguesa.png');
    }
});
//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA