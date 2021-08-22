let nombreDeQuestion = 0;
   

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
   
    nombreDeQuestion = document.getElementById("userNumberQuestion").value;
    isNumberCorrect(nombreDeQuestion);
   
});

function isNumberCorrect(nombreDeQuestion){
    if(nombreDeQuestion >=61){
        window.alert("Le max est 60");
        //console.log("Le max est 60");
        nombreDeQuestion = 0;
        location.reload();
        
    }
    
}



for (let i = 0; i < nombreDeQuestion; i++) {
    // let block = document.createElement("div");
    // block.classList.add("question");

    // let questionBlock = document.createElement("div");
    // questionBlock.classList.add("questionBlock");
    // block.appendChild(questionBlock);

    // let questionButton = document.createElement("button");
    // questionButton.textContent = "Question " + questions[i][0];
    // questionButton.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     showQuestion(i);
    // });
    // questionBlock.appendChild(questionButton);

    let textQuestion = document.createElement("input");
    textQuestion.type = "text";
    appendChild(gestionQuestionReponse);

    document.body.appendChild(block);
}

