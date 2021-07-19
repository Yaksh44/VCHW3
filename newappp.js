const synthesis = window.speechSynthesis;
// Establish that browser has speech recognition
window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;


// Creating nre instances for each recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = "en-US";

const recognition1 = new SpeechRecognition();
recognition1.interimResults = true;
recognition1.continuous = true;
recognition1.lang = "en-US";

const recognition2 = new SpeechRecognition();
recognition2.interimResults = true;
recognition2.continuous = true;
recognition2.lang = "en-US";

// Grab elements from the html file
let startRecognitionPlayrecipe = document.querySelector("#recipe");
let startRecognitioningredients = document.querySelector("#ing")
let startRecognition = document.querySelector("#start");
let stopRecognition = document.querySelector("#stop");
let clearTranscript = document.querySelector("#clear");
let Playingredients = document.querySelector("#recipe1");
let playing = document.querySelector("#recipe2")
let playSpeech = document.querySelector("#play");
let transcript = document.querySelector("#transcript");
let transcriptt = document.querySelector("#transcriptt");
let transcripttt = document.querySelector("#transcripttt");


// Add event listeners 
startRecognition.addEventListener("click", handleStartRecognition);
startRecognitionPlayrecipe.addEventListener("click", handleStartRecognition1);
startRecognitioningredients.addEventListener("click",handleStartRecognition2);
stopRecognition.addEventListener("click", handleStopRecognition);
clearTranscript.addEventListener("click", handleClearTranscript);
playSpeech.addEventListener("click", handlePlaySpeech);
Playingredients.addEventListener("click", handlePlaySpeech1);
playing.addEventListener("click", handlePlaySpeech2);

// function for recognizing comments
function handleStartRecognition(event) {
  event.preventDefault();
	console.log("start speech recognition for comments");

	recognition.addEventListener("error", (event) => {
		console.log("an error occurred");
	});

	recognition.addEventListener("result", (event) => {
		const results = Array.from(event.results)
			.map((item) => item[0].transcript)
			.join("");

		console.log(results);
		transcript.textContent = results;
	});

	recognition.start();
}

// function for recognizing recipe
function handleStartRecognition1(event) {
  event.preventDefault();
	console.log("start speech recognition for recipe");

	recognition1.addEventListener("error", (event) => {
		console.log("an error occurred");
	});

	recognition1.addEventListener("result", (event) => {
		const resultss = Array.from(event.results)
			.map((item) => item[0].transcript)
			.join("");

		console.log(resultss);
		transcriptt.textContent = resultss;
	});

	recognition1.start();
}

// function for recognizing ingredients
function handleStartRecognition2(event) {
    event.preventDefault();
      console.log("start speech recognition for ingredients");
  
      recognition2.addEventListener("error", (event) => {
          console.log("an error occurred");
      });
  
      recognition2.addEventListener("result", (event) => {
          const resultsss = Array.from(event.results)
              .map((item) => item[0].transcript)
              .join("");
  
          console.log(resultsss);
          transcripttt.textContent = resultsss;
      });
  
      recognition2.start();
  }

// function for stoping the recognition. Its a common function for all of them
function handleStopRecognition(event) {
  event.preventDefault();
	console.log("stop speech recognition");
	recognition.stop();
    recognition1.stop();
    recognition2.stop();
}

// function to clear all three transcript.
function handleClearTranscript(event) {
  event.preventDefault();
  console.log("speech deleted");
	transcript.textContent = "";
    transcriptt.textContent = "";
    transcripttt.textContent = "";
    
}

// below here the functions are for speaking recipe, ingredients and comments

function handlePlaySpeech(event) {
  event.preventDefault();
	console.log("speech synthesis");
  console.log(transcript.textContent);
  let utterance = new SpeechSynthesisUtterance(transcript.textContent);
	synthesis.speak(utterance);
  
  
}
function handlePlaySpeech1(event) {
  event.preventDefault();
	console.log("speech synthesis 1");
  console.log(transcriptt.textContent);
  let utterance= new SpeechSynthesisUtterance(transcriptt.textContent);
	synthesis.speak(utterance);
  
  
}

function handlePlaySpeech2(event) {
    event.preventDefault();
      console.log("speech synthesis for ingredeints");
    console.log(transcripttt.textContent);
    let utterance= new SpeechSynthesisUtterance(transcripttt.textContent);
      synthesis.speak(utterance);
    
    
  }
