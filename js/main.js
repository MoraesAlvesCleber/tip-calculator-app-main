var billInput = document.querySelector("#bill-input");
var custonInput = document.querySelector("#custon-input");
var peopleInput = document.querySelector("#people-input");

var buttonCinco = document.querySelector("#button-cinco");
var buttonDez = document.querySelector("#button-dez");
var buttonQuinze = document.querySelector("#button-quinze");
var buttonVinteCinco = document.querySelector("#button-vinte-cinco");
var buttonCinqyuenta = document.querySelector("#button-cinquenta");

var tipAmountResult = document.querySelector("#tip-amount-result");
var totalResult = document.querySelector("#total-result");


//Valor da Conta + x% = Valor Total  --->                          100 + 5%    =   105
//Valor da conta - Valor Total = Valor da Gorjeta --->             100 - 105   =     5
//Valor da Gorjeta / Número pessoas = Gorjeta de Cada Pessoa --->    5 /   2   =     2.5
//Valor da conta / Número pessoas =  Conta de Cada Pessoa --->     100 /   2   =    50
//Conta de Cada Pessoa = Gorjeta de Cada Pessoa --->                50 +   2.5 =    52.5

function start() {
    printTip();
    printSplitAccoun();


}

let totalValue = custonInput.value * billInput.value / 100;
    
function printTip() {

    let totalNumber = totalValue / peopleInput.value;
    tipAmountResult.textContent = totalNumber;
}

function printSplitAccoun() {

    let total = billInput.value / peopleInput.value;
    totalResult.textContent = total;

}

buttonCinco.addEventListener("click", start);
