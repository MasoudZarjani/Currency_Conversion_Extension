function myfunction() {
    var amount = document.getElementById("Amount").value;
    var cur1 = document.getElementById("Currency1");
    var currency1 = cur1.options[cur1.selectedIndex].value;
    var cur2 = document.getElementById("Currency2");
    var currency2 = cur2.options[cur2.selectedIndex].value;
    var result = document.getElementById("result");
    if (currency1 === 1) {
        if (currency2 === 2) {
            var sum = amount * 4899;
            result.innerHTML = sum.toString()+" Tooman";
        }
        else {
            result.innerHTML = amount + " Tooman";
        }
    }
    else {
        if (currency2 === 1) {
            var sum = amount / 4899;
            result.innerHTML = sum.toString()+" Tooman";
        }
        else {
            result.innerHTML = amount + " Tooman";
        }
    }
}