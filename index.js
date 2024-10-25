gsap.registerPlugin(ScrollTrigger);

gsap.to("#truck-1", {
  duration: 5,
  x: 1000,
  y: -230,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#truck-2",  // Tetikleyici olarak .truck kullanıyoruz

    scrub: true,
  },
});
gsap.to("#truck-2", {
  duration: 5,
  x: -1000,
  y: -120,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#truck-2",  // Tetikleyici olarak .truck kullanıyoruz

    scrub: true,
  },
});
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
