// var angle1 = document.querySelector('input[name="angle1"]')
var angles = document.querySelectorAll('input');
var submit = document.querySelector("#submit")
var result = document.querySelector("#result")


function check()
{
    const a=parseInt(angles[0].value);
    const b=parseInt(angles[1].value);
    const c=parseInt(angles[2].value);
    console.log(a,b,c)
    if(a<=0 || b<=0 || c<=0 || a>=180 || b>=180 || c>=180)
    {
        result.innerText="Please enter valid angles! 😡";
    } 
    else{
        sum = a+b+c;
        console.log(sum);
        if(sum==180)
        {
            result.innerText="The given angles form a triangle! 🎉";
        }
        else{
            result.innerText="The given angles do not form a triangle! 😟";
        }
    }
}

submit.addEventListener("click",check);