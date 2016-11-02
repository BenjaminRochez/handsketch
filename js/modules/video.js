function video() {
  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");

  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }
  });


  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
  }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
  });

  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
  });

  // Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
  video.pause();
  });

  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
  video.play();
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
  });

}
  function myFunction(event) {
    // The currentTime property returns the current position of the audio/video playback
    var minutes = Math.floor(event.currentTime / 60); // 7
    var seconds = Math.floor(event.currentTime % 60); // 30

   if(seconds < 10){
        seconds = "0" + seconds;
      } else {
        seconds = seconds;
      }
   if(minutes < 10){
        minutes = "0" + minutes;
      } else {
        minutes = minutes;
      }
      document.getElementById("demo").innerHTML = minutes + ":" + seconds;

}
