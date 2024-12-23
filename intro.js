const passwordBox = document.getElementById("password");
const generate = document.getElementById("generatebutton");
const copypass = document.getElementById("copyPass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let passwords = "";
    console.log(passwords);

    while (length > passwords.length) {
        passwords += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = passwords;    
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}

copypass.addEventListener('click', copypassword);

generate.addEventListener('click', createPassword);





