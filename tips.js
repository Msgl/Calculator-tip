let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let billAmount = document.getElementById("bill_amount").value;
    let tipPercentage = document.getElementById("tip_percentage").value;
    console.log(billAmount,tipPercentage);

    let tipAmount = document.getElementById("tip_amount").value = billAmount/tipPercentage;
})