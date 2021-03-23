$inputs = document.querySelectorAll(".validable");
$inputs.forEach((input) => {
  input.setAttribute("autocomplete","off");
  input.addEventListener('keyup',validation);
});
$inputs.forEach((input) => {
  input.addEventListener('click',validation);
});
$inputs.forEach((input) => {
  input.addEventListener('focusout',validation);
});

$shipping_type = document.querySelectorAll(".shipping-time");
$shipping_type.forEach((type) => {
  type.setAttribute("autocomplete","off");
  type.addEventListener('click',shippingCheck);
})

$gift = document.querySelector("#gift");
$gift.setAttribute("autocomplete","off");
$gift.addEventListener('click',giftChecked);

const client = {
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

function validation(event){
  let target = event.target;
  let valid = false;
  console.log(target.value);
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
      console.log(event.target.value);
      break;
    case "add-phone":
      valid = validPhone(target);
      if (valid == true){client.phone = event.target.value;};
      break;
    case "regular-address":
      valid = true;
      if (valid == true){client.regularAddress = event.target.value;};
      console.log(client)
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
  return (target.value.length >= 4 || target.value.length <= 13);
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
  return !(target.value.length <= 4 || target.value.length >= 20 || parseInt(event.key) >= 0);
}

function validBirthday(target){
  console.log(target.value);
  let pattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  return (pattern.test(target.value));
}

function validAddress(target){
  return (target.value.length >= 4 && target.value.length <= 50);
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

  let shipping_date = new Date()
  switch(event.target.id){
    case "free-shipping":
      shipping_date.setDate(shipping_date.getDate() + 5);
      break;
    case "extra-shipping":
      shipping_date.setDate(shipping_date.getDate() + 2);
      break;
    case "premium-shipping":
      shipping_date.setDate(shipping_date.getDate() + 1);
      break;
  }
  document.getElementById("shipping-estimate").innerHTML = shipping_date.toLocaleDateString();
  client.shippingEstimate = shipping_date.toLocaleDateString();
}

function giftChecked(event){
  if(event.target.checked == true){
    document.querySelector(".gift-message").style.display = "block";
  }else{
    document.querySelector(".gift-message").style.display = "none";
  };
}