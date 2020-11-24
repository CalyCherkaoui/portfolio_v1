gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false,
    scrub: 1
  });
});

ScrollTrigger.create({
  snap: 1 / 6
});

// parallax

// window.addEventListener('scroll', function () {
//   const parallax = document.querySelector('.parallax');
//   let scrollPosition = window.pageYOffset;

//   parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';

// })
