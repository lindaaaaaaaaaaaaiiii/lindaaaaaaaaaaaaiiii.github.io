(() => {
  const story = document.querySelector("[data-policy-scroll]");
  if (!story) return;

  const stage = story.querySelector(".policy-scroll__stage");
  const steps = [...story.querySelectorAll(".policy-scroll__step")];
  const scenes = steps.map(step => step.querySelector(".policy-scroll__scene"));
  if (!stage || !scenes.length || scenes.some(scene => !scene)) return;

  const desktop = window.matchMedia(
    "(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)"
  );
  let active = -1;
  let pending = false;

  function update() {
    pending = false;
    if (!desktop.matches) return;
    const readingLine = window.innerHeight * 0.55;
    let next = 0;
    for (const [index, step] of steps.entries()) {
      if (step.getBoundingClientRect().top > readingLine) break;
      next = index;
    }
    if (next === active) return;
    stage.replaceChildren(scenes[next].cloneNode(true));
    active = next;
  }

  function schedule() {
    if (!desktop.matches || pending) return;
    pending = true;
    window.requestAnimationFrame(update);
  }

  function setLayout() {
    story.classList.toggle("is-enhanced", desktop.matches);
    stage.hidden = !desktop.matches;
    update();
  }

  desktop.addEventListener("change", setLayout);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  setLayout();
})();
