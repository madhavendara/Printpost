// var allImages = "";

// function getRandomSize(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }

//   console.log(getRandomSize(1,4));

//   for(var i = 1; i <= 72; i++)
//   {
//     console.log(getRandomSize(1,4));

//     allImages += '<div class="image-grid-style-'+getRandomSize(1,4)+'"> <img src="./images/vendor-key/key-img-'+i+'.jpg" class="key-image" alt="grid-img"/></div>';
//   }


//   $('.images-grid').append(allImages);

// var counts = [0.35,1.58,3.25,1.01],




// console.log(closest);

$('.expend-btn').on('click',function(){
  $(this).parent().toggleClass('active-content-key');
})

if(window.innerHeight < window.innerWidth && window.innerWidth/window.innerHeight < 1.7 )

{
  gsap.to(".key-point-all-container", {
    scrollTrigger: {
        trigger : '#vendor-key-points',
        scrub : 0.2,
        start : '+=0',
        marker : true,
        end : "+=16000",
        pin : "#vendor-key-points",
        onUpdate: self => areyaar(self.progress)
    },
    motionPath:  [
      {top :-(13/100 * window.innerHeight / 1.65 * 1.4), left : -(49/100 * window.innerWidth* 1.4)}, 
      {top :-(100/100 * window.innerHeight / 1.65 * 1.4), left : -(8/100 * window.innerWidth* 1.4)},
      {top :-(84/100 * window.innerHeight / 1.65 * 1), left : -(76/100 * window.innerWidth* 1)},
      {top :-(81/100 * window.innerHeight / 1.65 * 1), left : -(130/100 * window.innerWidth* 1)},
      {top :-(56/100 * window.innerHeight / 1.65 * 1), left : -(187/100 * window.innerWidth* 1)},
      {top :-(160/100 * window.innerHeight / 1.65 * 1), left : -(63/100 * window.innerWidth* 1)},
      {top :-(185/100 * window.innerHeight / 1.65 * 1), left : -(139/100 * window.innerWidth* 1)},
      {top :-(145/100 * window.innerHeight / 1.65 * 1), left : -(264/100 * window.innerWidth* 1)}

    ],
    ease: "none",
    
  })
}

else if(window.innerHeight < window.innerWidth){
  gsap.to(".key-point-all-container", {
    scrollTrigger: {
        trigger : '#vendor-key-points',
        scrub : 0.2,
        start : '+=0',
        marker : true,
        end : "+=16000",
        pin : "#vendor-key-points",
        onUpdate: self => areyaar(self.progress)
    },
    motionPath:  [
      {top :-(13/100 * window.innerHeight * 1.4), left : -(49/100 * window.innerWidth* 1.4)}, 
      {top :-(100/100 * window.innerHeight * 1.4), left : -(8/100 * window.innerWidth* 1.4)},
      {top :-(84/100 * window.innerHeight * 1), left : -(76/100 * window.innerWidth* 1)},
      {top :-(81/100 * window.innerHeight * 1), left : -(130/100 * window.innerWidth* 1)},
      {top :-(56/100 * window.innerHeight * 1), left : -(187/100 * window.innerWidth* 1)},
      {top :-(160/100 * window.innerHeight * 1), left : -(63/100 * window.innerWidth* 1)},
      {top :-(185/100 * window.innerHeight * 1), left : -(139/100 * window.innerWidth* 1)},
      {top :-(145/100 * window.innerHeight * 1), left : -(264/100 * window.innerWidth* 1)}

    ],
    ease: "none",
    
  })
}

else
{
  gsap.to(".key-point-all-container", {
    scrollTrigger: {
        trigger : '#vendor-key-points',
        scrub : 0.2,
        start : '+=0',
        marker : true,
        end : "+=16000",
        pin : "#vendor-key-points",
        onUpdate: self => areyaar(self.progress)
    },
    motionPath:  [
      {top :-(13/100 * window.innerHeight/3 * 1.4), left : -(49/100 * window.innerWidth* 1.4)}, 
      {top :-(100/100 * window.innerHeight/3 * 1.4), left : -(8/100 * window.innerWidth* 1.4)},
      {top :-(84/100 * window.innerHeight/3 * 1), left : -(76/100 * window.innerWidth* 1)},
      {top :-(81/100 * window.innerHeight/3 * 1), left : -(130/100 * window.innerWidth* 1)},
      {top :-(56/100 * window.innerHeight/3 * 1), left : -(187/100 * window.innerWidth* 1)},
      {top :-(160/100 * window.innerHeight/3 * 1), left : -(63/100 * window.innerWidth* 1)},
      {top :-(185/100 * window.innerHeight/3 * 1), left : -(139/100 * window.innerWidth* 1)},
      {top :-(145/100 * window.innerHeight/3 * 1), left : -(264/100 * window.innerWidth* 1)}

    ],
    ease: "none",
    
  })
}

var stephref = ['#step1','#step2','#step3','#step4','#step5','#step6','#step7','#step8','#step9'];
$('.steps-title').on('click',function(){
  // var setepOffset = $('#vendor-key-points').offset().top;

 for(var i = 0; i <= 8; i++)
 {
    if(stephref[i] == $(this).attr('href'))
    {
      var totalOffset;

      switch(i) {
        case 0:
          totalOffset = (window.innerHeight * 2.4 * i);
          break;
        case 1:
          totalOffset = (window.innerHeight * 2.4 * i);
          break;         
          
        case 2:
          totalOffset = (window.innerHeight * 2.6 * i);
          break;
        case 3:
          totalOffset = (window.innerHeight * 2.6 * i);
          break; 
          
          case 4:
          totalOffset = (window.innerHeight * 2.65 * i);
          break;
        case 5:
          totalOffset = (window.innerHeight * 2.6 * i);
          break;

       case 6:
            totalOffset = (window.innerHeight * 3 * i);
            break;  

      case 7:
        totalOffset = (window.innerHeight * 3 * i);
        break;  
              
        case 8:
        totalOffset = (window.innerHeight * 3.15 * i);
        break;            

          
      
        default:
          totalOffset = (window.innerHeight * 1.7 * i);

      }
      
      gsap.to(window, {duration: 2, scrollTo: {y: "#keyid", offsetY: -(totalOffset)}});
    }
 }


})

  
  function areyaar(rooop) {
    var progress_steps = [0,0.101375,0.213875,0.320125,0.413875,0.501375,0.695125,0.820125,0.9820625];

    var closest = progress_steps.reduce(function(prev, curr) {
      return (Math.abs(curr - rooop) < Math.abs(prev - rooop) ? curr : prev);
    });

    for(var i = 0; i<=8; i++)
    {
      if(progress_steps[i] == closest)
      {
        var activeListItem = $('.keypoint-list').children().eq(i);
        var ListItem = $('.keypoint-list').children();

        ListItem.removeClass('steps-title-active');
        activeListItem.addClass('steps-title-active');
        var Card = $('.keys-points-container').children();
        var activeCard1 = $('.keys-points-container').children().eq(i);
        // var activeCard2 = $('.keys-points-container').children().eq(i+1);

        Card.css({
          opacity : '0'
        });

        activeCard1.css({
          opacity : '1'
        });

        // activeCard2.css({
        //   opacity : '1'
        // });


        console.log(i);
      }
    }

 
}




//   .position-1
// {
//     top: -13%;
//     left: -49%;
// }

// .position-2
// {
//     top: -100%;
//     left: -8%;
// }

// .position-3 {
//     top: -84%;
//     left: -76%;
// }

// .position-4 {
//     left: -130%;
//     top: -81%;
// }

// .position-5 {
//     left: -187%;
//     top: -56%;
// }

// .position-6 {
//     left: -63%;
//     top: -160%;
// }

// .position-7 {
//     left: -139%;
//     top: -145%;
// }

// .position-8 {
//     left: -264%;
//     top: -145%;
// }


