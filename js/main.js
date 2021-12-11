//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA
const iconoMenu = document.querySelector('#iconoMenu'),
    menu =document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    //Alternar estilos para el menu y el body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //Alternar atributo "src" para el icono del menú
    const rutaActual = e.target.getAttribute('src');

    if (rutaActual == 'fas fa-bars fa-3x'){
        e.target.setAttribute('src', 'fas fa-bars2 fa-3x');
    }else{
        e.target.setAttribute('src', 'fas fa-bars fa-3x');
    }
});
//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA//MENU HAMBURGUESA