// Greensock animations
gsap.to(".selection-container", {
    scrollTrigger: {
        trigger : '#vendor-why',
        scrub : 0.4,
        end : 'top 200'
    },
    top : '-2.5%',
    duration : 3
  })
  
  // image x animation
  gsap.to(".vendor-element-1", {
    scrollTrigger: {
        trigger : '#vendor-why',
        scrub : 0.4,
        end : 'bottom 400'
    },
    top : '-10%',
    duration : 3
  })
  
  // image xxx animation
  gsap.to(".vendor-element-2", {
    scrollTrigger: {
        trigger : '#vendor-why',
        scrub : 0.4,
        start : 'top center',
        end : 'bottom 400'
    },
    top : '-5%',
    duration : 3
  })
  
  
  
  // // image xxx animation
  // gsap.from(".artist-why-points", {
  //   scrollTrigger: {
  //       trigger : '#artist-why',
  //       scrub : 0.4,
  //       start : 'top center',
  //       end : 'bottom 700'
  //   },
  //   marginTop : '20%',
  // })
  
  