const revealables = document.querySelectorAll(
  ".clip, .polaroid, .market-card, .igram__copy, .vibe__inner"
);

revealables.forEach((el) => {
  el.classList.add("will-reveal");
});

const style = document.createElement("style");
style.textContent = `
  .will-reveal {
    opacity: 0;
    transform: translateY(18px) rotate(-1deg);
    transition: opacity 520ms ease, transform 520ms ease;
  }
  .will-reveal.is-in {
    opacity: 1;
    transform: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .will-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;
document.head.appendChild(style);

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

// Subtle sticker peel on ticket hover via pointer tracking
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
