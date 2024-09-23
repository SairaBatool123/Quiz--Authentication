var questions = [
    {
        question: `What will be the output of the following JavaScript code? </br></br> <div class="p-4" style="border: 2px solid rgb(218, 207, 207);">var txt1 = "codes_"; <br>
        var txt2 = "cracker"; <br>
        document.getElementById("demo").innerHTML = txt1 + txt2;</div>`,
    
            opt1: "error",
            opt2: "codes_cracker",
            opt3: "codescracker",
            opt4: "undefined",
            ans: "codes_cracker"
    },
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans: "{}"
    },
    {
        question: "JavaScript code is written inside file having extension?",
        opt1: ".jvs",
        opt2: ".js",
        opt3: ".jsc",
        opt4: ".javascript",
        ans: ".js"
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    }
];
var index = 0;
var result = 0;
var timerId;
function renderQues() {
    clearInterval(timerId);
    if (index > 0) {
        var options = document.getElementsByName("option");
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked && options[i].value === questions[index - 1].ans) {
                result++;
            }

        }
    }

    if (!questions[index]) {
        calculateResult();
        return;
    }

    var container = document.getElementById("container");
    container.innerHTML = `
    <div class="card col-6">
        <div class="fs-2 fw-bold card-header text-center">JavaScript Quiz 🙌
            <div class="fs-2 time" id="timer"></div>
        </div>
        <div class="card-body">
            <p class="m-10">${index + 1}. ${questions[index].question}</p>
            <div>
                <label><input type="radio" name="option" value="${questions[index].opt1}"> ${questions[index].opt1}</label>
            </div>
            <div>
                <label><input type="radio" name="option" value="${questions[index].opt2}"> ${questions[index].opt2}</label>
            </div>
            <div>
                <label><input type="radio" name="option" value="${questions[index].opt3}"> ${questions[index].opt3}</label>
            </div>
            <div>
                <label><input type="radio" name="option" value="${questions[index].opt4}"> ${questions[index].opt4}</label>
            </div>
            <div class="text-center mt-3">
                <button class="btn w-100 btn-dark" onClick="nextQuestion()">Next</button>
            </div>
        </div>
    </div>`;
    startTimer();
}
function startTimer() {
    var timeLeft = 30;
    var timerElement = document.getElementById("timer");
    timerId = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            nextQuestion();
        } else {
            timerElement.textContent = "Time Remaining : " + timeLeft + "s";
        }
        timeLeft--;
    }, 1000);
}
function nextQuestion() {
    var options = document.getElementsByName("option");
    var isOptionSelected = false;
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            isOptionSelected = true;
            break;
        }
    }
    if (index < questions.length) {
        index++;
        renderQues();
    }
}
function calculateResult() {
    var percentage = (result / questions.length) * 100;
    document.getElementById("container").innerHTML = `
    <div class="card col-6">
        <div class="fs-2 fw-bold card-header text-center">
            Quiz Result ❓
            <div class="fs-2 time" id="timer">Time's Up</div>
        </div>
        <div class="card-body">
            <h5 class="text-center">Your Total Score : ${result} out of ${questions.length}<br>
            Your Percantage : ${percentage.toFixed(2)}%</h5>
            
        </div>
    </div>`;
}
renderQues();