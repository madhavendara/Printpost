var element = document.querySelector("#how-you-make-money");

console.log(element.offsetTop);


gsap.to(".progress-step", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=50',
        end: `bottom bottom`,
        pin : '.progress-bar'
    },
    bottom : '0%'
  })

  

  gsap.from(".step-graphics-1", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '-=100',
        end: `+=300`,
    },
    transform : 'translate(0,150px)'
  })


  gsap.from(".make-money-dot", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=50',
        end: `+=400`,
    },
    transform : 'translate(0px,-150px)'
  })


  gsap.from(".element-4", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=200',
        end: `+=400`,
    },
    top : '50%'
  })


  gsap.from(".step-graphics-2", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=200',
        end: `+=400`,
    },
    transform : 'translate(0,-100px)'
  })

  gsap.to(".product-card", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=400',
        end: `+=600`,
    },
    transform : 'translate(0px, 150px) translateZ(0)'
  })

  gsap.from(".element-5", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        scrub : 0.4,
        start : '+=600',
        end: `+=700`,
    },
    top : '60%'
  })



  


  