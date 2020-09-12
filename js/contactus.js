gsap.to(".circle-line-container", {
    scrollTrigger: {
        trigger : '#contactus',
        scrub : 0.4,
        start :  "-=100",
        end : '+=200'
    },
    ease: "none",
    top : '55%'
  })


  gsap.from(".contact-graphics", {
    scrollTrigger: {
        trigger : '#contactus',
        scrub : 0.4,
        start :  "-=100",
        end : '+=100'
    },
    ease: "none",
    bottom : '0rem'
  })


  gsap.to(".dot-bg", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        start :  "+=8000",
        end : '+=8200'
    },
    ease: "none",
    top : '8rem'
  })

  