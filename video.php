<section class="video-wrapper">
  <div id="video-container">
<div class="top"><a id="closeVideo" href="#" disableScroll()><i class="fa fa-times" aria-hidden="true"></i> Fermer </a></div>

<!-- Video -->
<video id="video" width="640" height="365" ontimeupdate="myFunction(this)">
  <source src="http://squiweb.be/diplostudio/hovertone.mp4" type="video/mp4">
  <p>
    Your browser doesn't support HTML5 video.
    <a href="videos/mikethefrog.mp4">Download</a> the video instead.
  </p>
</video>
<!-- Video Controls -->
<div class="bottom">
<div id="video-controls" >
  <button type="button" id="play-pause"><i class="fa fa-play" aria-hidden="true"></i> </button>
  <input type="range" id="seek-bar" value="0">
  <p id="currenttime"><span id="demo">00:00</span></p>
  <button type="button" id="mute"><i class="fa fa-volume-up" aria-hidden="true"></i></button>
  <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
</div>
  </div>
</div>
</section>


<?php include 'pages/end.php' ?>
