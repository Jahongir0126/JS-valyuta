
var myForm = document.querySelector(".myForm");

var summa = document.querySelector(".summa");
var myButtonEl = document.querySelector(".myButton");
var resultUSD = document.querySelector(".spanUSD");
var resultRUB = document.querySelector(".spanRUB");
var resultEUR = document.querySelector(".spanEUR");

const usd=10930;
const rub=145;
const eur=10500;
myForm.addEventListener('submit' , (event) => {
    event.preventDefault();
    console.log(event);
    const data = {
        inputUsd:summa.value / usd,
        inputRub:summa.value/rub,
        inputEur:summa.value/eur,
    }
    var resultat=summa.value / usd;
    var resultat1=summa.value / rub;
    var resultat2=summa.value / eur;
    Math.round(resultat)
    Math.round(resultat1)
    Math.round(resultat2)
    
    console.log(data);
    // console.log(Math.round(resultat))

    resultUSD.textContent=Math.round(resultat) +"$";
    resultRUB.textContent=Math.round(resultat1)+"₽";
    resultEUR.textContent=Math.round(resultat2)+"€";
})
    
    