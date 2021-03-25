const purchaseBtn = document.getElementById('productBttn');

const nextBtn1 = document.getElementById('profileBttn');
const nextBtn2 = document.getElementById('addressBttn');
const nextBtn3 = document.getElementById('shippingBttn');
const nextBtn4 = document.getElementById('finishBttn');


const circleOne = document.getElementsByClassName('circle-one');
const circleTwo = document.querySelector('.circle-two');
const circleThree = document.querySelector('.circle-three');
const circleFour = document.querySelector('.circle-four');


const progressBar = document.getElementById('progress');

const progressContainer = document.getElementById('progress-bar-container')


// Button and progress bar interaction

purchaseBtn.addEventListener('click', function()   {
    progressContainer.style.visibility = 'visible';
    progressBar.style.width = '0%';
})

nextBtn1.onclick = function()   {
    progressContainer.style.visibility = 'visible';
    progressBar.style.width = '34%';
    circleTwo.style.backgroundColor = '#A69D94';
}

nextBtn2.onclick = function()   {
    progressContainer.style.visibility = 'visible';
    progressBar.style.width = '66%';
    circleThree.style.backgroundColor = '#A69D94';
}

nextBtn3.onclick = function()   {
    progressContainer.style.visibility = 'visible';
    progressBar.style.width = '99%';
    circleFour.style.backgroundColor = '#A69D94';
}

nextBtn4.onclick = function()   {
    progressContainer.style.visibility = 'visible';
    progressBar.style.width = '99%';
    circleFour.style.backgroundColor = '#A69D94';
}



/* SAME IDEA, DIFFERENT METHOD:


//Declare buttons and progress bar elements as constants:
const purchaseBtn = document.getElementById('buy-button');
const nextBtn = document.getElementById('next-step');
const checkpoints = [...document.querySelectorAll('.checkpoint')]
const progressBar = document.getElementById('progress');
const progressContainer = document.getElementById('progress-bar-container')

//Declare variable to store current step:
let currentStep = 0;

//Hide progress bar in main page:
if (currentStep > 0)    {
    progressContainer.style.visibility = 'visible';
}   else {
    progressContainer.style.visibility = 'hidden';
}

//Next button function:
nextBtn.onclick = function() {
    const currentCheckpoint = checkpoints[currentStep - 1];
    currentCheckpoint.classList.add('done');
    currentStep++;
}

//Associate progress to steps:

checkpoints.forEach()   {

}

*/