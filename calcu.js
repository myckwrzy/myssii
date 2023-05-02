function addition(num1, num2)
{
    value1 = document.getElementById("num1").value;
    value2 = document.getElementById("num2").value;

    sum = parseInt(value1) + parseInt(value2);
    document.getElementById("result").value = sum;
}

function subtraction(num1, num2)
{
    value1 = document.getElementById("num1").value;
    value2 = document.getElementById("num2").value;

    diff = parseInt(value1) - parseInt(value2);
    document.getElementById("result").value = diff;
}

function multiplication(num1, num2)
{
    value1 = document.getElementById("num1").value;
    value2 = document.getElementById("num2").value;

    prod = parseFloat(value1) * parseFloat(value2);
    document.getElementById("result").value = prod;
}

function division(num1, num2)
{
    value1 = document.getElementById("num1").value;
    value2 = document.getElementById("num2").value;

    qou = parseFloat(value1) / parseFloat(value2);
    document.getElementById("result").value = qou;
}
function reset(num1, num2)
{
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}

let names = "Russel & Mycel"
function about()
{
    alert("Work of " + names );
}