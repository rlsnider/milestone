//set arrays for functions to read

let answers=["SHADOW", "NOTHING", 'YOUR NAME', 'THE DARK','BOOKKEEPER' ];
let userAnswer=[];
let userScore = 0;


//set all buttons invisibile except for start button.
document.getElementById('continue1').style.display ='';
document.getElementById('submit1').style.display ='none';
document.getElementById('continue2').style.display ="none";
document.getElementById('submit2').style.display ="none";
document.getElementById('continue3').style.display ="none";
document.getElementById('submit3').style.display ="none";
document.getElementById('continue4').style.display ="none";
document.getElementById('submit4').style.display ="none";
document.getElementById('continue5').style.display ="none";
document.getElementById('submit5').style.display ="none";
document.getElementById('continue6').style.display ="none";

document.getElementById('question1').style.display='none';
document.getElementById('question2').style.display='none';
document.getElementById('question3').style.display='none';
document.getElementById('question4').style.display='none';


//Set UserScore:
//add one to score if answer is correct, 0 if answer is wrong;
//Store score in var; Displays score on page.
function yourScore(){
  document.getElementById('score').innerHTML =`Your score is ${userScore}`  
}
//hides display dialog so new dialog can go into paragraph.
function hide(){
    document.getElementById('dialog1').innerHTML = "";
}

/*function final(){
        hide();
    if(userScore>2){
        document.getElementById('dialog1').innerHTML= "I know you cheated, I don't know how, but I'll figure it out. As for now you may pass if you dare. The challenges on the other side of the bridge are much more difficult."; 
    }else{
        console.log('test final4')
        hide();
        console.log('test final5')
        document.getElementById('dialog1').innerHTML = "You must feel pretty dumb right now, huh?<br> Well go lick you wounds somewhere else,<br> you're not crossing my bridge."
    }
}*/
function statement1(){
    
    //hide continue 1, open submit 1;
    document.getElementById('continue1').style.display ='none';
    document.getElementById('submit1').style.display = "";
    //hide first dialog and show first question
    document.getElementById('startup').style.display="none";
    document.getElementById('dialog1').innerHTML = "Only one color, but not one size,<br> stuck at the bottom, yet easily flies.<br>Present in sun, but not in rain,<br> doing no harm and feeling no pain.<br> What am I?";
    document.getElementById('question1').style.display ="";
}
//waits for onclick from button, then runs statement 2
//turn off display of continue1, open up submit2, turn off dialog1, 
//creates new object from "userAnswer" add(push)answer into array, set Answer to string with JSON. 
//compare userinput to 0 in answers array, if match, turn on dialog2, turn off button 2, open up button 3.
function statement2(){
    document.getElementById('continue1').style.display ='none';
    document.getElementById('submit1').style.display='';
   
        hide();
    
    let answer = document.getElementById('question1').value

    let correctAnswer=answers[0]
    
    if(answer===correctAnswer){
        userScore++;
        document.getElementById('question1').style.display='none';
        document.getElementById('dialog1').innerHTML ="I guess I'll have to give you that one, but you won't<br> be able to answer the next one!<br>Press the continue button when you're ready.";
        document.getElementById('submit1').style.display ="none";
        document.getElementById('continue2').style.display='';
        yourScore();
    }else{       
        hide();
        document.getElementById('question1').style.display ="none";
        document.getElementById('submit1').style.display ='none';
        document.getElementById('continue2').style.display="";
        document.getElementById("dialog1").innerHTML ="Ha! I knew you couldn't do it. You get another chance though. Click continue when you are ready to resume."
        yourScore();  
    }
}                          
//waits for onclick from button, then runs statement 3.
//turn off display of continue2 and opens submit2.
//turn off dialog, get ready to add text.
function statement3(){
    document.getElementById('continue2').style.display='none';
    document.getElementById('submit2').style.display= '';
    hide();
    document.getElementById("dialog1").innerHTML ="Poor people have it. <br> Rich people need it.<br> If you eat it you die.<br> What is it?"
    document.getElementById('question2').style.display = '';
}
//waits for onclick from button 4, then runs statement 4.
//turn off and on buttons, and dialog, checks logic for question 2.
function statement4(){
    document.getElementById('submit2').style.display="none";
    document.getElementById('continue3').style.display= "";
    hide();
    let answer = document.getElementById('question2').value
    let correctAnswer=answers[1]  
    if(answer===correctAnswer){
        userScore++;
        yourScore();
        hide();
        document.getElementById('question2').style.display='none';
        document.getElementById('dialog1').innerHTML ="Oh you really think you're smart, don't you?<br>You haven't won yet!<br>Press continue to get your third question."
        
}else{

    hide();
    document.getElementById('question2').style.display="none";
    document.getElementById('dialog1').innerHTML = "I really thought you'd be more of a challenge.<br> You can press continue to get your third question."
    
    yourScore();
    }
}
//wait for onclick from button 5, then run statement 5.
//trun off and on buttons and dialog, gives 3rd question.
function statement5(){
    document.getElementById('continue3').style.display="none";
    document.getElementById('submit3').style.display="";
    
    hide();
    document.getElementById('question3').style.display="";
    document.getElementById("dialog1").innerHTML = "What belongs to you, but other people <br>use it more than you?"
    
}
//wait for onclike from button 6, then run statement 6. turn off and on buttons and dialog.checks logic
function statement6(){
    document.getElementById("submit3").style.display="none";
    document.getElementById("continue4").style.display= "";
    let answer = document.getElementById("question3").value
    let correctAnswer=answers[2]
    if(answer===correctAnswer){
    userScore++;
    yourScore();
        hide();
        document.getElementById('question3').style.display="none";
        document.getElementById('dialog1').innerHTML="You got that question right?  You must have cheated!<br> Press continue for your fourth question."
    }else{
        hide();
        document.getElementById('question3').style.display= "none";
        document.getElementById('dialog1').innerHTML="Pathetic! I thought you were smart!<br> Press continue to get your fourth question."
        yourScore();
    }
}
//wait for click then ask fourth question. button 7 activates this function.
/*function statement7(){
    document.getElementById("btn7").style.display="none";
    document.getElementById("btn8").style.display= "";
    hide();
    document.getElementById('dialog1').innerHTML ="It can't be seen,<br> can't be felt,<br> can't be heard,<br> and can't be smelt.<br> It lies behind stars and under hills,<br> And empty holes it fills. It comes first<br> and follows after, Ends life, and kills laughter.<br> What is it?" 
}
//Wait for answer, onclick and run statement 8;
function statement8(){
    document.getElementById("btn8").style.display="none"
    document.getElementById('btn9').style.display="";
    let answer=document.getElementById('users').value;
    let correctAnswer=answers[3]
    if(answer===correctAnswer){
        userScore++;
        yourScore();
        hide();
        document.getElementById('dialog1').innerHTML="What are you doing? How are you getting<br> these answers correct? One last question.<br> Let's finish this.<br> Press continue to get your last question."    
    }else{
        hide();
        document.getElementById('dialog1').innerHTML= "You're really no match for me are you? <br>Well go ahead and press continue<br> to get your last question."
        yourScore();
    }
}
    
    //wait for click then ask last question. button 9 activates this function.
function statement9(){
    document.getElementById("btn9").style.display="none";
    document.getElementById("btn10").style.display= "";
    hide();
    document.getElementById('dialog1').innerHTML = "What is the only word in the English Language<br> that has 3 sets of double letters<br> back to back?"
}
//Wait for answer, onclick and run statement 10;
function statement10(){
    document.getElementById("btn10").style.display="none";
    document.getElementById("btn11").style.display= "";
    hide();
    let answer = document.getElementById("users").value
    let correctAnswer=answers[4]
    if(answer==correctAnswer){
    userScore++;
    yourScore();
        hide();
        document.getElementById('dialog1').innerHTML="You weren't supposed to get the last question right! Press continue."
      
    }else{

        hide();
        document.getElementById('dialog1').innerHTML="Well that last question was pretty hard,<br> for a 3 year old. Press continue." 
         yourScore();
    }
}
//when button 11 is clicked, run function statement11,
function statement11(){
    document.getElementById("btn11").style.display="none";
    final();
}*/