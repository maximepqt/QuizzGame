let nombreDeQuestion = 0;
   

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
   
    nombreDeQuestion = parseInt(document.getElementById("userNumberQuestion").value);
    nombreDeJoueur = document.getElementById("userNumberPlayer").value;
    localStorage.setItem("nombreDeQuestion",nombreDeQuestion);
    isNumberCorrect(nombreDeQuestion);
   
});


function isNumberCorrect(nombreDeQuestion){
    if(nombreDeQuestion >=61 ||nombreDeJoueur == 0 ){
        window.alert("Le max de questions est 60 et le min de joueur est 1");
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
        let myNumberInc = nombreDeQuestion 
        console.log(myNumberInc);
        for (let i = 0; i < nombreDeQuestion; i++) {

             gestionQuestion = document.getElementById("Questions");
            let textQuestion = document.createElement("input");
            textQuestion.classList.add("ClassQuestions");
            textQuestion.type = "text";
            textQuestion.placeholder = "Question " + (i+1);
            textQuestion.id = "Question" + (i+1);
            gestionQuestion.appendChild(textQuestion);


             gestionReponse = document.getElementById("Reponses");
            let textReponse = document.createElement("input");
            textReponse.classList.add("ClassReponses");
            textReponse.type = "text";
            textReponse.placeholder = "Reponse " + (i+1);
            textReponse.id = "Reponse" + (i+1);
            gestionReponse.appendChild(textReponse);

            
            }
            
            //Gestion de notre color randomizer
            for (var i = 1, ar = []; i < nombreDeQuestion+1; i++) {
                ar[i] = i;
              }
            
              // randomize the array
              ar.sort(function () {
                  return Math.random() - 0.5;
              });

              let nombreDeCouleur =nombreDeQuestion/=nombreDeJoueur;
              let inc =0;
              let questionName,reponseName;
              let chgtBG;
              for (let i = 0;i<nombreDeJoueur;i++){
                  for(let y = 0;y<nombreDeCouleur;y++){
                      
                      
                      console.log(i,y,inc);

                      if(inc<10){
                          //Question en theme Rouge
                          console.log("tab" + ar[inc]);
                          questionName = "Question" + ar[inc];
                          console.log(questionName);
                          chgtBG = document.getElementById(questionName);
                          chgtBG.style.backgroundColor ="red";
                        //reponse en theme Rouge
                        reponseName = "Reponse" + ar[inc];
                        chgtBG = document.getElementById(reponseName);
                        chgtBG.style.backgroundColor ="red";
                        

                        
                      }

                      if(inc >=10 && inc<20){
                        //Question en theme Rouge
                        console.log("tab" + ar[inc]);
                        questionName = "Question" + ar[inc];
                        console.log(questionName);
                        chgtBG = document.getElementById(questionName);
                        chgtBG.style.backgroundColor ="blue";
                      //reponse en theme Rouge
                      reponseName = "Reponse" + ar[inc];
                      chgtBG = document.getElementById(reponseName);
                      chgtBG.style.backgroundColor ="blue";
                      
                      }

                      if(inc >=20 && inc<30){
                        //Question en theme Rouge
                        console.log("tab" + ar[inc]);
                        questionName = "Question" + ar[inc];
                        console.log(questionName);
                        chgtBG = document.getElementById(questionName);
                        chgtBG.style.backgroundColor ="green";
                      //reponse en theme Rouge
                      reponseName = "Reponse" + ar[inc];
                      chgtBG = document.getElementById(reponseName);
                      chgtBG.style.backgroundColor ="green";
                      
                      }

                      if(inc >=30 && inc<40){
                        //Question en theme Rouge
                        console.log("tab" + ar[inc]);
                        questionName = "Question" + ar[inc];
                        console.log(questionName);
                        chgtBG = document.getElementById(questionName);
                        chgtBG.style.backgroundColor ="yellow";
                      //reponse en theme Rouge
                      reponseName = "Reponse" + ar[inc];
                      chgtBG = document.getElementById(reponseName);
                      chgtBG.style.backgroundColor ="yellow";
                      
                      }

                      if(inc >=40 && inc<50){
                        //Question en theme Rouge
                        console.log("tab" + ar[inc]);
                        questionName = "Question" + ar[inc];
                        console.log(questionName);
                        chgtBG = document.getElementById(questionName);
                        chgtBG.style.backgroundColor ="purple";
                      //reponse en theme Rouge
                      reponseName = "Reponse" + ar[inc];
                      chgtBG = document.getElementById(reponseName);
                      chgtBG.style.backgroundColor ="purple";
                      
                      }

                      if(inc >=50 && inc<60){
                        //Question en theme Rouge
                        console.log("tab" + ar[inc]);
                        questionName = "Question" + ar[inc];
                        console.log(questionName);
                        chgtBG = document.getElementById(questionName);
                        chgtBG.style.backgroundColor ="orange";
                      //reponse en theme Rouge
                      reponseName = "Reponse" + ar[inc];
                      chgtBG = document.getElementById(reponseName);
                      chgtBG.style.backgroundColor ="orange";
                      
                      }
                      inc +=1;
                  }
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


