(() => {
  const links = () => document.querySelectorAll(".post-list .post-link");
  let animationFrame;

  const updateOverflowState = () => {
    links().forEach((link) => {
      const text = link.querySelector(".post-link-text");

      if (!text || link.offsetParent === null) {
        return;
      }

      const overflow = Math.ceil(text.scrollWidth - link.clientWidth);

      if (overflow > 1) {
        const duration = Math.min(7, Math.max(2.5, overflow / 55));

        link.classList.add("is-overflowing");
        link.style.setProperty("--post-title-marquee-distance", `-${overflow}px`);
        link.style.setProperty("--post-title-marquee-duration", `${duration}s`);
      } else {
        link.classList.remove("is-overflowing");
        link.style.removeProperty("--post-title-marquee-distance");
        link.style.removeProperty("--post-title-marquee-duration");
      }
    });
  };

  const scheduleUpdate = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = window.requestAnimationFrame(updateOverflowState);
  };

  window.addEventListener("resize", scheduleUpdate, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleUpdate);
  }

  document.querySelectorAll(".external-archive").forEach((archive) => {
    archive.addEventListener("toggle", () => {
      if (archive.open) {
        scheduleUpdate();
      }
    });
  });

  scheduleUpdate();
})();
