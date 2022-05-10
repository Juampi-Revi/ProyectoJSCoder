//Variables para la funcion generar Cards
const items = document.getElementById("items");
const itemss = document.getElementById("itemss");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
//constante que crea un fragment vacio para adicionar nodos al DOM 
const fragment = document.createDocumentFragment();


//array de productos
let productos = [
    {
        "precio": 2350,
        "id": 1,
        "title": "Harina Viada 0000 x25 Kg",
        "img": "../assets/productos/Harina Viada 0000 x25Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 5200,
        "id": 2,
        "title": "Harina Gastaldi Miga x50 Kg",
        "img": "../assets/productos/Harina Gastaldi Pro Migas x50Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 2700,
        "id": 3,
        "title": "Harina Gastaldi 0000 x25 Kg",
        "img": "../assets/productos/Harina Gastaldi 0000 x25Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 2050,
        "id": 4,
        "title": "Harina Viada 000 x25 Kg",
        "img": "../assets/productos/Harina Viada 000 x25Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 2050,
        "id": 5,
        "title": "Harina Cañuelas 000 x25 Kg",
        "img": "../assets/productos/Harina Cañuelas 000 x25Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 2300,
        "id": 6,
        "title": "Harina Gastaldi 000 x25 Kg",
        "img": "../assets/productos/Harina Gastaldi 000 x25Kg.png",
        "categoria": "Harinas"
    },
    {
        "precio": 3600,
        "id": 7,
        "title": "Margarina Hojaldre Hurricane x10 Kg",
        "img": "../assets/productos/Margarina Hojaldre Hurricane x10Kg.png",
        "categoria": "Margarinas"
    },
    {
        "precio": 3600,
        "id": 8,
        "title": "Margarina Masas y Batidos Hurricane x10 Kg",
        "img": "../assets/productos/Margarina Hurricane Masas x10Kg.png",
        "categoria": "Margarinas"
    },
    {
        "precio": 4900,
        "id": 9,
        "title": "Margarina Masas y Batidos Cordobesa x10 Kg",
        "img": "../assets/productos/Margarina Masa La Cordobesa x10kg.png",
        "categoria": "Margarinas"
    },
    {
        "precio": 2500,
        "id": 10,
        "title": "Margarina Hojaldre Cordobesa x5 Kg",
        "img": "../assets/productos/Margarina Hojaldre La Cordobesa x5kg.png",
        "categoria": "Margarinas"
    },
    {
        "precio": 710,
        "id": 11,
        "title": "Chocolate Mapricuber con Leche x800 gr",
        "img": "../assets/productos/Baño Mapricuber con Leche x800gr.png",
        "categoria": "Chocolates"
    },
    {
        "precio": 550,
        "id": 12,
        "title": "Chocolate Mapsa Semiamargo x500 gr",
        "img": "../assets/productos/Baño Mapsacuber SemiAmargox500gr.png",
        "categoria": "Chocolates"
    },
    {
        "precio": 1250,
        "id": 13,
        "title": "Chocolate Mapricoa Semiamargo x2.5 Kg",
        "img": "../assets/productos/Baño ET. Azul 2.5kg.png",
        "categoria": "Chocolates"
    },
    {
        "precio": 210,
        "id": 14,
        "title": "Chocolate Aguila Blanco x150 gr",
        "img": "../assets/productos/Baño Aguila Blanco x150gr.png",
        "categoria": "Chocolates"
    },
    {
        "precio": 1650,
        "id": 15,
        "title": "Dulce de Leche Repostero Ledevit x5Kg",
        "img": "../assets/productos/Dulce de Leche Repostero Ledevit x5kg.png",
        "categoria": "Dulces"
    },
    {
        "precio": 2150,
        "id": 16,
        "title": "Dulce de Leche Repostero Chakra x10Kg",
        "img": "../assets/productos/Dulce de Leche Repostero La Chakra x10kg.png",
        "categoria": "Dulces"
    },
    {
        "precio": 2300,
        "id": 17,
        "title": "Dulce de Leche Repostero Josefina x10Kg",
        "img": "../assets/productos/Dulce de Leche Repostero Josefina x10kg.png",
        "categoria": "Dulces"
    },
    {
        "precio": 930,
        "id": 18,
        "title": "Azucar Pedemonte Tipo A x10 Kg",
        "img": "../assets/productos/AzucarPedemonte.png",
        "categoria": "Azucar"
    },
    {
        "precio": 940,
        "id": 19,
        "title": "Azucar Bella Vista Tipo A x10 Kg",
        "img": "../assets/productos/AzucarBellaVista.png",
        "categoria": "Azucar"
    },
    {
        "precio": 1050,
        "id": 20,
        "title": "Azucar Fronterita Tipo A x10 Kg",
        "img": "../assets/productos/AzucarFronterita.png",
        "categoria": "Azucar"
    },
    {
        "precio": 80,
        "id": 21,
        "title": "Choclo en granos x300 gr",
        "img": "../assets/productos/Cholo en Granos x300gr.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 390,
        "id": 22,
        "title": "Palmitos Trozados x810 gr",
        "img": "../assets/productos/Palmitos en Trozos x810gr.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 40,
        "id": 23,
        "title": "Arvejas x350 gr",
        "img": "../assets/productos/Arvejasx350.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 110,
        "id": 24,
        "title": "Atún desmenuzado al Aceite x170 gr",
        "img": "../assets/productos/AtunAceite.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 450,
        "id": 25,
        "title": "Pasta de Relleno Mapsa de Frutilla x450 gr",
        "img": "../assets/productos/Pasta de Frutilla Mapsa x450gr.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 420,
        "id": 26,
        "title": "Pasta de Relleno Mapsa de Chocolate x450 gr",
        "img": "../assets/productos/Pasta de Chocolate Mapsa x450gr.png",
        "categoria": "Enlatados"
    },
    {
        "precio": 1000,
        "id": 27,
        "title": "Aceitunas Descarozadas Agge x2 Kg",
        "img": "../assets/productos/AceitunasDescarozadasAgge.png",
        "categoria": "Aceitunas"
    },
    {
        "precio": 1800,
        "id": 28,
        "title": "Aceitunas Numero 3 x5 Kg",
        "img": "../assets/productos/AceitunaIgrosN3x5.png",
        "categoria": "Aceitunas"
    },
    {
        "precio": 770,
        "id": 29,
        "title": "Dulce de Batata Serra x5 Kg",
        "img": "../assets/productos/Dulce de Batata Serra x5Kg.png",
        "categoria": "Dulces"
    },
    {
        "precio": 920,
        "id": 30,
        "title": "Durazno en Mitades x3 Kg",
        "img": "../assets/productos/Durazno en Mitades x3kg.png",
        "categoria": "Enlatados"
    },
];
let carrito = {};
//antes de cargar la pagina leer si en el localstorage hay algo en el carrito y si existe imprimirlo.
document.addEventListener('DOMContentLoaded',() =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        generarCarrito();
    }
    generarCards();
});

//CREAR CARDS
items.addEventListener("click", e => {
    addCarrito(e);
});
//Crear un numero menor de cards
let arrayAleatorio = [];
/*function numAleatorio(){
    for (let i = 0; i < 9 ; i++){
        const numeroAleatorio = Math.floor(Math.random() * productos.length);
        arrayAleatorio.push(numeroAleatorio);
        console.log(arrayAleatorio);
    };
} 
*/
//funcion generar cards (imprime en consola los productos)
const generarCards = productos => {
    productos.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.title;
        templateCard.querySelector("span").textContent = producto.precio;
        templateCard.querySelector("img").setAttribute("src", producto.img);
        templateCard.querySelector(".card").dataset.categoria = producto.categoria;
        //capto el boton y le doy al mismo el atributo "id" de mi producto
        templateCard.querySelector(".button-card").dataset.id = producto.id;
        //variable que clona los templates cards para generar mas de uno.
        const clone =templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
};
//funcion de seleccionar mediante evento todo el elemento y enviarlo a otra funcion.
const addCarrito = e => {
    //capturo cada elemento de la card
    //console.log(e.target);
    //capturo el elemento de la card que contenga una clase en particular 
    //console.log(e.target.classList.contains("button-card"));
    if (e.target.classList.contains("button-card")){
        //con parentElement seleccionamos todo el div de la card.
        //console.log(e.target.parentElement);
        setCarrito(e.target.parentElement);
    }
    //para detener cualquier otro evento que genere en nuestros items, porque se heredan del contendor padre y queremos evitar toda esa informacion.
    e.stopPropagation();
}
//funcion de añadir cosas al carrito
const setCarrito = objeto => {
    //console.log(objeto);
    const producto = {
        id: objeto.querySelector(".button-card").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    //condicional para que aumenta la cantidad de producto seleccionado, es decir poder comprar mas de una unidad de un mismo producto.
    //El metodo hasOwnProperty devuelve un booleano que nos especifica si ese objeto tiene una propiedad especifica.
    if(carrito.hasOwnProperty(producto.id)){
        //indicamos que si la cantidad del producto sea igual a la cantidad el producto dentro del carrito sumandole uno (+1) para aumentar uno mas en el carrito.
        producto.cantidad = carrito[producto.id].cantidad + 1;
        //si el producto no existe, por defecto la cantidad es = 1
    }
    //empujamos al carrito el producto mediante su id (boton de la card)
    //los "..." es un spread opertar q nos permite adquirir toda la informacion del objeto.
    carrito[producto.id] = {...producto};
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu producto se agrego al carrito',
        showConfirmButton: false,
        timer: 1500
        })
    generarCarrito();
}
//imprimir cotenido nuevo en el carrito
const generarCarrito = () => {
    //console.log(carrito);
    //para que no se me sobreescriban los items a imprimir empiezo mi carrito siempre vacio para cada vez q ejecute esta funcion.
    itemss.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id;
        templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio;
        const clone =templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    });
    itemss.appendChild(fragment);
    imprimirFooter();
    //guardar en el local storage el carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));
    imprimirNumeroCarrito();
}
//imprimir mi "footer o pie del carrito"
const imprimirFooter = () => {
    footer.innerHTML = "";
    if(Object.keys(carrito).length === 0){
        //object.keys devuelve un array con las propiedades de un objeto, lo utilizamos para saber si nuestro objeto carrito esta o no vacio.
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'
        return;
    }
    const numCantidad = Object.values(carrito).reduce(( acc, {cantidad}) => acc + cantidad, 0);
    const numPrecio = Object.values(carrito).reduce(( acc, {cantidad, precio}) => acc + cantidad * precio, 0);
    //console.log(numCantidad);
    //console.log(numPrecio);
    templateFooter.querySelectorAll("td")[0].textContent = numCantidad;
    templateFooter.querySelector("span").textContent = numPrecio;
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);
    const botonVaciar = document.getElementById("vaciar-carrito");
    botonVaciar.addEventListener("click", () => {
        carrito = {};
        generarCarrito();
    })
}
//dar funcionalidad a la botonera del footer del Carrito
itemss.addEventListener("click", e => {
    botonAccion(e);
})
const botonAccion = e => {
    //aumentar
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto};
        generarCarrito();
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        generarCarrito();
    }
    e.stopPropagation();
}
//Sumar numero de elementos de mi carrito 
const numeroCarrito = document.querySelector('.numero-carrito');
const imprimirNumeroCarrito = () => {
    const numCantidad = Object.values(carrito).reduce(( acc, {cantidad}) => acc + cantidad, 0);
    numeroCarrito.textContent = numCantidad;
}


//FORMULARIOS
//variables para darle estilos a los formularios
const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");
//eventos de nuestros formularios
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
//funcion de boton iniciar sesion 
function iniciarSesion(){
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
};
//funcion de boton register
function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
};

//BUSCADOR PRODUCTOS
//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
//Declarando variables
const bars_search =       document.getElementById("ctn-bars-search");
const cover_ctn_search =  document.getElementById("cover-ctn-search");
const inputSearch =       document.getElementById("inputSearch");
//Funcion para mostrar el buscador
function mostrar_buscador(){
    bars_search.style.top = "10rem";
    cover_ctn_search.style.display = "block";
}
//Funcion para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top = "-10rem";
    cover_ctn_search.style.display = "none";
    contenedorCarrito.style.marginLeft = "100%";
}
generarCards(productos);

//DESPLAZAR CARRITOS
//Desplazar carrito 
const contenedorCarrito = document.querySelector('.container-carrito');
const mostrarCarrito = () =>{
    contenedorCarrito.style.marginLeft = "60%";
    cover_ctn_search.style.display = "block";
};
//filtrar productos 