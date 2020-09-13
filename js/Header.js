


jQuery(function ($) {
    $(window).bind('load',function(){
  
        $(".loader-overlay").css({
            "display" : "none"
        })

        $(".brand-logo").removeClass('unloaded');
        $(".brand-logo").addClass('loaded');

        $(".menu-bar").addClass('active-opacity');
        $("#header h4").addClass('active-opacity');
        $(".logo-main-text").addClass('active-opacity');

        gsap.to(".selection-container", {
            transform : 'translate(-50%,-50%)',
            duration : 1
        }).delay(1.5);

        gsap.to(window, {duration: 2, scrollTo:"#artist-why"}).delay(1.5);
 
    })

    $(".menu-bar").on('click',function(){
        gsap.to(".top-menu", {duration: 0.5, opacity : 1, transform : 'translateY(0%)'});
    })

    $(".close-btn").on('click',function(){
        gsap.to(".top-menu", {duration: 0.5, opacity : 0, transform : 'translateY(-200%)'});
    })

    $('.dropdown-toggle').on('click',function(){
        $(this).toggleClass('dropdown-toggle-active');
        $('.dropdown').toggleClass('dropdown-none');
    })

    $('.play-video').on('click',function(){
        gsap.to("#artist-video", {duration: 0.5, display : 'flex', transform : 'translateY(0%)'});
      })

      $('.video-close').on('click',function(){
        gsap.to("#artist-video", {duration: 0.5, display : 'none', transform : 'translateY(0%)'});

        var vid = document.getElementById("myVideo");

        vid.pause();
      })  
});





