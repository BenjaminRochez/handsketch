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
      /*	ScrollTo
      /*-----------------------------------------------------------------------------------*/

      var sections = [];
      var id = false;
      var $navbar = $('#timeline');
      var $navbara = $('a', $navbar);

      $navbara.click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        });
        hash($(this).attr('href'));
      });

      $navbara.each(function(){
        sections.push($($(this).attr('href')));
      });

      $(window).scroll(function(e){
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2)
        for(var i in sections){
          var section = sections[i];
          if (scrollTop > section.offset().top) {
            scrolled_id = section.attr('id');
          }
        }
        if (scrolled_id !== id) {
          id = scrolled_id;
          $navbara.removeClass('current');
          hash($('a[href="#' + id + '"]', $navbar).attr('href'));
          $('a[href="#' + id + '"]', $navbar).addClass('current');
        }
      });


      hash = function(h) {
        if (history.pushState) {
          history.pushState(null, null, h);
        }else{
          location.hash = h;
        }
      }


});
