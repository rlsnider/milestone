
//set counter to strt
let userScore =1;
//set all buttons invisibile except for start button.
document.getElementById("btn2").style.display ="none";
document.getElementById('btn3').style.display ="none";
document.getElementById('btn4').style.display ="none";


function statement1(){
    //hide starting button show button 2
    document.getElementById('statrBtn').style.display ="none";
    document.getElementById('btn2').style.display =" ";
    //hide first dialog and show first question
    document.getElementById('startup').style.display="none";
    document.getElementById('statrup').innerHTML = "Only one color, but not one size, stuck at the bottom, yet easily flies. Present in sun, but not in rain, doing no harm and feeling no pain. What am I?"
}
//waits for onclick from button, then runs statement 2
function statement2()