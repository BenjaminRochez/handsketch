$(document).ready(function() {

      /*-----------------------------------------------------------------------------------*/
      /*
      /*	1. AnimTitle
      /*	2. ScrollReveal
      /*	3. ScrollTo
      /*  4. NAV
      /*  5. retinajs
      /*
      /*
      /*-----------------------------------------------------------------------------------*/
      /*-----------------------------------------------------------------------------------*/
      /*	Navigation
      /*-----------------------------------------------------------------------------------*/

      $('.burger').click(function(){
          $(this).toggleClass('burgerCross');
      });
      $('.burger').click(function() {
          if ($('.burger').hasClass('burgerCross')) {
              $('nav').addClass('nav--open');
              $('.line1').addClass('lineStatic');
              $('.line3').addClass('lineStatic');
              $('body').toggleClass('overflow');
          }
          else {
          $('nav').removeClass('nav--open');
          $('.line1').removeClass('lineStatic');
          $('.line3').removeClass('lineStatic');
          }
      });
      $('.nav li a').click(function() {
          if ($('.burger').hasClass('burger')) {
              $('.burger').removeClass('burger');
              $('nav').removeClass('nav--open');
          }
      });

      /*-----------------------------------------------------------------------------------*/
      /*-----------------------------------------------------------------------------------*/
      /*	Round Animation
      /*-----------------------------------------------------------------------------------*/



      window.onload = function() {
        var tl = new TimelineLite();
        tl.to("circle", 0, {rotation:"360", repeat: -1, ease: 'linear'})
        .to("#circle", 10 , {rotation:"360", repeat: -1, ease: 'linear'})
      }

      /*-----------------------------------------------------------------------------------*/
      /*-----------------------------------------------------------------------------------*/
      /*	Autoclose nav
      /*-----------------------------------------------------------------------------------*/
      $('nav ul li a').click(function() {
          if ($('.burger').hasClass('burgerCross')) {
              $('.burger').removeClass('burgerCross');
              $('nav').removeClass('nav--open');
              $('nav ul li a').addClass('current');
              $('body').removeClass('overflow');
          }
      });

      /*-----------------------------------------------------------------------------------*/
      /*	waypoint nav
      /*-----------------------------------------------------------------------------------*/

      // var yolo = new Waypoint({
      //   yolo: document.getElementById('products'),
      //   handler: function(direction) {
      //     console.log('Scrolled to waypoint!')
      //   }
      // });

      /*-----------------------------------------------------------------------------------*/
      /*-----------------------------------------------------------------------------------*/
      /*	Nav scroll
      /*-----------------------------------------------------------------------------------*/

      $('nav a').click(function(event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
          event.preventDefault();
      });

      $(window).scroll(function() {
       if ($(window).scrollTop() > 400) {
           $('nav').addClass('nav--show ');
       }
       else {
       $('nav').removeClass('nav--show  ');
       }
     });


      /*-----------------------------------------------------------------------------------*/
      /*	AnimTitle
      /*-----------------------------------------------------------------------------------*/

      function animTitle(){
        var tl = new TimelineLite();
        tl.to("#animTitle", 0.5 , {width:"0", delay: '0.5'})
        .to("#animSubtitle", 0.5 , {width:"0", delay: '-0.4'})
      };


      /*-----------------------------------------------------------------------------------*/
      /*	AnimTitle Header
      /*-----------------------------------------------------------------------------------*/
      function textAppear(){
          var tl = new TimelineLite();
          tl.to("#creative", 1, {transform: "translateY(0px)", opacity:'1', ease:Expo.easeOut, delay:'1'})
          .to("#subtitle", 0.7, {transform: "translateY(0px)", opacity: '1', ease:Expo.easeOut, delay:'-0.7'})
        };
        textAppear();

      /*-----------------------------------------------------------------------------------*/
      /*	ScrollReveal
      /*-----------------------------------------------------------------------------------*/
      var srReveal = {
      easing   : 'ease-in-out',
      scale    : 1,
      viewFactor: 0.3,
      reset: true
      };

      var srRevealH = {
      easing   : 'ease-in-out',
      scale    : 1,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      viewFactor: 1,
      duration: 1000,
      reset: false
      };

      window.sr = ScrollReveal();
      sr.reveal('.sr', srReveal);
      sr.reveal('.h', srRevealH);


      /*-----------------------------------------------------------------------------------*/
      /*	VIDEO
      /*-----------------------------------------------------------------------------------*/

      $("#closeVideo").click(function(e){
        e.preventDefault();
        $('body').removeClass('overflow');
        console.log('yolo');
        video.pause();
        $("#play-pause").html('<i class="fa fa-play" aria-hidden="true"></i>');
        var tl = new TimelineLite();
        tl.to(".video-wrapper", 0 , {left:'0', width:'100%'})

        .to("#video", 0, {display: 'none'})
        .to(".blackBord", 0.5 , {height: '0'})
        .to(".blackBord", 0 , {display: 'none'})
        .to(".afterVid", 0.4, {height: '0'})
        .to(".beforeVid", 0.4, {height: '0', delay: '-0.4'})
        .to(".video-wrapper", 0, {display: 'none'})

      });

      $("#startVideo").click(function(e){
        e.preventDefault();
        $('body').addClass('overflow');
        setTimeout(function() {
        video.play();
      }, 1000);
        $("#play-pause").html('<i class="fa fa-pause" aria-hidden="true"></i>');
        var tl = new TimelineLite();
        tl.to(".video-wrapper", 0 , {display: 'block'})
        .to(".afterVid", 0.4, {height: '50%'})
        .to(".beforeVid", 0.4, {height: '50%', delay: '-0.4'})
        .to(".blackBord", 0 , {display: 'block'})
        .to(".blackBord", 0.5 , {height: '50'})
        .to("#video", 0, {display: 'block'})
      });

      /*-----------------------------------------------------------------------------------*/
      /*	RETINA JS
      /*-----------------------------------------------------------------------------------*/

      window.devicePixelRatio = 2;

      (function() {

        var root = (typeof exports == 'undefined' ? window : exports);

        var config = {
          // Ensure Content-Type is an image before trying to load @2x image
          // https://github.com/imulus/retinajs/pull/45)
          check_mime_type: true
        };



        root.Retina = Retina;

        function Retina() {}

        Retina.configure = function(options) {
          if (options == null) options = {};
          for (var prop in options) config[prop] = options[prop];
        };

        Retina.init = function(context) {
          if (context == null) context = root;

          var existing_onload = context.onload || new Function;

          context.onload = function() {
            var images = document.getElementsByTagName("img"), retinaImages = [], i, image;
            for (i = 0; i < images.length; i++) {
              image = images[i];
              retinaImages.push(new RetinaImage(image));
            }
            existing_onload();
          }
        };

        Retina.isRetina = function(){
          var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                            (min--moz-device-pixel-ratio: 1.5),\
                            (-o-min-device-pixel-ratio: 3/2),\
                            (min-resolution: 1.5dppx)";

          if (root.devicePixelRatio > 1)
            return true;

          if (root.matchMedia && root.matchMedia(mediaQuery).matches)
            return true;

          return false;
        };


        root.RetinaImagePath = RetinaImagePath;

        function RetinaImagePath(path, at_2x_path) {
          this.path = path;
          if (typeof at_2x_path !== "undefined" && at_2x_path !== null) {
            this.at_2x_path = at_2x_path;
            this.perform_check = false;
          } else {
            this.at_2x_path = path.replace(/\.\w+$/, function(match) { return "@2x" + match; });
            this.perform_check = true;
          }
        }

        RetinaImagePath.confirmed_paths = [];

        RetinaImagePath.prototype.is_external = function() {
          return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain) )
        }

        RetinaImagePath.prototype.check_2x_variant = function(callback) {
          var http, that = this;
          if (this.is_external()) {
            return callback(false);
          } else if (!this.perform_check && typeof this.at_2x_path !== "undefined" && this.at_2x_path !== null) {
            return callback(true);
          } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
            return callback(true);
          } else {
            http = new XMLHttpRequest;
            http.open('HEAD', this.at_2x_path);
            http.onreadystatechange = function() {
              if (http.readyState != 4) {
                return callback(false);
              }

              if (http.status >= 200 && http.status <= 399) {
                if (config.check_mime_type) {
                  var type = http.getResponseHeader('Content-Type');
                  if (type == null || !type.match(/^image/i)) {
                    return callback(false);
                  }
                }

                RetinaImagePath.confirmed_paths.push(that.at_2x_path);
                return callback(true);
              } else {
                return callback(false);
              }
            }
            http.send();
          }
        }



        function RetinaImage(el) {
          this.el = el;
          this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
          var that = this;
          this.path.check_2x_variant(function(hasVariant) {
            if (hasVariant) that.swap();
          });
        }

        root.RetinaImage = RetinaImage;

        RetinaImage.prototype.swap = function(path) {
          if (typeof path == 'undefined') path = this.path.at_2x_path;

          var that = this;
          function load() {
            if (! that.el.complete) {
              setTimeout(load, 5);
            } else {
              that.el.setAttribute('width', that.el.offsetWidth);
              that.el.setAttribute('height', that.el.offsetHeight);
              that.el.setAttribute('src', path);
            }
          }
          load();
        }

        if (Retina.isRetina()) {
          Retina.init(root);
        }

      })();





});
