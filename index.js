function mine(){
    document.getElementById("dialog1").innerHTML = Date();
}


/*let userScore = 0
for(let i = 0; i< questions.length; i++){
    let question = questions[i]
    let userAnswer = prompt (question.text)//add form to have a place for user to insert userAnswer
    if(userAnswer===question.correctAnswer){
        userScore = userScore+1
        question = question +1
        document.textContent("Well, I guess I'll have to give you that one.")
    }else{
        document.textContent("Ha, I knew you couldn't do this!")
    }
   if(userScore<4 && question<6){ document.textContent("Question number:" +question " your score is: "+userScore)//start the next question
    }else {
        if(userScore === 3 && question<6){document.textContent("You my have gotten over the bridge, but I know you won't be able to get past the next challenge!<br><em>You go across the bridge and don't look back.</em>")
    }   if(userScore < 3 && question === 5){document.textContent("Ha!! I knew you weren't smart enough to answer my questions!")}//Gif of bad guy doing victory dance



}
    
}

