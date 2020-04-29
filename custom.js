var rat = 0;//used to show rat after modulo with a number
var score = 0;
var play=undefined;//this will store playing func setInterval
var status=1;//intial to start game

// --------play button click so start game if status is 1----------
document.querySelector(".play").addEventListener('click',function(){
  if (status==1){
    startGame();
  }
})


// ============start game and set status to avoid multiple plays============
function startGame(){
  status=0;//stop multiple calls to startGame
  document.querySelector(".score").style.color="black";
  document.querySelector('.score').innerText = 'Score: ' + score;
  play = setInterval(function() {
    rat++;
    var position = Math.floor(Math.random() * 9);
    var catno = Math.floor(Math.random() * 3 + 1);
    if (rat % 4 == 0) {
      document.querySelector("#b" + position).setAttribute("src", "images/rat" + catno + ".png")
      document.querySelector("#b" + position).addEventListener('click', scoreend)
      setTimeout(function() {
        document.querySelector("#b" + position).removeEventListener('click', scoreend)
        document.querySelector("#b" + position).setAttribute("src", "images/twig.png")
      }, 700);
      } else {
        document.querySelector("#b" + position).setAttribute("src", "images/cat" + catno + ".png")
        document.querySelector("#b" + position).addEventListener('click', scoreinc)
        setTimeout(function() {
          document.querySelector("#b" + position).setAttribute("src", "images/twig.png")
          document.querySelector("#b" + position).removeEventListener('click', scoreinc)
        }, 700);
      }
  }, 900)
}
// --------------Cat is clicked inc score and display--------------------
function scoreinc() {
  score++
  document.querySelector('.score').innerText = 'Score: ' + score;
}
// ---------Mouse is clicked so stop game-------------
function scoreend(){
  score=0;
  status=1;//to restart the game if needed
  clearInterval(play);
  document.querySelector(".score").style.color="red";
}
