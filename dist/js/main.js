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

// ScrollTrigger.create({
//   snap: 1 / 6
// });

// parallax

// window.addEventListener('scroll', function () {
//   const parallax = document.querySelector('.parallax');
//   let scrollPosition = window.pageYOffset;

//   parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';

// })

// navigation

const navHorizontal = document.querySelector(".navigation_horizontal");
const navVertical = document.querySelector(".navigation_vertical");
const sectionHero = document.querySelector("#whoami");

const sectionHeroOptions = {
  rootMargin: "-20px 0px 0px 0px"
};

const sectionHeroObserver = new IntersectionObserver(function(entries, sectionHeroObserver) {
  entries.forEach( entry => {
    if(!entry.isIntersecting) {
      navHorizontal.classList.add('navigation_scrolled')
      navVertical.classList.remove("navigation_scrolled")
    } else {
      navHorizontal.classList.remove("navigation_scrolled")
      navVertical.classList.add('navigation_scrolled')
    }
  });
}, sectionHeroOptions);

sectionHeroObserver.observe(sectionHero);

// active section link in vertical navbar

const navSections = document.querySelectorAll("section");

onscroll = function() {
  let scrollPosition = document.documentElement.scrollTop;

  navSections.forEach( (section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.1 &&
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.1
      ) {
        let currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
    }
  });

};

var removeAllActiveClasses = function() {
  document.querySelectorAll('.vertical_nav_link').forEach(element => {
    element.classList.remove('vertical_nav_active');
  });
};

var addActiveClass = function(id) {
  console.log(id);
  let selector = `.vertical_nav_list a[href="#${id}"]`;
  console.log(selector);
  document.querySelector(selector).classList.add("vertical_nav_active");
};

// burgermenu


