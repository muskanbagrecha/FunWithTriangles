sides = document.querySelectorAll("input")
submit = document.querySelector("#submit")
result = document.querySelector("#result")

function check()
{
    const a= sides[0].value
    const b= sides[1].value
    if(a<=0 || b<=0)
    {
        result.innerText = "Invalid Input! 😡"
    }
    else{
        var hyp = Math.sqrt(a*a + b*b)
        result.innerText = "Hypotenuse is : " + hyp.toFixed(2) + "cm"
    }
}

submit.addEventListener("click", check)