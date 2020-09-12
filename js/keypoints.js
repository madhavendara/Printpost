// Greensock animations

// let style = ''
// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'hidden') {
//     style = $('#key-points').attr('style');
//   }
//   if (document.visibilityState === 'visible') {
//     $('#key-points').attr('style', style);
//   }
// })

gsap.registerPlugin(ScrollTrigger);
gsap.from(".small-circle", {
  scrollTrigger: {
      trigger : '#key-points',
      scrub : 0.4,
      start : 'top center',
      end : 'top 200'
  },
  transform : 'rotate(0deg) translate(0rem) rotate(0deg)',
})

gsap.from(".back-images", {
  scrollTrigger: {
      trigger : '#key-points',
      scrub : 0.4,
      end : 'top 200'
  },
  left : '-50%',
})

gsap.from(".text-content", {
  scrollTrigger: {
      trigger : '#key-points',
      scrub : 0.4,
      start : 'top center',
      end : 'top 200'
  },
  bottom : '-30%',
})

gsap.from(".circle-center", {
  scrollTrigger: {
      trigger : '#key-points',
      scrub : 0.4,
      start : 'top center',
      end : '+=300'
  },
  background: 'rgba(252, 252, 252, 0)',
  onComplete:babaYaga
})

var animation = false;

function babaYaga(){
  animation = true;
}


// $(window).on('scroll',function(e){
//   if(animation == true)
//   {
//     window.scrollTo(0, 2200);
//   }
//   e.preventDefault()
// })

var height = $( window ).height();
console.log(height);

if(window.innerHeight > window.innerWidth){

  gsap.to(".circle-center", {
    scrollTrigger: {
        trigger : '#key-points',
        scrub : 0.4,
        pin: true,
        start : '-=100',
        end : "+=8500"
    },
    // transform:  'translate(-50%, 0%) rotate(360deg)',
  })

}

else
{
  gsap.to(".circle-center", {
    scrollTrigger: {
        trigger : '#key-points',
        scrub : 0.4,
        pin: true,
        end : "+=8500"
    },
    // transform:  'translate(-50%, 0%) rotate(360deg)',
  })
}



gsap.to(".circle-center", {
  scrollTrigger: {
      trigger : '#key-points',
      scrub : true,
      start : '+=400',
      snap: {
        snapTo: 1/8,
        duration: { min: 0.1, max: 0.3 },
        anticipatePin: 0.3,
        delay: 0
      },
      marker : true,
      end : "+=8000",
      onUpdate: self => aredekho(self.progress)
  },
  motionPath:  [
    {rotate :-40}, 
    {rotate : -80},
    {rotate : -120},
    {rotate : -160},
    {rotate : -200},
    {rotate : -240},
    {rotate : -280},
    {rotate : -320}
  ],
  ease: "none",
  
})


var i = 0;

// gsap.to($('.backrounds').children().eq(i), {
//   scrollTrigger: {
//       trigger : '#key-points',
//       scrub : true,
//       start : '+=' + (400),
//       marker : true,
//       end : '+=' + (800),
//   },
//   opacity : '1',
//   ease: "none",
//   onComplete : good    
// })

// function good(){
//   i+=1;
//   gsap.to($('.backrounds').children().eq(i), {
//     scrollTrigger: {
//         trigger : '#key-points',
//         scrub : true,
//         start : '+=' + (400),
//         marker : true,
//         end : '+=' + (500),
//     },
//     opacity : '1',
//     ease: "none",
//     onComplete : good    
//   })

//   console.log('good');
// }

// good();


$('.expend-btn').on('click',function(){

  if($(this).attr('id') != 'active')
  {
    gsap.to($('.active-circle'), {duration: 0.3, opacity : 0, ease: "none"});
    gsap.to($('.circle-container'), {duration: 0.3, opacity : 0, ease: "none"});
  
    gsap.to($(this).children().eq(0), {duration: 0.3, opacity : 0, ease: "none"});

    $('.text-content').addClass('text-content-active');
  
    $(this).attr('id','active');
  }

  else
  {
    gsap.to($('.active-circle'), {duration: 0.3, opacity : 1, ease: "none"});
    gsap.to($('.circle-container'), {duration: 0.3, opacity : 1, ease: "none"});
  
    gsap.to($(this).children().eq(0), {duration: 0.3, opacity : 1, ease: "none"});

    $('.text-content').removeClass('text-content-active');
  
    $(this).attr('id','slide');

    // width: 70%;
    // top: 22%;
    // text-align: left;
    // max-width: 39%;
    // left: 33%;
  }

})



function findIDX(value) {
  return value;
}

var prev_status = 1;

function aredekho(progress){
  var stages = ['0','0.125','0.25','0.375','0.5','0.625','0.75','0.875','1'];
  var icon_translate = [];
  var current_status;
  for(var i = 0; i <stages.length; i++)
  {
    if(stages[i] == progress)
    {
      current_status = i+1;
    }
  }

  if(prev_status != current_status && current_status)
  {
     //white icons animations
     var icon_stages = ['0%','-11.5%','-23.3%','-34.3%','-45.6%','-57%','-68.5%','-80.5%','-91%'];

     gsap.to($('.icons'), {duration: 0.3, transform : `translateY(-50%) translateX(${icon_stages[current_status-1]})`, ease: "none"});

     
    console.log(current_status);
    var child2 = $('.back-images').children().eq(current_status-1);
    var child3 = $('.circle-center').children().eq(current_status-1);
    var child4 = $('.text-content').children().eq(current_status-1);

    // gsap.to($('.backrounds .circle-img'), {duration: 0.3, opacity : 0, ease: "none"});

    gsap.to($('.back-images .back-img'), {duration: 0.3, opacity : 0, ease: "none"});

    // gsap.to(child, {duration: 0.3, opacity : 1, ease: "none"});
    gsap.to(child2, {duration: 0.3, opacity : 1, ease: "none"});


    gsap.to(".small-circle", {duration: 0.3, opacity : 1, ease: "none"});
    gsap.to(child3, {duration: 0.3, opacity : 0, ease: "none"});

    gsap.to(".slides", {duration: 0.3, opacity : 0, ease: "none"});
    gsap.to(child4, {duration: 0.3, opacity : 1, ease: "none"});


    prev_status = current_status;
  }
}

// gsap.to(".circle-center", {
//   scrollTrigger: {
//       trigger : '#key-points',
//       scrub : 0.4,
//       start : '+=800',
//       // snap: {
//       //   snapTo: 1,
//       //   duration: { min: 0.3, max: 0.7 },
//       //   ease: "power2.inOut",
//       //   anticipatePin: 0.2,
//       //   delay: 0
//       // },
//       marker : true,
//       end : "+=1000"
//   },
//   transform:  'translate(-50%, 0%) rotate(190deg)',
// })

// $('#key-points').on('mousewheel', function(event) {
//   if(animation == true)
//   {
//     scroll_points += event.deltaFactor;
//     console.log(scroll_points);
//   }
// });




