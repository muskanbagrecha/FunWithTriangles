var base = document.querySelector("input[name='base']")
height = document.querySelector("input[name='height']")
submit = document.querySelector("#submit")
result = document.querySelector("#result")
// var angle1 = document.querySelector('input[name="angle1"]')

function check()
{
    const a= base.value
    const b= height.value
    if(a<=0 || b<=0)
    {
        result.innerText = "Invalid Input! 😡"
    }
    else{
        var hyp = Math.sqrt(a*a + b*b)
        result.innerText = "Area is : " + hyp.toFixed(2) + "cm²"
    }
}

submit.addEventListener("click", check)