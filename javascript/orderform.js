import Navbar from '../componets/nav.js';
document.getElementById('navbar').innerHTML = Navbar()

import footer from '../componets/footer.js';
document.getElementById('footer').innerHTML = footer()

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');
const city = document.getElementById('city');
const country = document.getElementById('country');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
})

function validate() {
    const nameval = name.value.trim();
    const emailval = email.value.trim();
    const numberval = number.value.trim();
    const addressval = address.value.trim();
    const cityval = city.value.trim();
    const countryval = country.value.trim();


    // name
    if (nameval == "") {
        setErrorMsg(name, 'please fill the name field.');
    }
    else if ((nameval.length <= 2) || (nameval.length > 20)) {
        setErrorMsg(name, 'name length must be between 2 and 20.');
    }
    else if (!isNaN(nameval)) {
        setErrorMsg(name, 'only caractar are allowsd.');
    }
    else {
        setSuccessMsg(name);
    }
    // email
    if (emailval == "") {
        setErrorMsg(email, '**please fill the email field.');
    }
    else if ((emailval.length <= 6) || (emailval.length > 30)) {
        setErrorMsg(email, '**email length must be between 6 and 30.');
    }
    else if ((emailval.charAt(emailval.length - 4) != '.') && (emailval.charAt(emailval.length - 3) != '.')) {
        setErrorMsg(email, '**invalid position.');
    }
    else {
        setSuccessMsg(email);
    }
    // number
    if (numberval == "") {
        setErrorMsg(number, '**please fill the number field.');
    }
    else if ((numberval.length < 10) || (numberval.length > 10)) {
        setErrorMsg(number, '**number length only 10 digit.');
    }
    else {
        setSuccessMsg(number);
    }
    // address
    if (addressval == "") {
        setErrorMsg(address, 'please fill the name field.');
    }
    else if ((addressval.length <= 2) || (addressval.length > 100)) {
        setErrorMsg(address, 'name length must be between 2 and 20.');
    }
    else if (!isNaN(addressval)) {
        setErrorMsg(address, 'only caractar are allowsd.');
    }
    else {
        setSuccessMsg(address);
    }
    // city
    if(cityval == ""){
        setErrorMsg(city,'please fill the name field.');
    }
    else if((cityval.length<=2) || (cityval.length>20)){
        setErrorMsg(city,'name length must be between 2 and 20.');
    }
    else if(!isNaN(cityval)){
        setErrorMsg(city,'only caractar are allowsd.');
    }
    else{
        setSuccessMsg(city);
    }
    // country
    if(countryval == ""){
        setErrorMsg(country,'please fill the name field.');
    }
    else if((countryval.length<=2) || (countryval.length>20)){
        setErrorMsg(country,'name length must be between 2 and 20.');
    }
    else if(!isNaN(countryval)){
        setErrorMsg(country,'only caractar are allowsd.');
    }
    else{
        setSuccessMsg(country);
    }


    if (((nameval.length <= 2) || (nameval.length > 20)) ||
        ((emailval.length <= 6) || (emailval.length > 30)) ||
        ((numberval.length < 10) || (numberval.length > 10)) ||
        ((addressval.length <= 2) || (addressval.length > 100)) ||
        ((cityval.length <= 2) || (cityval.length > 20)) ||
        ((countryval.length <= 2) || (countryval.length > 20))) { }
    else {
        swal("THANK YOU!", "ORDER SUCCESSFUL", "success");
    }


}

function setErrorMsg(input, errormsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control error";
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}
