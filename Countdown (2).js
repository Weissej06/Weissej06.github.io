
function Count() // this is the function which of course is the start of everything
{
    var currTime = 10;
    
    // currtime is the current time
    for (var i = 1; i <= 11; i++) 
        {
             if (i < 5)
            setTimeout(function ()
            { // sound from quicksounds.com under the name "Rocket Launching Countdown" I DO NOT OWN THIS
                
               
                document.getElementById("CountdownDisplay").innerHTML = " time: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);

            

            else if  (i != 11)
            setTimeout(function ()
            {
                document.getElementById("CountdownDisplay").innerHTML = "HALF WAY TILL LAUNCH: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
          
// if and else if makes the code know that IF or "else" the equation happens the following fuction will take place. in this case current time and wording changes
// the alert tells the employee the launch was successful 
              else if  (i != 0)
            setTimeout(function ()
            { 
                document.getElementById("CountdownDisplay").innerHTML = "BLAST OFF ! : " + currTime;
                currTime = currTime - 1;
                alert("Great job! Launch successful")
            }, 1000 * i);
         
           


        }  
    } // The code shows that in the event the greenlight (start button) is disabled the the stop(redlight) shouldnt be disabled and is reversed  on the "stop()" function
        function start() {
            document.getElementById("greenlight").disabled = true;
            document.getElementById("redlght").disabled = false;
        }
            
        function stop() {
           document.getElementById("greenlight").disabled = false;
          document.getElementById("redlight").disabled = true;
        
        }
        
        // The code below shows that TestLaunch will occur onclick and it will play the tetslaunch.mp3
        function playTestLaunch() {
        mySound = new sound("testlaunch.mp3")
        mySound.play();
        
        }

         b 
        //the code below acts as an set of instructions for ALL sounds used in the code. It tells the website that the audio is an audio file, that it should be sourced by its filename, and that onclick it should be played as such!
        function sound(src) {  
        this.sound = document.createElement("audio");
        
        this.sound.src = src;
        
        this.play = function() {
            this.sound.play();
        }
        
        
        }






