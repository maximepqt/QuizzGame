let nombreDeQuestion = 0;
   

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
   
    nombreDeQuestion = document.getElementById("userNumberQuestion").value;
    localStorage.setItem("nombreDeQuestion",nombreDeQuestion);
    isNumberCorrect(nombreDeQuestion);
   
});


function isNumberCorrect(nombreDeQuestion){
    if(nombreDeQuestion >=61){
        window.alert("Le max est 60");
        //console.log("Le max est 60");
        nombreDeQuestion = 0;
        location.reload();
        
    }else{

        let gestionQuestion = document.getElementById("Questions");
        let gestionReponse = document.getElementById("Reponses");
        let gestionDelete = document.getElementById("Delete");
        let PlayLink = document.getElementById("ClassPlayLink");

        gestionQuestion.innerHTML="";
        gestionReponse.innerHTML="";
        gestionDelete.innerHTML="";

        for (let i = 0; i < nombreDeQuestion; i++) {

             gestionQuestion = document.getElementById("Questions");
            let textQuestion = document.createElement("input");
            textQuestion.classList.add("ClassQuestions");
            textQuestion.type = "text";
            textQuestion.placeholder = "Question " + (i+1);
            gestionQuestion.appendChild(textQuestion);


             gestionReponse = document.getElementById("Reponses");
            let textReponse = document.createElement("input");
            textReponse.classList.add("ClassReponses");
            textReponse.type = "text";
            textReponse.placeholder = "Reponse " + (i+1);
            gestionReponse.appendChild(textReponse);

            
            }
           
            PlayLink.style.visibility = "visible";


            
    }
    
}

document.getElementById("ClassPlayLink").addEventListener("click", function (e) {
    e.preventDefault();
   
    let questions = [];
    let reponses = [];

    for (let x = 0; x < nombreDeQuestion; x++) {
        
        questions.push(document.getElementsByClassName("ClassQuestions")[x].value);
        reponses.push(document.getElementsByClassName("ClassReponses")[x].value);
    }

    localStorage.setItem("questions",JSON.stringify(questions));
    localStorage.setItem("reponses",JSON.stringify(reponses));
    location.href="index.html";


});


