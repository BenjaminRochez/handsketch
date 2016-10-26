$(document).ready(function() {

      /*-----------------------------------------------------------------------------------*/
      /*
      /*	1. AnimTitle
      /*	2. ScrollReveal
      /*	3. ScrollTo
      /*  4. NAV
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
      /*	Autoclose nav
      /*-----------------------------------------------------------------------------------*/
      $('nav ul li a').click(function() {
          if ($('.burger').hasClass('burgerCross')) {
              $('.burger').removeClass('burgerCross');
              $('nav').removeClass('nav--open');
              $('nav ul li a').addClass('current');
          }
      });

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
          tl.to('.text', 0.7,{transform: "translateY(0px), opacity: '1', ease:Expo.easeOut"})
          .to("#creative", 1, {transform: "translateY(0px)", opacity:'1', ease: Expo.easeOut, delay:'-0.7'})
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


});
