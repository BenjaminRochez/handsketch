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
      viewFactor: 0.1,
      reset: false
      };

      window.sr = ScrollReveal();
      sr.reveal('.sr', srReveal);


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
