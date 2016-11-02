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
    <section class="products" id="products">
      <h2>Products</h2>
      <!-- products list -->
      <ul class="products__group">
        <li class="products__group__el clearfix">
          <div class="left">
          <div class="products__group__el__img products__group__el__img--handsketch">
            <a href="#" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="#" class="products__group__el__titlelink"><h4 class="products__group__el__title">Handsketch</h4></a>
          </div>
          <div class="right">
          <p class="products__group__el__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

        <li class="products__group__el clearfix">
          <div class="left">
          <p class="products__group__el__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" class="products__group__el__cta">See more +</a>
          </p>

          </div>
          <div class="right">
          <div class="products__group__el__img products__group__el__img--drawing">
            <a href="#" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="#" class="products__group__el__titlelink"><h4 class="products__group__el__title">Drawing Sounds</h4></a>
          </div>
        </li>

        <li class="products__group__el clearfix">
          <div class="left">
          <div class="products__group__el__img products__group__el__img--wall">
            <a href="#" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="#" class="products__group__el__titlelink"><h4 class="products__group__el__title">Interactive Wall</h4></a>
          </div>
          <div class="right">
          <p class="products__group__el__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" class="products__group__el__cta">See more +</a>
          </p>

          </div>
        </li>

        <li class="products__group__el clearfix">
          <div class="left">
          <p class="products__group__el__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" class="products__group__el__cta">See more +</a>
          </p>

          </div>
          <div class="right">
          <div class="products__group__el__img products__group__el__img--choir">
            <a href="#" class="products__group__el__imghover"></a>
            <div class="products__group__el__img__gradient"></div>
          </div>
          <a href="#" class="products__group__el__titlelink"><h4 class="products__group__el__title">Choir Mob</h4></a>
          </div>
        </li>

      </ul>
    </section>

    <h5>"Hi world, we are Hovertone. We are a new startup in motion and music technologies.<br>
      We aim at designing new musical experiences, creating new apps and new instruments like the HandSketch."</h5>
      <!-- SECTION SERVICES -->
      <section class="services">
        <h2>Services</h2>
        <!-- products list -->
        <ul class="services__group">
          <li class="services__group__el">
            <div class="services__group__el__img services__group__el__img--motion">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">Motion Capture</h4></a>
            <p class="services__group__el__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el">
            <div class="services__group__el__img services__group__el__img--performance">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">PERFORMANCES</h4></a>
            <p class="services__group__el__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el">
            <div class="services__group__el__img services__group__el__img--workshops">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">WORKSHOPS</h4></a>
            <p class="services__group__el__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>

          <li class="services__group__el">
            <div class="services__group__el__img services__group__el__img--custom">
              <a href="#" class="services__group__el__imghover"></a>
              <div class="services__group__el__img__gradient"></div>
            </div>
            <a href="#"><h4 class="services__group__el__title">Custom Projects</h4></a>
            <p class="services__group__el__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="services__group__el__cta">See more +</a>
          </li>
        </ul>
      </section>


      <!-- SECTION ABOUT -->
      <section>
        <h2>About</h2>
        <!-- TEAM -->
        <div>
          <img src="#" alt="" />
          <p>
            Hi world, we are Hovertone. We are a new startup in motion and music technologies. We aim at designing new musical experiences, creating new apps and new instruments like the HandSketch.
          </p>
        </div>
        <div>
          <img src="#" alt="" />
          <p>
            Hovertone is a combination of different technological expertises and high-tech platforms, serving these new interactive experiences, serving the emotion of the visitor, performer, creator, creative.
          </p>
        </div>
      </section>

    </div>

    <!-- FOOTER -->
    <footer>
      <h2>hovertone</h2>
      <p>

      </p>
    </footer>

    <?php include 'pages/end.php' ?>
