// References:
// https://www.makeuseof.com/javascript-event-listeners-how-to-use/
// https://www.w3schools.com/js/js_if_else.asp


window.addEventListener("load", function() {

// Page load/stop autoplay and looping
	video = document.getElementById("player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

// Volume Button
var volumeinfo = document.querySelector("#volume");
var volumeslider = document.querySelector("#slider");
video.volume = volumeslider.value / 100;
volumeinfo.textContent = volumeslider.value + "%";

function updateVolumeInfo() {
  volumeinfo.textContent = volumeslider.value + "%";
}

volumeslider.addEventListener("input", function() {
  video.volume = volumeslider.value / 100;
  updateVolumeInfo();
});

// Play Button
var playButton = document.querySelector("#play");
playButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updateVolumeInfo();
});


// Pause Button
	var playButton = document.querySelector("#pause");
	playButton.addEventListener("click", function() {
	if (video.play) {
		video.pause();}
	});

// Slower button
	var slowerbutton = document.querySelector("#slower");
	slowerbutton.addEventListener("click", function() {
	  var currentrate = video.playbackRate;
	  var newrate = currentrate - 0.1;
	  video.playbackRate = newrate;
	  console.log("New playback rate:", newrate);
	});

// Faster button
	var fasterButton = document.querySelector("#faster");
	fasterButton.addEventListener("click", function() {
	  var currentRate = video.playbackRate;
	  var newRate = currentRate < 0 ? currentRate / 0.9 : currentRate * 1.1;
	  video.playbackRate = newRate;
	  console.log("New playback rate:", newRate);
	});

// Skip button
  	var skipButton = document.querySelector("#skip");
  	skipButton.addEventListener("click", function() {
    var newtime = video.currentTime + 10;
    if (newtime > video.duration) {
      newtime = video.duration;
      video.currentTime = 0;
      video.play();
    } else {
      video.currentTime = newtime;
    }
    console.log("Current time:", video.currentTime);
  });

// Mute Button
  var muteButton = document.querySelector("#mute");
  muteButton.addEventListener("click", function() {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = "Mute";
    } else {
      video.muted = true;
      muteButton.textContent = "Unmute";
    }
  });



// Vintage Old School Style
	var vintagebutton = document.querySelector("#vintage");
	vintagebutton.addEventListener("click", function() {
	video.classList.toggle("oldSchool");
	});

// Original Style
	var origbutton = document.querySelector("#orig");
	origbutton.addEventListener("click", function() {
	video.classList.remove("oldSchool"); 
	vintagebutton.disabled = false; 
	origbutton.disabled = true; 
	});
	//Figure out how to enable button again after it's been clicked

  });



