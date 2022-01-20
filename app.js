const timeline = gsap.timeline({
  defaults: { duration: 0.75, ease: "power1.out" },
});

// Container Effects

timeline.fromTo(
  ".card-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);

// For Cookie
timeline.fromTo(
  ".animated-image-container",
  { opacity: 0, x: -50, rotate: "-45deg" },
  { opacity: 1, x: 0, rotate: "0deg" },
  "<50%"
);

// For Contents
timeline.fromTo(
  ".content-container",
  { opacity: 0, x: 50 },
  { opacity: 1, x: 0 },
  "<"
);

// Cookie jump

timeline.fromTo(
  ".animated-image-container",
  { y: 0 },
  { y: -20, rotate: "-10deg", yoyo: true, repeat: -1 }
);
timeline.fromTo("#chunks", { y: 0 }, { y: -50, yoyo: true, repeat: -1 }, "<");

// onClick button
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  gsap.to(".card-container", { opacity: 0, y: 100, duration: 0.75 });

  setTimeout(() => {
    gsap.to(".card-container", { opacity: 1, y: 0, duration: 0.75 });
  }, 3000);
});
