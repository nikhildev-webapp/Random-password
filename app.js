// ! function to generate random password

const passwordBox = document.getElementById("password");
const lenght = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$&!~";

const allChars = upperCase + lowerCase + number + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * number.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

//! Copy text function-for copy a generate random password
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    
}