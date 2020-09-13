var element = document.querySelector("#how-you-make-money");

console.log(element.offsetTop);


gsap.from(".progress-bar", {
    scrollTrigger: {
        trigger : '#how-you-make-money',
        start : '+=50',
        end: `bottom bottom`,
        pin : '.progress-bar'
    },
    opacity : '0',
  })