// element //

const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const speakbtn = document.getElementById("speakbtn");


// Speech recognition setup //

const SpeechRecognition = 
 window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();

//  sr start //
 recognition.onstart = function(){
    console.log("vr active");
 };

//  sr result //

recognition.onresult = function(event){
let current = event.resultIndex;
let transcript = event.results[current][0].transcript;

console.log(transcript);
}   

 //  sr end //
 recognition.onend = function(){
    console.log("vr deactive");
 };

//  sr continous //
recognition.continuous = true;

    startbtn.addEventListener("click", () => {
      recognition.start();
    });
  
    stopbtn.addEventListener("click", () => {
      recognition.stop();
    });


// Jarvis speech //
function readout(message){
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        const allvoices = speechSynthesis.getVoices();
        speech.text = message;
        speech.voice = allvoices[30];
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
        console.log("speaking out");
    } else {
        console.log("Speech synthesis not supported");
    }
}

speakbtn.addEventListener("click", () =>{ 
    readout("hi my dear boys ");
});

