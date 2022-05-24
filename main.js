x = 0;
y = 0;
 
draw_apple= "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
 
}
// ma'am, I don't really understand the js part of the code
