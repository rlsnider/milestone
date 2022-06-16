//set arrays for functions to read

let answers=["SHADOW", "NOTHING", 'YOUR NAME'];
let userAnswer=[];
//set all buttons invisibile except for start button.
document.getElementById("btn2").style.display ="none";
document.getElementById('btn3').style.display ="none";
document.getElementById('btn4').style.display ="none";
document.getElementById('btn5').style.display ="none";
document.getElementById('btn6').style.display ="none";
document.getElementById('btn7').style.display ="none";
const addUserAnswer=(ev)=>{
    ev.preventDefault();//to stop form from submitting
  
}
//hides display dialog so new dialog can go into paragraph.
function hide(){
    document.getElementById('dialog1').innerHTML = "";
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
   
        hide();
    let answer = document.getElementById("users").value

    let correctAnswer=answers[0]
    
    if(answer===correctAnswer){
        
        document.getElementById('dialog1').innerHTML ="I guess I'll have to give you that one, but you won't be able to answer the next one!<br>Press the continue button when you're ready.";
        document.getElementById('btn2').style.display ="none";
        document.getElementById("btn3").style.display=" ";
    }else{
        hide();
        document.getElementById("dialog1").innerHTML ="Ha! I knew you couldn't do it. You get another chance though. Click the continue button when you are ready."
    }
}
//waits for onclick from button, then runs statement 3.
//turn off display of button 3, open btn 4. 
//turn off dialog, get ready to add text.
function statement3(){
    document.getElementById("btn3").style.display="none";
    document.getElementById("btn4").style.display= "";
    hide();
    document.getElementById("dialog1").innerHTML ="Poor people have it. <br> Rich people need it.<br> If you eat it you die.<br> What is it?"
}
//waits for onclick from button 4, then runs statement 4.
//turn off and on buttons, and dialog, checks logic for question 2.
function statement4(){
    document.getElementById("btn4").style.display="none";
    document.getElementById("btn5").style.display= "";
    hide();
    let answer = document.getElementById("users").value
    
    let correctAnswer=answers[1]
    console.log(answer)
    if(answer===correctAnswer){
    console.log(answer===correctAnswer)
        hide();
        document.getElementById('dialog1').innerHTML ="Oh you really think you're smart, don't you?<br>You haven't won yet! Press the continue button to get your next question."
}else{
    hide();
    document.getElementById('dialog1').innerHTML = "I really thought you'd be more of a challenge. You can press the continue button to try again."
    }
}
//wait for onclick from button 5, then run statement 5.
//trun off and on buttons and dialog, gives 3rd question.
function statement5(){
    document.getElementById("btn5").style.display="none";
    document.getElementById("btn6").style.display= "";
    hide();
    document.getElementById("dialog1").innerHTML = "What belongs to you, but other people use it more than you?"
    
}
//wait for onclike from button 6, then run statement 6. turn off and on buttons and dialog.checks logic
function statement6(){
    document.getElementById("btn6").style.display="none";
    document.getElementById("btn7").style.display= "";
    hide();
    let answer = document.getElementById("users").value
    console.log(answer)
    let correctAnswer=answers[2]
    console.log(correctAnswer)
    if(answer===correctAnswer){
        console.log("hit")
        hide();
        document.getElementById('dialog1').innerHTML="I cant believe you got 3 right! You must have cheated!<br> But I keep my word, you may pass. But know this; the next challenge you face on the other side of the bridge is not so easy."
}
}
