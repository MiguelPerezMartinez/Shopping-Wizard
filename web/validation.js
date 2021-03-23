$inputs = document.querySelectorAll(".validable");
$inputs.forEach((input) => {
  input.addEventListener('keyup',validation);
});

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
  if(target.value.length <= 4 || target.value.length >= 13 || parseInt(event.key) >= 0){
    return false;
  }else{
    return true;
  }
}

function validEmail(target){
  let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(target.value).toLowerCase());
}

function validPassword(target){
  let pattern = /^[a-zA-Z0-9_*!¡"·$%&/()=?¿+-]+$/;
  if(pattern.test(target.value) && target.value.length >= 8 && target.value.length <= 20){
    return true;
  }else{
    return false;
  }
}

function validConfirmPassword(target){
  let password = document.querySelector("#password");
  if(validPassword(target) && target.value == password.value){
    return true;
  }else{
    return false;
  }
}