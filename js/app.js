$(document).ready(function(){function e(){var e=new TimelineLite;e.to(".text",.7,{transform:"translateY(0px), opacity: '1', ease:Expo.easeOut"}).to("#creative",1,{transform:"translateY(0px)",opacity:"1",ease:Expo.easeOut,delay:"-0.7"})}$(".burger").click(function(){$(this).toggleClass("burgerCross")}),$(".burger").click(function(){$(".burger").hasClass("burgerCross")?($("nav").addClass("nav--open"),$(".line1").addClass("lineStatic"),$(".line3").addClass("lineStatic")):($("nav").removeClass("nav--open"),$(".line1").removeClass("lineStatic"),$(".line3").removeClass("lineStatic"))}),$(".nav li a").click(function(){$(".burger").hasClass("burger")&&($(".burger").removeClass("burger"),$("nav").removeClass("nav--open"))}),$("nav ul li a").click(function(){$(".burger").hasClass("burgerCross")&&($(".burger").removeClass("burgerCross"),$("nav").removeClass("nav--open"),$("nav ul li a").addClass("current"))}),$("nav a").click(function(e){var a=$(this).attr("href"),r=70,s=$(a).offset().top-r;$("html, body").animate({scrollTop:s},500),e.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()>400?$("nav").addClass("nav--show "):$("nav").removeClass("nav--show  ")}),e();var a={easing:"ease-in-out",scale:1,viewFactor:.3,reset:!0},r={easing:"ease-in-out",scale:1,viewOffset:{top:0,right:0,bottom:0,left:0},viewFactor:1,duration:1e3,reset:!1};window.sr=ScrollReveal(),sr.reveal(".sr",a),sr.reveal(".h",r);var s=[],t=!1,n=$("#timeline"),o=$("a",n);o.click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top}),hash($(this).attr("href"))}),o.each(function(){s.push($($(this).attr("href")))}),$(window).scroll(function(e){var a=$(this).scrollTop()+$(window).height()/2;for(var r in s){var l=s[r];a>l.offset().top&&(scrolled_id=l.attr("id"))}scrolled_id!==t&&(t=scrolled_id,o.removeClass("current"),hash($('a[href="#'+t+'"]',n).attr("href")),$('a[href="#'+t+'"]',n).addClass("current"))}),hash=function(e){history.pushState?history.pushState(null,null,e):location.hash=e}});