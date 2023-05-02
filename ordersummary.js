
function increment()
{
    let value = document.getElementById('number').value;
    value++;
    document.getElementById('number').value = value;
    document.getElementById('numberDisplay').textContent = value;
    updatecost()
}
function decrement()
{
    let value = document.getElementById('number').value;
    value--;
    document.getElementById('number').value = value;
    document.getElementById('numberDisplay').textContent = value;
    updatecost()
}

function updatecost() {


    let price = 15.95;
    let number = parseInt(document.getElementById('number').value);
    let totalCost = number * price;
    document.getElementById("cost").innerHTML = "$" + totalCost.toFixed(2);

    let shipping = parseInt(document.getElementById('shipping').value);
    let beforetotal = totalCost + shipping;
    document.getElementById("sub-total").innerHTML = "$" + beforetotal.toFixed(2);

    totalTax = beforetotal * 0.1;
    document.getElementById("tax").innerHTML = "$" + totalTax.toFixed(2);

    lastTotal = totalTax + beforetotal;
    document.getElementById("order-total").innerHTML = "$" + lastTotal.toFixed(2);

    let shipping1 = parseFloat(document.getElementById('shipping').value);
    document.getElementById("shipcost").innerHTML = "$" + shipping1.toFixed(2);


}   