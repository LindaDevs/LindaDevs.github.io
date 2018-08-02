/**JS FILE**/


/*** Counter ***/
$('.achievement-content').waypoint(function(){
    $('.count').each(function () 
    {
      $(this).prop('Counter',0).animate(
      {
        Counter: $(this).text()
        }, 
        {
        duration: 4000,
        easing: 'swing',
        step: function (now) 
        {
        $(this).text(Math.ceil(now));
        }
      });
  });
}, 
{
  offset: '300'
});


/**Slick slider**/
$('.center1').slick(
    {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
        {
            breakpoint: 600,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
});


/**Video Section**/
var isIframe = function() {
    var a = !1;
    try {
      self.location.href != top.location.href && ( a = !0 )
    } catch ( b ) {
      a = !0
    }
    return a
  };

  jQuery( function() {
    var should_remember = $.mbCookie.get( "YTP_should_remember" );
    if ( should_remember )
      $( "#should_remember" ).attr( "checked", "checked" );

    $( "#should_remember" ).on( "change", function() {
      if ( $( this ).is( ":checked" ) ) {
        $.mbCookie.set( "YTP_should_remember", "true", 1 );
      } else {
        $.mbCookie.remove( "YTP_should_remember" );
      }
    } );

    var myPlayer = jQuery( "#bgndVideo" ).YTPlayer( {
      remember_last_time: should_remember
      , onReady: function( player ) {
        YTPConsole.append( player.id + " player is ready" );
        YTPConsole.append( "<br>" );
      }
    } );

    myPlayer.on( "YTPData", function( e ) {
      $( ".dida" ).html( e.prop.title + "<br>@" + e.prop.channelTitle );
      $( "#videoData" ).show();
    } );

                                              /* DEBUG ***************/
    
    var YTPConsole = jQuery( "#eventListener" );
    // EVENT: YTPStart YTPEnd YTPLoop YTPPause YTPBuffering
    myPlayer.on( "YTPStart YTPEnd YTPLoop YTPPause YTPBuffering YTPMuted YTPUnmuted", function( e ) {
      YTPConsole.append( "event: " + e.type + " (" + jQuery( "#bgndVideo" ).YTPGetPlayer().getPlayerState() + ") > time: " + e.time );
      YTPConsole.append( "<br>" );
    } );
   
  } );
                                              /* END FILTER SLIDERS ************/

  function changeLabel( state ) {
    $( "#togglePlay" ).html( state == 1 ? "<i class='fas fa-pause'></i>" : "<i class='fas fa-play'></i>" );
    $( "#togglePlay" ).removeClass( state == 1 ? "<i class='fas fa-play'></i>" : "<i class='fas fa-pause'></i>" );
    $( "#togglePlay" ).addClass( state == 1 ? "<i class='fas fa-pause'></i>" : "<i class='fas fa-play'></i>" );
  }

  function checkForVal( val ) {
    return val || 0;
  }


/***Scroll top down***/
$(function() {
    $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-0 }, 1000);
      return false;
    });
  });
  $(window).on("scroll",function() {
    if ($(this).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });
  $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})
})


/***MouseHover Effect***/

$(function() {
  $("#feature-blog1, #feature-blog2, #feature-blog3, #feature-blog4, #feature-blog5").mouseover(function(){
    //alert("hello");
      $(this).find(".btn--shockwave").addClass("is-active");
  });
  $("#feature-blog1, #feature-blog2, #feature-blog3, #feature-blog4, #feature-blog5").mouseout(function(){
    $(this).find(".btn--shockwave").removeClass("is-active");
  });
});


/***loding code***/

$(window).on("load",function() {
  // start up after 2sec no matter what
  window.setTimeout(function(){
    $('body').removeClass("bubblingG").addClass('loaded');
  }, 2000);
});


/***Animated Effect***/

wow = new WOW({
  animateClass: 'animated',
  offset: 100,
  callback: function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});

wow.init();
$(window).on("load",function() {
  $(".page-loader").css("display","none");

  var container = $('#projects-grid-masonry');

  $('#portfolio-filter #filter a').click(function () {
    var selector = $(this).attr('data-filter');

    $(this).parent().parent().find('a').removeClass('current');
    $(this).addClass('current');

    container.isotope( {
      filter : selector
    });

    setTimeout(function () {
      reArrangeProjects();
    }, 300);

    return false;
  });
});
$("#search").click(function(){
  $(".searchbox").toggleClass('slideHide');
});



/***Scroll top down***/

$(function() {
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $('html, body').animate({ scrollTop: target.offset().top-0 }, 1000);
    return false;
  });
});
$(window).on("scroll",function() {
  if ($(this).scrollTop() > 50 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})
})


/************Mislider Effect**************/

$(function() {
  $(window).on("load",function() {  
    jQuery(".loader-5").delay(1000).fadeOut("slow");
  });
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': (($target.offset().top))
    }, 500, 'swing', function () {
        
    
    });
});
  
  $("section").css("height",$(window).height()+"px");
  $("section").css("width",$(window).width()+"px");
  $(".mis-stage").css("width",$(window).width()+"px");
  $(".verticle-scroll-menu").css("top",(($(window).height()-$(".verticle-scroll-menu ul").height())/2)+"px");

  
  $(window).resize(function(){
    $("section").css("height",$(window).height()+"px");
    $("section").css("width",$(window).width()+"px");
    $(".mis-stage").css("width",$(window).width()+"px");
    $(".verticle-scroll-menu").css("top",(($(window).height()-$(".verticle-scroll-menu ul").height())/2)+"px");
    
  });
  
  $(".home-page .button").addClass("active");
  
  $(window).scroll(function() 
  {
    //var sss=new array();
    var cars = ["home-page","timmer","services","team","contact","map"];
    var ss=$(window).scrollTop();
    ss=ss+(($(window).height()/2)+150)
    ss=parseInt(ss/$(window).height());

    $("."+cars[ss]+" .button").addClass("active");
    $("."+cars[ss]).find(".ww").addClass("animated");
  });
  
  $(".subscribe-button").click(function(){
    $(".popup").toggleClass("active");
    return false;
  });
  
  $(".close-button").click(function(){
    $(".popup").toggleClass("active");
    return false;
  });
    
});


jQuery(function ($)
		{			
		var slider = $('.mis-stage').miSlider(
			{
			slidesOnStage: 5,
			slidePosition: 'center',
			slideStart: 'mid',
			slideScaling: 120,
			offsetV: -5,
			centerV: true,
			navButtonsOpacity: 1,
			stageHeight:480
		});
		
  });
  

  function slideComplete(args) {
			
    $('.next, .prev').removeClass('unselectable');

    if(args.currentSlideNumber == 1) {
  
      $('.prev').addClass('unselectable');
  
    } else if(args.currentSliderOffset == args.data.sliderMax) {
  
      $('.next').addClass('unselectable');
  
    }
  }


/***Carousel Slider***/

$('.carousel').carousel({
  pause: "false"
  
});


/***particles Effect***/
		
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
stats.begin();
stats.end();
if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
}
requestAnimationFrame(update);
};
requestAnimationFrame(update);







