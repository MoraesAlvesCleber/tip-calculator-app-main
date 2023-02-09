let billInput = document.querySelector("#bill-input");
let custonInput = document.querySelector("#custon-input");
let peopleInput = document.querySelector("#people-input");


let buttonCinco = document.querySelector("#button-cinco");
let buttonDez = document.querySelector("#button-dez");
let buttonQuinze = document.querySelector("#button-quinze");
let buttonVinteCinco = document.querySelector("#button-vinte-cinco");
let buttonCinqyuenta = document.querySelector("#button-cinquenta");

let tipAmountResult = document.querySelector("#tip-amount-result");
let totalResult = document.querySelector("#total-result");


//Valor da Conta + x% = Valor Total  --->                          100 + 5%    =   105
//Valor da conta - Valor Total = Valor da Gorjeta --->             100 - 105   =     5
//Valor da Gorjeta / Número pessoas = Gorjeta de Cada Pessoa --->    5 /   2   =     2.5
//Valor da conta / Número pessoas =  Conta de Cada Pessoa --->     100 /   2   =    50
//Conta de Cada Pessoa = Gorjeta de Cada Pessoa --->                50 +   2.5 =    52.5

//function start()// {
// printTip();
// printSplitAccoun();


//}

//function somapercent(id, texto){
//   document.getElementById(id).addEventListener("click", function(){
//   document.getElementById("#tip-amount-result").textContent = texto});    
//}





function teste(x, y) {
    
    document.querySelector(x).addEventListener("click", function () {
        totalResult.textContent = y * billInput / 100;
    });
}
let buttonPercent = document.querySelectorAll('.button-percent');
 
for (let i = 0; i < buttonPercent.length; i++) {
    let x = buttonPercent[i].id;
    let y = buttonPercent[i].value;
    console.log(x, y);
    teste(x, y);
}


//function printTip() {

    //let totalValue = custonInput.value * billInput.value / 100;

    //let totalNumber = totalValue / peopleInput.value;
    //tipAmountResult.textContent = totalNumber;
//}

//function printSplitAccoun() {

    //let total = billInput.value / peopleInput.value;
    //totalResult.textContent = total;

//}

//buttonCinco.addEventListener("click", start);
