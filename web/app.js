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
        document.querySelector('#five .footer').innerHTML = 'Your purchase took: ' + totalTime;
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


//################    CLIENT OBJECT

let client = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthday: "",
    address1: "",
    address2: "",
    postalCode: "",
    country: "",
    phoneCode: "",
    phone: "",
    regularAddress: "",
    shipping: "",
    shippingEstimate: "",
    gift: "",
    gMessage: "",
    gImage: ""
};

function profileAdd(client) {
    client.username = document.getElementById('username').value;
    client.email = document.getElementById('email').value;
    client.password = document.getElementById('password').value;
    client.firstName = document.querySelector('input[placeholder=" First name"]').value;
    client.lastName = document.querySelector('input[placeholder=" Last name"]').value;
    client.birthday = document.querySelector('input[placeholder=" Birthday"]').value;
    client.address1 = document.querySelector('input[placeholder=" Address 1"]').value;
    client.address2 = document.querySelector('input[placeholder=" Address 2"]').value;
    client.postalCode = document.querySelector('input[placeholder=" Postal code"]').value;
    client.country = document.querySelector('select[name="add_country"]').value;
    client.phoneCode = document.querySelector('select[name="add_phone_country"]').value;
    client.phone = document.querySelector('input[placeholder=" Phone"]').value;
    client.regularAddress = document.querySelector('#three input[type="checkbox"]').checked;
    client.shipping = document.querySelector('#four input[type="checkbox"]:checked').name;
    client.shippingEstimate = document.getElementById('shippingEstimate').innerText;
    client.gift = document.querySelector('#four input[type="checkbox"]').checked;
    client.gMessage = document.querySelector('input[name="gift-message"]').value;
    client.gImage = document.getElementById('upload-photo').value;

    console.log(client);
    /* return client; */
}

document.getElementById('profileBttn').addEventListener('click', profileAdd);
document.getElementById('addressBttn').addEventListener('click', profileAdd);
document.getElementById('shippingBttn').addEventListener('click', profileAdd);

