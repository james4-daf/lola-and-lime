(() => {
  const revealables = document.querySelectorAll(
    ".clip, .polaroid, .market-card, .igram__copy, .vibe__inner, .product-card, .will-reveal-target"
  );

  revealables.forEach((el) => el.classList.add("will-reveal"));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-in"));
  }

  document.querySelectorAll(".ticket").forEach((ticket) => {
    ticket.addEventListener("pointermove", (event) => {
      const rect = ticket.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      ticket.style.transform = `rotate(${x * 8}deg) translateY(-2px)`;
    });
    ticket.addEventListener("pointerleave", () => {
      ticket.style.transform = "";
    });
  });

  // Gallery-friendly product page: swap main image from thumbs
  const gallery = document.querySelector("[data-product-gallery]");
  if (gallery) {
    const main = gallery.querySelector("[data-gallery-main]");
    gallery.querySelectorAll("[data-gallery-thumb]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.getAttribute("data-full-src");
        const alt = thumb.getAttribute("data-alt") || "";
        if (main && src) {
          main.src = src;
          main.alt = alt;
        }
        gallery.querySelectorAll("[data-gallery-thumb]").forEach((t) =>
          t.setAttribute("aria-current", "false")
        );
        thumb.setAttribute("aria-current", "true");
      });
    });
  }
})();
