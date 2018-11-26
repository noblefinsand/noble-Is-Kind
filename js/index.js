  var button = document.getElementById("click-me");
  var counter = document.getElementById("counter"). innerHTML = localStorage.clickcount;
  var resetButton = document.getElementById("reset");

  button.onclick = function() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("counter").innerHTML = localStorage.clickcount;
    }
  }

  reset.onclick = function(exceptions) {
    window.localStorage.clear();
    localStorage.clickcount = 0;
    document.getElementById("counter").innerHTML = "0";
  }
