let billInput = document.querySelector("#bill-input");
let custonInput = document.querySelector("#custon-input");
let peopleInput = document.querySelector("#people-input");

let tipAmountResult = document.querySelector("#tip-amount-result");
let totalResult = document.querySelector("#total-result");


//Valor da Conta + x% = Valor Total  --->                          100 + 5%    =   105
//Valor da conta - Valor Total = Valor da Gorjeta --->             100 - 105   =     5
//Valor da Gorjeta / Número pessoas = Gorjeta de Cada Pessoa --->    5 /   2   =     2.5
//Valor da conta / Número pessoas =  Conta de Cada Pessoa --->     100 /   2   =    50
//Conta de Cada Pessoa = Gorjeta de Cada Pessoa --->                50 +   2.5 =    52.5


function teste(x, y) {

    document.querySelector("#" + x).addEventListener("click", function () {
        if (peopleInput.value != "") {
            let percentage = y * billInput.value / 100;
            totalResult.textContent = percentage / peopleInput.value;
            tipAmountResult.textContent = billInput.value / peopleInput.value;
        }


    });
}
function custonPercent() {

    if (peopleInput.value != "") {
        tipAmountResult.textContent = billInput.value / peopleInput.value;
        let peoplePercent = custonInput.value * billInput.value / 100;
        let peolpleCalc = peoplePercent / peopleInput.value;
        totalResult.textContent = peolpleCalc;
    }
}

let buttonPercent = document.querySelectorAll('.button-percent');


for (let i = 0; i < buttonPercent.length; i++) {
    let x = buttonPercent[i].id;
    let y = buttonPercent[i].value;
    let z = buttonPercent[i];

    teste(x, y);
}

custonInput.addEventListener("input", () => {
    //const value = e.target.value;
    //selectedTip = parseFloat(value);
    custonPercent();
});

function reset() {

    billInput.value = "";
    custonInput.value = "";
    peopleInput.value = "";

    tipAmountResult.textContent = "";
    totalResult.textContent= "";

}