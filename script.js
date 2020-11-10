//define vars to hold time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//define vars to hold display value
let displayMilliseconds = 0;
let displayMinutes = 0;
let displaySeconds = 0;
let displayHours = 0;

//define var to hold setinterval() function
let interval = null;

//define var to hold stopwatch status
let status = "stopped";

//stopwatch function(logic to determine when to increment next value etc.)
function stopWatch(){

  milliseconds++;

  //logic to determine when to increment next value
  if(milliseconds / 100 === 1){
      milliseconds = 0;
      seconds++;

      if(seconds / 60 === 1){
          seconds = 0;
          minutes++;
  
          if(minutes / 60 === 1){
              minutes = 0;
              hours++;
          }
      }
  }

  //if seconds/minutes/hours are only one digit, add a leading 0 to the value
  if(milliseconds < 10){
    displayMilliseconds = "0" + milliseconds.toString();
  }
  else{
    displayMilliseconds = milliseconds;
  }

  if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
  }
  else{
    displaySeconds = seconds;
  }

  if(minutes < 10){
    displayMinutes = "0" + minutes.toString();
  }
  else{
    displayMinutes = minutes;
  }
  if(hours < 10){
    displayHours = "0" + hours.toString();
  }
  else{
    displayHours = hours;
  }



  //Display updated time values to user
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;    
  
}

function startStop(){

  if(status === "stopped"){

   //start the stopwatch by calling the setinterval() function
    interval = window.setInterval(stopWatch, 10);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started"
    
  }
  else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped"
  }



}

const resetWatch = () => {
        window.clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerHTML = "00:00:00:00";
        document.getElementById("startStop").innerHTML = "start";
        
    }

