<?php include 'pages/head.php' ?>

<body id="handsketch">

<header>
  <div class="content">
  <!-- <h1>Handsketch</h1> -->
  <div class="box">
    <div class="title-container creative-title mask">
      <p id="creative" class="inner-title">
        Creative Agency
      </p>
    </div>
  </div>
  <p>
    The HandSketch is finally out for sale! HandSketch is a new digital musical instrument that gives to a musician the possibility to play artificial singing voice on stage and in studio.
  </p>
  <a href="#" class="btn" id="startVideo">Decouvrez l'application</a>
  </div>

  <!-- BURGER -->
  <div class="burger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>

  <!-- MAIN NAV -->
  <nav>
    <ul>
      <li class="home">
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#achat">Achat</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div class="langue">
      <a href="#">FR</a>
      <a href="#">NL</a>

    </div>

    <!-- BURGER -->
    <div class="burger">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>

    <!-- MAIN NAV -->
    <nav>
      <ul>
        <li class="home">
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#achat">Achat</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div class="langue">
        <a href="#">FR</a>
        <a href="#">NL</a>
      </div>
    </nav>

  </header>
  <div class="background"></div>
  <!-- SECTION PRESENTATION -->
  <section id="about" class="presentation">
    <h2 class="h">The new digital musical instrument</h2>
    <!-- INTRO BLOCK -->
    <div class="intro scrollme">
      <p class="first-p">
        This new musical instrument is the result of numerous years of research and development in the field of expressive singing voice synthesis.
      </p>
      <div class="images">
        <img src="assets/images/iPadPro.png" class="ipad front_1 animateme" alt=""
        data-when="enter"
        data-from="0"
        data-to="2"
        data-translatey="200" />
        <img src="assets/images/iPadPro.png" class="ipad front_2 animateme" alt=""
        data-when="enter"
        data-from="0"
        data-to="1.5"
        data-translatey="-550" />
        <img src="assets/images/ipad_perspective_black.png" class="ipad front_3 animateme" alt=""
        data-when="enter"
        data-from="0.9"
        data-to="2.5"
        data-translatey="-450" />
      </div>
    </div>
    <div class="infos">
      <p class="description">
        The HandSketch has already been used in many performances, and can accompany classical instruments as well as fit electronic music circumstances.
      </p>
      <p>
        <a href="#" class="btn">Decouvrez l'application</a>
      </p>
    </div>

    <!--ANIMATION CIRCLE-->
    <div class="circle">
      <ul>
        <li class="round">
          <span></span>
        </li>
        <li class="round">
          <span></span>
        </li>
        <li class="round">
          <span></span>
        </li>
        <li class="round">
          <span></span>
        </li>
        <li class="round">
          <span></span>
        </li>
        <li class="round">
          <span></span>
        </li>
      </ul>
    </div>




    <!-- DEMONSTRATION BLOCK -->
    <div class="demonstration">
      <img src="assets/images/interface_2.png" class="sr"  alt="interface handsketch" />
      <img src="assets/images/interface_1.png" class="sr" alt="interface handsketch" />
    </div>

    <!--  BLOCK BANNERWHITE -->
    <div id="achat" class="bannerwhite sr">
      <h2>Handsketch<span>musical instrument</span></h2>
      <p>
        This new musical instrument is the result of numerous years of research and development in the field of expressive singing voice synthesis.
      </p>
      <div class="store">
        <a href="#"><img src="assets/images/appstore.png" alt="logo appstore"/></a>
        <a href="#"><img src="assets/images/logo_handsketch.png" alt="logo handsketch"/></a>
      </div>
      <h3>Telechargez Handsketch</h3>
    </div>

    <p class="cta">
      <a href="#" class="btn">Decouvrez l'application</a>
    </p>
  </section>


<!-- Video -->
  <section class="video-wrapper">
    <div id="video-container">
      <span class="beforeVid overlayVid"></span>
      <span class="afterVid overlayVid"></span>
      <div class="top blackBord">
        <a id="closeVideo" href="#" disableScroll()><i class="fa fa-times" aria-hidden="true"></i> Fermer </a>
      </div>


      <video id="video" width="640" height="365" ontimeupdate="myFunction(this)">
        <source src="http://squiweb.be/diplostudio/hovertone.mp4" type="video/mp4">
          <p>
            Your browser doesn't support HTML5 video.
            <a href="videos/mikethefrog.mp4">Download</a> the video instead.
          </p>
        </video>
        <!-- Video Controls -->
        <div class="bottom blackBord">
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


    <footer id="contact">
      <h3>
        Hovertone
      </h3>
      <p>
        Made with humans by diplostudio
      </p>
      <a href="#">Contact us</a>
      <img src="assets/images/logo_handsketch.png" alt="logo handsketch" />
    </footer>
<?php include 'pages/end.php' ?>
