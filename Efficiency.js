/*Here I have my loop functions, countdown display, and comments.;

Im using the javascript text format and will be creating variables 
for the current time, starting number, blast off, the function to lower the time, and to update the current time.
*/

alert ("Are you ready to Launch? Please ensure to open the sites console log before clicking the button.");
var currentTime=10;
document.getElementById("DisplayCountDown").innerHTML = currentTime;

function RunCountDown() {
while(currentTime >0)       //using the while loop will continue to run the function statements until the condition
                            //of currentTime is no longer greater than 0.
{console.log(currentTime);  // Here i've been struggling for a long time but the closes I can get to
                            // display the current time is to have the code log it into the webpage's log itself.

   currentTime = currentTime -1; 
   //After logging the previous current time, I update the curent time by decreminting it's value
       
    if (currentTime !=0)    
    //Than I have the code check the currentTime to compare its value to zero.
    {document.getElementById("DisplayCountDown").innerHTML = currentTime;}
    // if they dont match display it's current value
    else
    {document.getElementById("DisplayBlastOff").innerHTML = "Blast Off!";}
    //if they do match display the result or string "Blast off"

}

}
/*
reference for my loop function:

var countDown = 10;
document.getElementById("DisplayCountDown").innerHTML = countDown;
function RunCountDown()
{
    countDown --;
if(countDown != 0 )
    {document.getElementById("DisplayCountDown").innerHTML = countDown;}
        else
    {document.getElementById("DisplayBlastOff").innerHTML = "Blast Off!";}
}
*/


