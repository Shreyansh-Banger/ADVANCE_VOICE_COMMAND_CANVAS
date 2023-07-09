x = 0;
y = 0;
draw_basket = "";

basket = "";
screen_width = 0;
screen_height = 0;
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

function preload() {
  basket = loadImage('Fruit Basket.png');
}
 
recognition.onresult = function(event) {


 console.log(event); 

 content = event.results[0][0].transcript;
 
 to_number = Number(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started drawing Baskets ";
        draw_basket = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The speech has not recognized a number "; 
    }


}

function setup() { 
  screen_height = window.innerHeight;
  canvas = createCanvas(750, screen_height-150);
  
}

function draw() {
  if(draw_basket == "set")
  {
    for(var i = 1; i <= to_number;i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(basket, x, y, 50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Baskets drawn";
    draw_basket = "";

  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
