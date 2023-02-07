var billInput = document.querySelector("#bill-input").value;
var custonInput = document.querySelector("#custon-input").value;
var peopleInput = document.querySelector("#people-input").value;

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

var accountValue = billInput;
var percentageValue = buttonCinco;

function fivePercent() {
    let five = 5;
    return five;
}


