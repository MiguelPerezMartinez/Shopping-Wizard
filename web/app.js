//################    TIMER

//Function to calculate the purchase time in minutes and seconds
function timeCalculus(totalMls) {
    let min = (totalMls / 1000) / 60;
    if (min < 1) {
        min = 0;
    }
    let secs = Math.round((totalMls / 1000) % 60);
    return Math.round(min) + ' minutes and ' + secs + ' seconds.';
}

function minuteAlerts() {
    let startTime = new Date();
    let finished = false;

    //Event listener that ends the purchase and shows the total time spent
    document.getElementById('finishBttn').addEventListener('click', () =>{
        let endTime = new Date();
        let totalMls = endTime - startTime
        let totalTime = timeCalculus(totalMls);
        document.querySelector('#five .timer').classList.toggle('off');
        document.querySelector('#five .timer').innerHTML = '<legend><h2>Total time</h2></legend>'
        document.querySelector('#five .timer').innerHTML += 'Your purchase took: ' + totalTime;
        finished = true;
        return finished;
    });

    let counter = 0;
    let timerArr = document.querySelectorAll('.timer');

    let t = setInterval(() => {
        if (counter < 4 && finished == false) {
            console.log(counter);
            counter++;
            for (let x = 0; x < timerArr.length; x++ ) {
                timerArr[x].innerHTML = '<legend><h2>Timer</h2></legend>';
                timerArr[x].innerHTML += 'You started shopping ' + counter + ' minutes ago';
                timerArr[x].classList.toggle('off');
                setTimeout(() => {
                    timerArr[x].classList.toggle('off');
                }, 5000);
            }

        } else if (counter == 4 && finished == false) {
            console.log(counter);
            alert('Te has pasao!');
            let startPage = document.getElementById('one');
            startPage.scrollIntoView();
            clearInterval(t);
        } else if (finished == true) {
            clearInterval(t);
        }
    }, 20000); //60000
}

minuteAlerts();



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
    var price = document.getElementById("price"); // obtenemos el precio
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


























    
