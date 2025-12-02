// Entry for shared interactions
(function () {
  const overlay = document.querySelector(".loading-overlay");
  const hotspots = document.querySelectorAll(".hotspot-strip .hotspot");
  if (!overlay || hotspots.length === 0) return;

  hotspots.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Ignore middle-click or modifier opens
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;
      document.body.classList.add("is-loading");
      // Small delay to show the overlay before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 180);
    });
  });
})();
