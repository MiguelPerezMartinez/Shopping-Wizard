

$profile_list = document.querySelector("#profile-info");
$address_list = document.querySelector("#address-info");
$shipping_list = document.querySelector("#shipping-info");
$inputs = document.querySelectorAll(".validable");
$inputs.forEach((input) => {
  input.setAttribute("autocomplete","off");
  input.addEventListener('focusout',printInfo);
  input.addEventListener('clic',printInfo);
});



function printInfo(){
  var li = document.createElement("li");
  $profile_list.innerHTML = '<li>Username: ' + client.username + '</li>';
  $profile_list.innerHTML += '<li>Email: ' + client.email + '</li>';

  $address_list.innerHTML = '<li>First name: ' + client.firstName + '</li>';
  $address_list.innerHTML += '<li>Last name: ' + client.lastName + '</li>';
  $address_list.innerHTML += '<li>Birthday: ' + client.birthday + '</li>';
  $address_list.innerHTML += '<li>Address: ' + client.address1 + ' ' + client.address2 + '</li>';
  $address_list.innerHTML += '<li>Postal code: ' + client.postalCode + '</li>';
  $address_list.innerHTML += '<li>Country: ' + client.country + '</li>';
  $address_list.innerHTML += '<li>Phone: ' + client.phoneCode + ' ' + client.phone + '</li>';
  $address_list.innerHTML += '<li>Regular address: ' + client.regularAddress + '</li>';

  $shipping_list.innerHTML = '<li>Shipping type: ' + client.shipping + '</li>';
  $shipping_list.innerHTML += '<li>Last name: ' + client.lastName + '</li>';
}


