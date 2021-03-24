//EVENT LISTENERS FOR INPUTS/SHIPPING/GIFT

$inputs = document.querySelectorAll(".validable");
$inputs.forEach((input) => {
  input.setAttribute("autocomplete","off");
  input.addEventListener('keyup',validation);
  input.addEventListener('focusout',validation);
  input.addEventListener('click',validation);
});

$shipping_type = document.querySelectorAll(".shipping-time");
$shipping_type.forEach((type) => {
  type.setAttribute("autocomplete","off");
  type.addEventListener('click',shippingCheck);
})

$gift = document.querySelector("#gift");
$gift.setAttribute("autocomplete","off");
$gift.addEventListener('click',giftChecked);


//CLIENT OBJECT

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
  shippingPrice: "",
  gift: "",
  gMessage: "",
  gImage: ""
};


//VALIDATION FUNCTION

function validation(event){
  let target = event.target;
  let valid = false;
  switch(event.target.id){
    case "username":
      valid = validUsername(event,target);
      if (valid == true){client.username = event.target.value;};
      break;
    case "email":
      valid = validEmail(target);
      if (valid == true){client.email = event.target.value;};
      break;
    case "password":
      valid = validPassword(target);
      break;
    case "confirm-password":
      valid = validConfirmPassword(target);
      if (valid == true){client.password = event.target.value;};
      break;
    case "first-name":
      valid = validFirstLastName(event,target);
      if (valid == true){client.firstName = event.target.value;};
      break;
    case "last-name":
      valid = validFirstLastName(event,target);
      if (valid == true){client.lastName = event.target.value;};
      break;
    case "birthday":
      valid = validBirthday(target);
      if (valid == true){client.birthday = event.target.value;};
      break;
    case "address-one":
      valid = validAddress(target);
      if (valid == true){client.address1 = event.target.value;};
      break;
    case "address-two":
      valid = validAddress(target);
      if (valid == true){client.address2 = event.target.value;};
      break;
    case "postal-code":
      valid = validPostalCode(target);
      if (valid == true){client.postalCode = event.target.value;};
      break;
    case "country":
      valid = true;
      client.country = event.target.value;
      break;
    case "phone-prefix":
      valid = true;
      client.phoneCode = event.target.value;
      break;
    case "add-phone":
      valid = validPhone(target);
      if (valid == true){client.phone = event.target.value;};
      break;
    case "regular-address":
      //TODO: Pendiente de que al guardar en el objeto sea true o false. Se queda siempre en On.
      valid = true;
      if (valid == true){client.regularAddress = event.target.value;};
      break;
    case "gift-title":
      valid = validGiftTitle(target);
      if (valid == true){client.gift = event.target.value;};
      break;
    case "gift-message":
      valid = validGiftMessage(target);
      if (valid == true){client.gMessage = event.target.value;};
      break;
    default:
      console.log("default");
      valid = false;
  }
  if (valid === true){
    target.style.backgroundColor = "rgb(166, 253, 192)";
  }else{
    target.style.backgroundColor = "rgb(253, 166, 166)";
  }
}

// VALIDATION REQUIREMENTS

function validUsername(event,target){
  return (target.value.length >= 4 && target.value.length <= 13);
}

function validEmail(target){
  let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return pattern.test(String(target.value).toLowerCase());
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
  return !(target.value.length < 3 || target.value.length >= 20 || parseInt(event.key) >= 0);
}

function validBirthday(target){
  let pattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  return (pattern.test(target.value));
}

function validAddress(target){
  return (target.value.length >= 4 && target.value.length <= 50);
}

function validPostalCode(target){
  return (target.value.length == 5 && parseInt(target.value) >= 0);
}

function validPhone(target){
  return (target.value.length == 9 && parseInt(target.value) >= 0);
}

function validGiftTitle(target){
  return (target.value.length >= 5 && target.value.length <= 20);
}

function validGiftMessage(target){
  return (target.value.length >= 5 && target.value.length <= 100);
}

//SHIPPING SELECTION

function shippingCheck(event){
  console.log("shipping check");
  let arrival = document.querySelector("#shipping-date");
  arrival.style.display = "block";

  let shipping_date = new Date()
  switch(event.target.id){
    case "free-shipping":
      shipping_date.setDate(shipping_date.getDate() + 5);
      client.shippingEstimate = shipping_date;
      client.shippingPrice = event.target.dataset.price;
      break;
    case "extra-shipping":
      shipping_date.setDate(shipping_date.getDate() + 2);
      client.shippingEstimate = shipping_date;
      client.shippingPrice = event.target.dataset.price;
      break;
    case "premium-shipping":
      shipping_date.setDate(shipping_date.getDate() + 1);
      client.shippingEstimate = shipping_date;
      client.shippingPrice = event.target.dataset.price;
      break;
  }
  document.getElementById("shipping-estimate").innerHTML = shipping_date.toLocaleDateString();
  client.shipping = event.target.value;
  client.shippingEstimate = shipping_date.toLocaleDateString();
  console.log(client);
}


//GIFT BOX/TITLE & MESSAGE

function giftChecked(event){
  if(event.target.checked == true){
    document.querySelector(".gift-message").style.display = "block";
  }else{
    document.querySelector(".gift-message").style.display = "none";
  };
}

document.getElementById('gift-message').onkeyup = function () {
  document.getElementById('gift-message-count').innerHTML = (100 - this.value.length);
};



