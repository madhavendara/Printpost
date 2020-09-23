
gsap.utils.toArray(".step-back-graphics").forEach(box => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      scrube : 0.3,
      start: "top 95%"
    },

  });

  tl.from(box, {
    bottom:  0
    
  });
});



gsap.from(".how-it-steps", {
    scrollTrigger: {
        trigger : '#how-it-works-vendor',
        scrub : 0.4,
        start : '+=50',
        end: `+=100`,
    },
    opacity : '-4rem'
  })


gsap.to(".how-it-steps", {
    scrollTrigger: {
        trigger : '#how-it-works-vendor',
        scrub : true,
        start : '+=50',
        end: `bottom bottom`,
        pin : '.how-it-steps'
    },
    motionPath:  [
      {x : '0%', y :'5%'}, 
      {x : '-15%', y :'35%'}, 
      {x : '-35%', y :'90%'}, 
      {x : '-90%', y :'300%'}, 
      {x : '0%', y :'600%'}, 
    ],
    ease: "none"
  })


  var i = 0;

  gsap.to($('.how-it-steps').children().eq(i), {
  scrollTrigger: {
      trigger : '#how-it-works-vendor',
      scrub : true,
      start : '+=' + (200),
      marker : true,
      end : '+=' + (500),
  },
  motionPath : [
    {opacity : '1'}, 
    {opacity : '0'}
  ],
  ease: "none",
  onComplete : good    
})

function good(){
  if(i < 5)
  {
    i+=1;
  gsap.to($('.how-it-steps').children().eq(i), {
    scrollTrigger: {
        trigger : '#how-it-works-vendor',
        scrub : true,
        start : '+=' + (100 + 350*i),
        marker : true,
        end : '+=' + (300 + 325*i),
    },
    motionPath : [
      {opacity : '1'}, 
      {opacity : '0'}
    ],
    ease: "none",
    onComplete : good    
  })

  }

  else if(i == 3)
  {
    gsap.to($('.how-it-steps').children().eq(i), {
      scrollTrigger: {
          trigger : '#how-it-works-vendor',
          scrub : true,
          start : '+=' + (350 + 350*i),
          marker : true,
          end : '+=' + (500 + 325*i),
      },
      motionPath : [
        {opacity : '1'}, 
        {opacity : '0'}
      ],
      ease: "none",
      onComplete : good    
    })
  }

  else
  {
    return false;
  }
}

good();



  // top points : -14%,10%,35%,59%,85% 