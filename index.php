<?php include 'pages/head.php' ?>

<body id="hovertone">

  <?php include 'pages/header.php' ?>
  <!-- Video -->
    <section class="video-wrapper">
      <div id="video-container">
        <span class="beforeVid overlayVid"></span>
        <span class="afterVid overlayVid"></span>
        <div class="top blackBord">
          <a id="closeVideo" href="#" disableScroll()><i class="fa fa-times" aria-hidden="true"></i> Fermer </a>
        </div>


        <video id="video" width="640" height="365" ontimeupdate="myFunction(this)">
          <source src="assets/videos/hovertone.mp4" type="video/mp4">
            <p>
              Your browser doesn't support HTML5 video.
              <a href="">Download</a> the video instead.
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

  <!-- SECTION PRODUCTS -->

  <div class="wrapper">
    <section class="products triggerNav" id="products">
      <h2>Products</h2>
      <!-- products list -->
      <ul class="products__group ">
        <li class="products__group__el clearfix scrollme">
          <div class="left">
          <div class="products__group__el__img products__group__el__img--handsketch animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="-105">
            <a href="handsketch.php" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="handsketch.php" class="products__group__el__titlelink animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="150"><h4 class="products__group__el__title">Handsketch</h4></a>
          </div>
          <div class="right">
          <p class="products__group__el__p">
          HandSketch is a new digital musical instrument that gives to musicians the possibility to play artificial singing voice on stage and in studio.
            <a href="handsketch.php" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

        <li class="products__group__el clearfix scrollme">
          <div class="right">
          <div class="products__group__el__img products__group__el__img--drawing animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="-105">
            <a href="drawingsound.php" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="drawingsound.php" class="products__group__el__titlelink animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="150"><h4 class="products__group__el__title">Drawing Sound</h4></a>
          </div>
          <div class="left">
          <p class="products__group__el__p">
            Creating music is often considered difficult and limited to achieved musicians. With Drawing Sounds , we want to demystify music making.
            <a href="drawingsound.php" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

        <li class="products__group__el clearfix scrollme">
          <div class="left">
          <div class="products__group__el__img products__group__el__img--wall  animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="-105">
            <a href="interactivewall.php" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="interactivewall.php" class="products__group__el__titlelink animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="150"><h4 class="products__group__el__title">Interactive Wall</h4></a>
          </div>
          <div class="right">
          <p class="products__group__el__p">
            We make magic walls and posters. Just take a regular poster and/or wall, any kind of size, that you would put in an event, a festival, in your shop or in the street for advertising, and “like magic” add the interactive twist to it.
            <a href="interactivewall.php" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

        <li class="products__group__el clearfix scrollme">
          <div class="right">
          <div class="products__group__el__img products__group__el__img--choir animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="-105">
            <a href="choirmob.php" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="choirmob.php" class="products__group__el__titlelink animateme"
          data-when="enter"
          data-from="0"
          data-to="1"
          data-rjs="2"
          data-translatey="150"><h4 class="products__group__el__title">Choir Mob</h4></a>
          </div>
          <div class="left">
          <p class="products__group__el__p">
            ChoirMob is an interactive installation, musical and participative that comes as a choir of voices coming from mobile phones. In this project we have met a very particular challenge: to communicate to the visitor the feeling of really playing and sharing the music.
            <a href="choirmob.php" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

      </ul>
    </section>

    <h5 class="sr">"Hi world, we are Hovertone. We are a new startup in motion and music technologies.<br>
      We aim at designing new musical experiences, creating new apps and new instruments like the HandSketch."</h5>
      <!-- SECTION SERVICES -->
      <section class="services">
        <h2 class="sr">Services</h2>
        <!-- products list -->
        <ul class="services__group">
          <li class="services__group__el sr">
            <div class="services__group__el__img services__group__el__img--motion">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">Motion Capture</h4></a>
            <p class="services__group__el__p">
              Motion Capture: Gestures to animation, visuals and more.
              We have a specific and negotiated access to a high end motion capture facility in Mons.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el sr">
            <div class="services__group__el__img services__group__el__img--performance">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">PERFORMANCES</h4></a>
            <p class="services__group__el__p">
              Cutting-edge digital art on stage.
              With the HandSketch instrument that he developed, Nicolas d’Alessandro has been performing as a musician for years.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el sr">
            <div class="services__group__el__img services__group__el__img--workshops">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">WORKSHOPS</h4></a>
            <p class="services__group__el__p">
              The different workshops are linked to the products we offer, for instance: composition with DrawingSound and ambient sounds recordings, ...
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el sr">
            <div class="services__group__el__img services__group__el__img--custom">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">Custom Projects</h4></a>
            <p class="services__group__el__p">
              You have an idea and you do not know how to realise it? We can help with any stage of your project, or take care from ideation to realisation and installation.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>
        </ul>
      </section>


      <!-- SECTION ABOUT -->
      <section class="about">
        <h2 class="about__h2">About</h2>
        <!-- TEAM -->
        <div class="about__person">
          <img class="about__person__img" src="assets/images/joelle.jpg" data-rjs="2" alt="Joelle" />
          <h3 class="about__person__h3">Joëlle Tilmane</h3>
          <p class="about__person__p">
            Hi world, we are Hovertone. We are a new startup in motion and music technologies. We aim at designing new musical experiences, creating new apps and new instruments like the HandSketch.
          </p>
        </div>
        <div class="about__person">
          <img class="about__person__img" src="assets/images/nico.jpg" data-rjs="2" alt="Nicolas" />
          <h3 class="about__person__h3">Nicolas d’Allessandro</h3>
          <p class="about__person__p">
            Hovertone is a combination of different technological expertises and high-tech platforms, serving these new interactive experiences, serving the emotion of the visitor, performer, creator, creative.
          </p>
        </div>
        <div class="idea">
          <h2 class="idea__h2">An Idea ?</h2>
          <h3 class="idea__h3">Contact-us</h3>
          <p class="idea__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

    </div>

    <!-- FOOTER -->
    <?php include 'pages/footer.php' ?>

    <?php include 'pages/end.php' ?>
