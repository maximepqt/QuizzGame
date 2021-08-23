let nombreDeQuestion = parseInt(localStorage.getItem("nombreDeQuestion"));
let questions = JSON.parse(localStorage.getItem("questions"));
let reponses = JSON.parse(localStorage.getItem("reponses"));
var retrievedDataNumber = localStorage.getItem("arNumber");
var arNumber = JSON.parse(retrievedDataNumber);
var retrievedDataColor = localStorage.getItem("arColor");
var arColor = JSON.parse(retrievedDataColor);

console.log(arNumber,arColor);
//let questions = JSON.parse(localStorage.getItem("questions"));

for(let i = 0;i<nombreDeQuestion;i++){

    let questionResponsesBlock = document.createElement("div");
    questionResponsesBlock.classList.add("questionResponsesBlock");
    questionResponsesBlock.id="blockNumber" +(i+1);

    let questionsBlock = document.createElement("div");
    questionsBlock.classList.add("questionsButton", "buttons");
    questionsBlock.innerHTML = "Question";

    let responsesBlock = document.createElement("div");
    responsesBlock.classList.add("responsesButton", "buttons");
    responsesBlock.innerHTML = "Réponse";

    let doneBlock = document.createElement("div");
    doneBlock.classList.add("doneButton", "buttons");
    doneBlock.innerHTML = "OK";

    let overlayBlock = document.createElement("div");
    overlayBlock.classList.add("overlay");
    overlayBlock.innerHTML = "Question " + (i + 1);

    questionResponsesBlock.appendChild(questionsBlock);
    questionResponsesBlock.appendChild(responsesBlock);
    questionResponsesBlock.appendChild(doneBlock);
    questionResponsesBlock.appendChild(overlayBlock);


    document.getElementById("table").appendChild(questionResponsesBlock);
    document.getElementsByClassName("overlay")[i].addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementsByClassName("overlay")[i].style.visibility = "hidden";
    });

    document.getElementsByClassName("questionsButton")[i].addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("display").innerHTML = questions[i];
    });

    document.getElementsByClassName("responsesButton")[i].addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("display").innerHTML = reponses[i];
    });

    document.getElementsByClassName("doneButton")[i].addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementsByClassName("questionResponsesBlock")[i].style.opacity = "0.2";
        document.getElementById("display").innerHTML = "";
    });

    
    
    
    
    
    


}

for(let i = 0;i<nombreDeQuestion;i++){

monBlock = "blockNumber" +arNumber[i];
console.log(monBlock);
let monBlockBg = document.getElementById(monBlock);
console.log(monBlockBg);
monBlockBg.style.backgroundColor= arColor[i];
}