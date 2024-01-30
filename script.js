document.addEventListener("DOMContentLoaded",function(){
// creating countdown element using dom 
let countdown=document.createElement("div");
countdown.id="countdown";
countdown.className="countdown-message";
document.body.append(countdown);

// creating message element using dom
let message=document.createElement("div");
message.className="countdown-message";
document.body.append(message);

function CountDownStart(){
    let count=10;

    function countdownupdate(){
      countdown.textContent=count;
      count--;

      if(count<0){
        clearInterval(interval);//clear the interval 
        displaymessage();
      }
    }
    function displaymessage() {
        countdown.style.display="none";
        message.id="message";
        message.textContent="Happy Indepedence Day 🕊 !!!";

    }
    countdownupdate();
    var interval = setInterval(countdownupdate, 1000);
}
CountDownStart();
})