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

    // console.log(client);
    /* return client; */
}

document.getElementById('profileBttn').addEventListener('click', profileAdd);
document.getElementById('addressBttn').addEventListener('click', profileAdd);
document.getElementById('shippingBttn').addEventListener('click', profileAdd);