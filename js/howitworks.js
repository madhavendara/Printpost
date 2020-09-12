// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'hidden') {
//     style = $('#key-points').attr('style');
//   }
//   if (document.visibilityState === 'visible') {
//     $('#howitworks').attr('style', style);
//   }
// })


if(window.innerHeight > window.innerWidth){
  gsap.to(".step-container", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        pin: "#howitworks",
        start :  "+=50",
        end : "+=8000"
    },
    ease: "none",
    transform : 'translateX(-78%)'
  })
}

else
{
  gsap.to(".step-container", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        pin: "#howitworks",
        start :  "+=250",
        end : "+=8000",
    },
    ease: "none",
    transform : 'translateX(-78%)'
  })
}

gsap.to(".blur-element", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        start :  "0",
        end : "+=250",
    },
    ease: "none",
    top: "14rem"
  })


  gsap.to(".element-2", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        start :  "0",
        end : "+=250",
    },
    ease: "none",
    top: "10rem"
  })

  gsap.from(".step-card", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        start :  "0",
        end : "+=250",
    },
    ease: "none",
    borderColor: "transparent"
  })

  gsap.to(".dot-bg", {
    scrollTrigger: {
        trigger : '#howitworks',
        scrub : 0.4,
        start :  "0",
        end : "+=250",
    },
    ease: "none",
    top: "39rem"
  })




