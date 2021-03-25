// CLIENT CONTENT RESET

function resetClient() {
    client = {
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

    $inputs.forEach((input) => {
        input.value = "";
    });

    document.getElementById("talla").value = "size";
}

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
    // document.getElementById('finishBttn').addEventListener('click', () =>{
    //     let endTime = new Date();
    //     let totalMls = endTime - startTime;
    //     let totalTime = timeCalculus(totalMls);
    //     document.querySelector('#five .timer').classList = 'timer';
    //     document.querySelector('#five .timer').innerHTML = '<legend><h2>Total time</h2></legend>'
    //     document.querySelector('#five .timer').innerHTML += 'Your purchase took: ' + totalTime;
    //     finished = true;
    //     return finished;
    // });

    let counter = 0;
    let timerArr = document.querySelectorAll('.timer');

    let t = setInterval(() => {
        //Shows the timer popup every minute before reaching 5 minutes
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

        //Creates a popup to block the site and returns to the main page
        } else if (counter == 4 && finished == false) {
            console.log(counter);
            let shade = document.createElement('div');
            shade.id = 'popupShade';
            document.querySelector('body').appendChild(shade);
            let popup = document.createElement('div');
            popup.id = 'popup';
            popup.innerHTML = "<p>We are sorry but you've spent the maximum time allowed for the purchase.</p><p>You will be redirected to the main page in 5 seconds.</p>"
            document.querySelector('body').appendChild(popup);
            setTimeout(() => {
                popup.remove();
                shade.remove();
                let startPage = document.getElementById('one');
                startPage.scrollIntoView();
                resetClient();
            }, 60000);
            clearInterval(t);

        //Ends the interval if the customer finishes the purchase
        } else if (finished == true) {
            clearInterval(t);
        }
    },60000); //60000
}

document.querySelectorAll('.next')[0].addEventListener('click', minuteAlerts);