const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit");
var result = document.querySelector("#result");

const answers = [180, 90];

function check()
{
    const formData = new FormData(quizForm);
    var index=0;
    var score=0;
    for(let entry of formData.entries())
    {
        if(entry[1] == answers[index])
        {
            score+=1;
        }
        index+=1;
    }
    result.innerText = "Score is : " + score + "/2"
}

submit.addEventListener("click", check);