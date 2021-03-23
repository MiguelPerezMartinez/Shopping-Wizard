$inputs = document.querySelectorAll(".validable");
$inputs.forEach((input) => {
  input.addEventListener('keyup',validation);
});

$shipping_type = document.querySelectorAll("#shipping-time");
$shipping_type.forEach((type) => {
  type.addEventListener('click',shippingCheck);
})

$gift = document.querySelector("#gift");
$gift.addEventListener('click',giftChecked);

function validation(event){
  let target = event.target
  let valid = false
  switch(event.target.id){
    case "username":
      valid = validUsername(event,target);
      break;
    case "email":
      valid = validEmail(target);
      break;
    case "password":
      valid = validPassword(target);
      break;
    case "confirm-password":
      valid = validConfirmPassword(target);
      break;
    case "first-name":
      valid = validFirstLastName(event,target);
      break;
    case "last-name":
      valid = validFirstLastName(event,target);
      break;
    case "address-one":
      valid = validAddress(target);
      break;
    case "address-two":
      valid = validAddress(target);
      break;
    case "postal-code":
      valid = validPostalCode(target);
      break;
    case "add-phone":
      valid = validPhone(target);
      break;
    default:
      console.log("default");
  }
  if (valid === true){
    target.style.backgroundColor = "rgb(166, 253, 192)";
  }else{
    target.style.backgroundColor = "rgb(253, 166, 166)";
  }
}

// VALIDATION REQUIREMENTS

function validUsername(event,target){
  return (target.value.length >= 4 || target.value.length <= 13);
}

function validEmail(target){
  let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(target.value).toLowerCase());
}

function validPassword(target){
  let pattern = /^[a-zA-Z0-9_*!¡"·$%&/()=?¿+-]+$/;
  return (pattern.test(target.value) && target.value.length >= 8 && target.value.length <= 20);
}

function validConfirmPassword(target){
  let password = document.querySelector("#password");
  return (validPassword(target) && target.value == password.value);
}

function validFirstLastName(event,target){
  return !(target.value.length <= 4 || target.value.length >= 20 || parseInt(event.key) >= 0);
}

function validAddress(target){
  return (target.value.length >= 4 || target.value.length <= 50);
}

function validPostalCode(target){
  return (target.value.length <= 5 && parseInt(target.value) >= 0);
}

function validPhone(target){
  return (target.value.length <= 9 && parseInt(target.value) >= 0);
}

function shippingCheck(event){
  let arrival = document.querySelector("#shipping-date");
  arrival.style.display = "block";
}

function giftChecked(event){
  if(event.target.checked == true){
    console.log(event.target.checked);
    document.querySelector(".gift-message").style.display = "block";
  }else{
    console.log(event.target.checked);
    document.querySelector(".gift-message").style.display = "none";
  };
}