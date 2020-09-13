
gsap.from(".how-it-steps", {
    scrollTrigger: {
        trigger : '#how-it-works-vendor',
        scrub : 0.4,
        start : '+=50',
        end: `+=100`,
    },
    opacity : '0'
  })


gsap.to(".how-it-steps", {
    scrollTrigger: {
        trigger : '#how-it-works-vendor',
        scrub : 0.4,
        start : '+=50',
        end: `bottom bottom`,
        pin : '.how-it-steps'
    },
    bottom : '0%'
  })