let passwordField = document.querySelector(".input_password_field");
let buttonCopy =document.querySelector(".copy_btn");
let range = document.querySelector(".input_range");
let passwordLenght = document.querySelector(".input_password_lenght");
passwordLenght.value = 20;
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let generatePasswordBtn = document.querySelector(".input_generate_password");
let lowercaseSymbol = "abcdefghijklmnopqrstuvwxyz";
let uppercaseSymbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberSymbol = "0123456789";
let specialSymbols = "!@#$%^&*()";

range.addEventListener("input",function()
{
    passwordLenght.value = range.value;
})
passwordLenght.addEventListener("input",function()
{
    range.value = passwordLenght.value;
})


generatePasswordBtn.addEventListener("click",()=>
{
 
    let password ='';
    let charLetters = "";

    if(lowercase.checked)
    {
        charLetters += lowercaseSymbol;
        console.log(charLetters);
    }
    if(uppercase.checked)
    {
        charLetters += uppercaseSymbol;
        console.log(charLetters);
    }
    if(numbers.checked)
    {
        charLetters += numberSymbol;
        console.log(charLetters);
    }
    if(symbols.checked)
    {
        charLetters += specialSymbols;
        console.log(charLetters);
    }
    

    buttonCopy.addEventListener("click",function()
    {
        navigator.clipboard.writeText(password);
        alert("Successfully copied!");
    })

    for(let i = 0; i < passwordLenght.value; i++)
    {
        password += charLetters[Math.floor(Math.random() * charLetters.length)];
    }
    console. log(password);
    passwordField.innerHTML = password;
    password = passwordField.innerHTML;
});