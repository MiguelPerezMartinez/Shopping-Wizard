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

//################    PROGRESS BAR

// So this over here...
/*

function progressBar()  {
    let progressState = document.getElementById("progress_state");

    if (progressState == 1)   {
        document.getElementById("progress").style.width = "0%";
        document.getElementsByClassName("circle-one").style.visibility = 'visible';

    }   else if (progressState == 2)    {
        document.getElementById("progress").style.width = "34%";
        document.getElementsByClassName("circle-two").style.visibility = 'visible';

    }   else if (progressState == 3)    {
        document.getElementById("progress").style.width = "67%";
        document.getElementsByClassName("circle-three").style.visibility = 'visible';

    }   else if (progressState == 4)    {
        document.getElementById("progress").style.width = "100%";
        document.getElementsByClassName("circle-four").style.visibility = 'visible';

    }   else {
        document.getElementById("progress").style.width = "0%";
        document.getElementsByClassName("circle-one").style.visibility = 'hidden';
        document.getElementsByClassName("circle-two").style.visibility = 'hidden';
        document.getElementsByClassName("circle-three").style.visibility = 'hidden';
        document.getElementsByClassName("circle-four").style.visibility = 'hidden';
    }
}
*/

//...is a mess!    | I'm all out of ideas on how to implement it. Sorry, but I'm bad at math.


//MUST implement progress code in HTML. Add "progress_state" ID/class.

//Another way to do it... By using event listeners on buttons "addressBttn", "profileBttn", etc.
