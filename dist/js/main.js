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
  // snap: 1 / 3
});


// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   yPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#home",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector("#home").offsetHeight
//   }
// });

// ScrollTrigger.create({
// //   // snap: 1 / 8 // snap whole page to the closest section!
//   pinSpacing: false
// });
