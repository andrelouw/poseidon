var countDownDate = new Date("Aug 31, 2018 15:00:00").getTime();

function SetTime() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days =  Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds =  Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " dae oor!";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
  }
}

SetTime();

var x = setInterval(function() {SetTime();}, 30000);

