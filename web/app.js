

// variable donde vamos a guardar los datos de los usuarios

var OurBuyersData = [];

// cazamos el div vacio donde queremos que se muestre los datos del usuario

var totalData = document.getElementById("displayListBuyers");

// metodo constructor para nuestro los parametros que nos interesan de nuestro usuario

class Buyers{
    constructor(price, colors,  hoodie, sizes){
        this.price = price;
        this.colors = colors;
        this.hoodie = hoodie;
        this.sizes = sizes;
    }
}


// creamos una funcion para nuestro usuario (comprador)

function createBuyer(){
    var price = document.querySelector['data-price']; // obtenemos el precio
    var colors = document.getElementById("colors"); // obtenbemos el color en texto
    var hoodie = document.getElementById("hoodie").src; // obtenemos la imagen
    var sizes = document.getElementById("sizes").value; // obtenemos la talla

    // objeto jugador

    var buyer = new Buyers(price, colors, hoodie, sizes);
    OurBuyersData.push(buyer);  // lo añadimos a nuestra variable de datos []

    updateBuyers();
}

// recorremos el array y los mostramos en un <p> PARA VER SI ALMACENA LOS DATOS O NO 

function updateBuyers(){
    totalData.innerHTML = "";

    // foor loop para recorrer los buyers y verlo en el index

    for (let i = 0; i < OurBuyersData.length; i++){
        totalData.innerHTML = totalData.innerHTML + '<div>' + 
        '<p>' + OurBuyersData[i].price + '</p>' +
        '<p>' + OurBuyersData[i].colors + '</p>' +
        '</p>' + OurBuyersData[i].hoodie + '</p>' +
        '</p>' + OurBuyersData[i].sizes + '</p>' +
        '</div>';
    }
}


























    
