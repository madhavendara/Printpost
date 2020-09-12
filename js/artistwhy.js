// Greensock animations
gsap.to(".selection-container", {
  scrollTrigger: {
      trigger : '#artist-why',
      scrub : 0.4,
      end : 'top 200'
  },
  top : '-2.5%',
  duration : 3
})

// image x animation
gsap.to(".image-x", {
  scrollTrigger: {
      trigger : '#artist-why',
      scrub : 0.4,
      end : 'bottom 400'
  },
  bottom : '30%',
  duration : 3
})

// image xxx animation
gsap.to(".image-xxx", {
  scrollTrigger: {
      trigger : '#artist-why',
      scrub : 0.4,
      start : 'top center',
      end : 'bottom 400'
  },
  bottom : '20%',
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

