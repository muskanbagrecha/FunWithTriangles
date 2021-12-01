const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit");
var result = document.querySelector("#result");

const answers = ["180", "90", "10","2", "scalene", "obtuse-angled", "acute-angled"];

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
    if(score==formData.entries().length)
    {
        result.innerHTML = "You are a genius";
    }
    result.innerHTML = "Score is : " + score + "/7";
}

submit.addEventListener("click", check);