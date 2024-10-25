
gsap.to("#sol_duvar", {
  scrollTrigger: {
    scrub: 0.5, // Animasyonun hızını belirle
    pin:"#sol_duvar",
  },
  x: -500,
});

gsap.to("#sag_duvar", {
  scrollTrigger: {
    scrub: 0.5, // Animasyonun hızını belirle
    pin: "#sag_duvar",
  },
  x: 500,
});

gsap.to("#man", {
    scrollTrigger: {
      scrub: 4, // Animasyonun hızını belirle
      pin: "#man", 
    },
    scale: 0.1,
});
gsap.to("#background", {
  scrollTrigger: {
    scrub: 0.5, // Animasyonun hızını belirle
    pin:"#background",    
  },
  scale: 1.2,
});
gsap.to("#linyit", { scrollTrigger: {
  trigger: "#linyit",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},scale: 1.2,});
gsap.to("#tas_komur", { scrollTrigger: {
  trigger: "#tas_komur",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},scale: 1.1,});

gsap.to("#antrasit_komur", { scrollTrigger: {
  trigger: "#antrasit_komur",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},scale: 1.1,});

gsap.to("#carbonado_komur", { scrollTrigger: {
  trigger: "#carbonado_komur",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},scale: 1.1,});



