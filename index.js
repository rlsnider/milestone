//set arrays for functions to read

let answers=["SHADOW"];
let userAnswer=[];
//set all buttons invisibile except for start button.
document.getElementById("btn2").style.display ="none";
document.getElementById('btn3').style.display ="none";

const addUserAnswer=(ev)=>{
    ev.preventDefault();//to stop form from submitting
  
}





function statement1(){
    
    //hide starting button show button 2
    document.getElementById('startBtn').style.display ="none";
    document.getElementById('btn2').style.display = "";
    //hide first dialog and show first question
    document.getElementById('startup').style.display="none";
    document.getElementById('dialog1').innerHTML = "Only one color, but not one size,<br> stuck at the bottom, yet easily flies.<br>Present in sun, but not in rain,<br> doing no harm and feeling no pain.<br> What am I?";
}
//waits for onclick from button, then runs statement 2
//turn off display of btn2, open up btn3, turn off dialog1, 
//creates new object from "userAnswer" add(push)answer into array, set Answer to string with JSON. 
//compare userinput to 0 in answers array, if match, turn on dialog2, turn off button 2, open up button 3.
function statement2(){
    document.getElementById("btn2").style.display ="none";
    document.getElementById('btn3').style.display="";
   
    document.getElementById("dialog1").style.display= "none";
    let answer ={users: document.getElementById("users").value,
    }
    userAnswer.push(answer);

    localStorage.setItem("ansr", JSON.stringify(userAnswer));
    }
    
    let userGuess=userAnswer[0]
    let correctAnswer=answers[0]
    if(userGuess===correctAnswer){
        document.getElementById('dialog1').innerHTML ="I guess I'll have to give you that one, but you won't be able to answer the next one!";
        document.getElementById('btn2').style.display ="none";
        document.getElementById("btn3").style.display=" ";
    }
