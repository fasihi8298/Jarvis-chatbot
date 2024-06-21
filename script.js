// element //

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");


// Speech recognition setup //

const SpeechRecognition = 
 window.SpeechRecognition || window.webkitSpeeechRecognition;

 const recognition = new SpeechRecognition();

//  sr start //
 recognition.onstart = function(){
    console.log("vr active");
 };

 //  sr end //
 recognition.onend = function(){
    console.log("vr deactive");
 };

//  sr continous //
recognition.continous = true;

 startbtn.addEventListener("click", () => {
    recognition.start();
 });

 stopbtn.addEventListener("click", () => {
    recognition.start();
 });

// Jarvis speech //
function readout(messsage){
    const speech = new SpeechSynthesisUtterance()
    messsage.text = messsage;
    speech.volume = 1
    Window.SpeechSynthesis.speak(speech)
    console.log("speaking out")
}