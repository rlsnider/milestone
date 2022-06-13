let userScore = 1
document.getElementById('btn2').style.display="none";//blocks display of buttons
document.getElementById('btn3').style.display="none";
document.getElementById('btn4').style.display="none";
document.getElementById('btn5').style.display="none";





function mine(){
    document.getElementById('startBtn').style.display = 'none';//blocks display of start button

    document.getElementById("dialog1").innerHTML = "Only one color, but not one size, stuck at the bottom, yet easily flies. Present in sun, but not in rain, doing no harm, and feeling no pain. What am I?";//prints first question
    document.getElementById('btn2').style.display = "";//opens display of btn 2
     }
//button 2 sends you to statement 2
function statement2(){
    let answer=document.getElementById("userAnswer").text;
        if(answer == questions.correctAnswer1){
        document.getElementById('dialog1').style.display = 'none';//turns off dialog 1
        //opens dialog 2
        document.getElementById("dialog2").textContent = "I guess I'll have to give you that one, but you wont get the next one! When you're ready to continue click the button below.";
        document.getElementById('btn2').style.display ='none'//blocks display of btn2
        document.getElementById("btn3").style.display= ""//opens display of btn3
        userScore =userScore + 1;//adds one to score counter
       console.log(userScore);
        }
        else 
        {document.getElementById("dialog3").innerHTML ="Ha! I knew you weren't smart enough to answer that question! When you are ready press the button below";   //else statement is not working.
}       //any input gives a false positive
}       //answer needs to erase before asking next question.

 function statement3(){
  
        document.getElementById('dialog2').textContent = 'Who is that with a neck and no head, two arms and no hands? What am I?';
        document.getElementById('btn3').style.display ="none";
        document.getElementById('btn4').style.display ="";

 }
 function statement4(){

    let answer= document.getElementById("userAnswer").text;
    if(answer === questions.correctAnswer2){
        document.getElementById('dialog2').innerHTML = "You really think you're smart, don't you? I know you won't get the next one! When you're ready press the button below.";
        userScore=UserScore +1;
        console.log(userScore);
        document.getElementById('btn4').style.display ="none";
        document.getElementById('btn5').style.display ="";
    }else{
        document.getElementById('dialog3').innerHTML = "He He! You won't get across the bridge like that. If you want to try again, just press the button below."
    }
 }     
 
 






/*let userScore = 0
for(let i = 0; i< questions.length; i++){
    let question = questions[i]
    let userAnswer = prompt (question.text)//add form to have a place for user to insert userAnswer
    if(userAnswer===question.correctAnswer){
        userScore = userScore +1
        question = question +1
        document.textContent("Well, I guess I'll have to give you that one.")
    }else{
        document.textContent("Ha, I knew you couldn't do this!")
    }
   if(userScore < 4 && question < 6){ 
        document.textContent("Question number:" +question + " your score is: "+userScore)//start the next question
    }else {
        if(userScore === 3 && question<6){document.textContent("You my have gotten over the bridge, but I know you won't be able to get past the next challenge!<br><em>You go across the bridge and don't look back.</em>")
    }   if(userScore < 3 && question === 5){document.textContent("Ha!! I knew you weren't smart enough to answer my questions!")}//Gif of bad guy doing victory dance



}}*/
    
