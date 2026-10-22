const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

// Small, respectful reveal animation. Content remains visible if JS is disabled.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const items = document.querySelectorAll(".discipline-card, .category-card, .photo-collection, .about-layout");
  items.forEach((item) => item.classList.add("reveal"));
}
