const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const galleries = {"branding":[{"src":"images/gallery/branding/14-artboard-1.jpg","alt":"Artboard 1"},{"src":"images/gallery/branding/12-artboard-2.jpg","alt":"Artboard 2"},{"src":"images/gallery/branding/13-artboard-3.jpg","alt":"Artboard 3"},{"src":"images/gallery/branding/15-artboard-4.jpg","alt":"Artboard 4"},{"src":"images/gallery/branding/16-artboard-5.jpg","alt":"Artboard 5"},{"src":"images/gallery/branding/18-artboard-6.jpg","alt":"Artboard 6"},{"src":"images/gallery/branding/17-artboard-7.jpg","alt":"Artboard 7"},{"src":"images/gallery/branding/10-artboard-8.jpg","alt":"Artboard 8"},{"src":"images/gallery/branding/11-artboard-9.jpg","alt":"Artboard 9"},{"src":"images/gallery/branding/02-artboard-10.jpg","alt":"Artboard 10"},{"src":"images/gallery/branding/01-artboard-11.jpg","alt":"Artboard 11"},{"src":"images/gallery/branding/03-artboard-12.jpg","alt":"Artboard 12"},{"src":"images/gallery/branding/04-artboard-13.jpg","alt":"Artboard 13"},{"src":"images/gallery/branding/08-artboard-14.jpg","alt":"Artboard 14"},{"src":"images/gallery/branding/09-artboard-15.jpg","alt":"Artboard 15"},{"src":"images/gallery/branding/06-artboard-16.jpg","alt":"Artboard 16"},{"src":"images/gallery/branding/05-artboard-17.jpg","alt":"Artboard 17"},{"src":"images/gallery/branding/20-artboard-18.jpg","alt":"Artboard 18"},{"src":"images/gallery/branding/21-artboard-19.jpg","alt":"Artboard 19"},{"src":"images/gallery/branding/28-artboard-20.jpg","alt":"Artboard 20"},{"src":"images/gallery/branding/27-artboard-21.jpg","alt":"Artboard 21"},{"src":"images/gallery/branding/25-artboard-22.jpg","alt":"Artboard 22"},{"src":"images/gallery/branding/26-artboard-23.jpg","alt":"Artboard 23"},{"src":"images/gallery/branding/19-artboard-24.jpg","alt":"Artboard 24"},{"src":"images/gallery/branding/22-artboard-25.jpg","alt":"Artboard 25"},{"src":"images/gallery/branding/24-artboard-26.jpg","alt":"Artboard 26"},{"src":"images/gallery/branding/23-artboard-27.jpg","alt":"Artboard 27"},{"src":"images/gallery/branding/07-artboard-28.jpg","alt":"Artboard 28"}],"brochure":[{"src":"images/gallery/brochure/01-842abdf4-ce1d-4185-a982-91b77871e179-rw-3840.jpg","alt":"842abdf4 ce1d 4185 a982 91b77871e179 rw 3840"},{"src":"images/gallery/brochure/02-cb39e5f7-2270-4373-a34f-ab06ac53a37b-rw-3840.jpg","alt":"cb39e5f7 2270 4373 a34f ab06ac53a37b rw 3840"}],"catalogue":[{"src":"images/gallery/catalogue/01-nike-catalogue.jpg","alt":"Nike Catalogue"},{"src":"images/gallery/catalogue/02-nike-catalogue2.jpg","alt":"Nike Catalogue2"},{"src":"images/gallery/catalogue/03-nike-catalogue3.jpg","alt":"Nike Catalogue3"},{"src":"images/gallery/catalogue/04-nike-catalogue4.jpg","alt":"Nike Catalogue4"}],"cover image":[],"ethnic-fashion":[{"src":"images/gallery/ethnic-fashion/01-dsc09482.jpg","alt":"DSC09482"},{"src":"images/gallery/ethnic-fashion/02-dsc09531.jpg","alt":"DSC09531"},{"src":"images/gallery/ethnic-fashion/03-dsc09530.jpg","alt":"DSC09530"},{"src":"images/gallery/ethnic-fashion/04-dsc09971.jpg","alt":"DSC09971"},{"src":"images/gallery/ethnic-fashion/05-dsc01245.jpg","alt":"DSC01245"},{"src":"images/gallery/ethnic-fashion/06-dsc09961.jpg","alt":"DSC09961"},{"src":"images/gallery/ethnic-fashion/07-dsc09956.jpg","alt":"DSC09956"},{"src":"images/gallery/ethnic-fashion/08-dsc09980.jpg","alt":"DSC09980"},{"src":"images/gallery/ethnic-fashion/09-dsc01258.jpg","alt":"DSC01258"},{"src":"images/gallery/ethnic-fashion/10-dsc09529.jpg","alt":"DSC09529"},{"src":"images/gallery/ethnic-fashion/11-dsc09510.jpg","alt":"DSC09510"},{"src":"images/gallery/ethnic-fashion/12-dsc09539.jpg","alt":"DSC09539"},{"src":"images/gallery/ethnic-fashion/13-dsc09505.jpg","alt":"DSC09505"},{"src":"images/gallery/ethnic-fashion/14-dsc09936.jpg","alt":"DSC09936"}],"newborn":[{"src":"images/gallery/newborn/01-06c11c88-a2ee-461a-8bb2-b9bb393c610f.jpg","alt":"06c11c88 a2ee 461a 8bb2 b9bb393c610f"},{"src":"images/gallery/newborn/02-9a2bdc7d-4117-417b-b1b0-eae5edaeb227.jpg","alt":"9a2bdc7d 4117 417b b1b0 eae5edaeb227"},{"src":"images/gallery/newborn/03-56e46d25-5f22-43da-9c3d-6f39f416a97f.jpg","alt":"56e46d25 5f22 43da 9c3d 6f39f416a97f"},{"src":"images/gallery/newborn/04-220cb86b-52b9-46ef-84cc-7f7c126fbd82.jpg","alt":"220cb86b 52b9 46ef 84cc 7f7c126fbd82"},{"src":"images/gallery/newborn/05-5d7b89bf-06ff-4e48-bc11-7f9e610667bd.jpg","alt":"5d7b89bf 06ff 4e48 bc11 7f9e610667bd"},{"src":"images/gallery/newborn/06-405a6539-016b-4af0-8bf6-d996d88d6de1.jpg","alt":"405a6539 016b 4af0 8bf6 d996d88d6de1"},{"src":"images/gallery/newborn/07-61d29915-3b7e-41cc-969d-836a87949cb4.jpg","alt":"61d29915 3b7e 41cc 969d 836a87949cb4"},{"src":"images/gallery/newborn/08-14f6bb0c-b660-4913-a862-09efa0dd1233.jpg","alt":"14f6bb0c b660 4913 a862 09efa0dd1233"},{"src":"images/gallery/newborn/09-2be73ede-0f00-484a-9462-fa35c5ffe357.jpg","alt":"2be73ede 0f00 484a 9462 fa35c5ffe357"},{"src":"images/gallery/newborn/10-08dc39f3-f17e-4104-9b63-69c0f449544b.jpg","alt":"08dc39f3 f17e 4104 9b63 69c0f449544b"},{"src":"images/gallery/newborn/11-bdd03e2e-0b88-46e2-be2d-6ab4c4eb1de1.jpg","alt":"bdd03e2e 0b88 46e2 be2d 6ab4c4eb1de1"},{"src":"images/gallery/newborn/12-c0ca3f81-16f9-4940-a45d-3ad984e636f6.jpg","alt":"c0ca3f81 16f9 4940 a45d 3ad984e636f6"},{"src":"images/gallery/newborn/13-114385dc-8d10-4f54-8ff1-12cecf39dcab.jpg","alt":"114385dc 8d10 4f54 8ff1 12cecf39dcab"},{"src":"images/gallery/newborn/14-a44c21d8-d64c-4e06-841d-d7b12d37bfd9.jpg","alt":"a44c21d8 d64c 4e06 841d d7b12d37bfd9"},{"src":"images/gallery/newborn/15-de0d20ac-3525-4b9d-a6af-d93f76f6afd6.jpg","alt":"de0d20ac 3525 4b9d a6af d93f76f6afd6"},{"src":"images/gallery/newborn/16-fc1ae4a8-b5c0-47ed-8309-774fc612078b.jpg","alt":"fc1ae4a8 b5c0 47ed 8309 774fc612078b"}],"packaging":[{"src":"images/gallery/packaging/01-packaging-dimensions-playing-cards-1.jpg","alt":"packaging dimensions playing cards (1)"},{"src":"images/gallery/packaging/02-playing-cards-mockup.jpg","alt":"playing cards mockup"},{"src":"images/gallery/packaging/03-playing-cards-mockup-2.jpg","alt":"playing cards mockup 2"},{"src":"images/gallery/packaging/04-playing-cards-dieline-variations.jpg","alt":"Playing cards packaging dieline — three layout variations"}],"portraits":[{"src":"images/gallery/portraits/01-dsc02924.jpg","alt":"DSC02924"},{"src":"images/gallery/portraits/02-dsc09509.jpg","alt":"DSC09509"},{"src":"images/gallery/portraits/03-dsc09938.jpg","alt":"DSC09938"},{"src":"images/gallery/portraits/04-dsc04410.jpg","alt":"DSC04410"},{"src":"images/gallery/portraits/05-dsc04472.jpg","alt":"DSC04472"},{"src":"images/gallery/portraits/06-dsc04456.jpg","alt":"DSC04456"},{"src":"images/gallery/portraits/07-dsc04434-edit.jpg","alt":"DSC04434 Edit"},{"src":"images/gallery/portraits/08-dsc09502.jpg","alt":"DSC09502"},{"src":"images/gallery/portraits/09-dsc04433-edit.jpg","alt":"DSC04433 Edit"}],"street":[{"src":"images/gallery/street/01-dsc00728.jpg","alt":"DSC00728"},{"src":"images/gallery/street/02-dsc03234.jpg","alt":"DSC03234"},{"src":"images/gallery/street/03-dsc08648.jpg","alt":"DSC08648"},{"src":"images/gallery/street/04-dsc03056.jpg","alt":"DSC03056"},{"src":"images/gallery/street/05-dsc08659.jpg","alt":"DSC08659"},{"src":"images/gallery/street/06-dsc00551.jpg","alt":"DSC00551"},{"src":"images/gallery/street/07-dsc02977.jpg","alt":"DSC02977"},{"src":"images/gallery/street/08-mg-0003-2.jpg","alt":" MG 0003 2"},{"src":"images/gallery/street/09-dsc00540.jpg","alt":"DSC00540"},{"src":"images/gallery/street/10-mg-9930.jpg","alt":" MG 9930"},{"src":"images/gallery/street/11-dsc03028.jpg","alt":"DSC03028"},{"src":"images/gallery/street/12-dsc02446.jpg","alt":"DSC02446"}],"times-lifestyle-week":[{"src":"images/gallery/times-lifestyle-week/01-dsc07725.jpg","alt":"DSC07725"},{"src":"images/gallery/times-lifestyle-week/02-dsc08170.jpg","alt":"DSC08170"},{"src":"images/gallery/times-lifestyle-week/03-dsc06438.jpg","alt":"DSC06438"},{"src":"images/gallery/times-lifestyle-week/04-dsc07691.jpg","alt":"DSC07691"},{"src":"images/gallery/times-lifestyle-week/05-dsc07108.jpg","alt":"DSC07108"},{"src":"images/gallery/times-lifestyle-week/06-dsc07246.jpg","alt":"DSC07246"},{"src":"images/gallery/times-lifestyle-week/07-dsc08148.jpg","alt":"DSC08148"},{"src":"images/gallery/times-lifestyle-week/08-dsc05685.jpg","alt":"DSC05685"},{"src":"images/gallery/times-lifestyle-week/09-dsc07443.jpg","alt":"DSC07443"},{"src":"images/gallery/times-lifestyle-week/10-dsc07047.jpg","alt":"DSC07047"},{"src":"images/gallery/times-lifestyle-week/11-dsc07292.jpg","alt":"DSC07292"},{"src":"images/gallery/times-lifestyle-week/12-dsc06358.jpg","alt":"DSC06358"},{"src":"images/gallery/times-lifestyle-week/13-dsc07720.jpg","alt":"DSC07720"},{"src":"images/gallery/times-lifestyle-week/14-dsc07867.jpg","alt":"DSC07867"},{"src":"images/gallery/times-lifestyle-week/15-dsc07668.jpg","alt":"DSC07668"},{"src":"images/gallery/times-lifestyle-week/16-dsc07442.jpg","alt":"DSC07442"},{"src":"images/gallery/times-lifestyle-week/17-dsc07021.jpg","alt":"DSC07021"},{"src":"images/gallery/times-lifestyle-week/18-dsc05970.jpg","alt":"DSC05970"},{"src":"images/gallery/times-lifestyle-week/19-dsc06843.jpg","alt":"DSC06843"},{"src":"images/gallery/times-lifestyle-week/20-dsc07751.jpg","alt":"DSC07751"},{"src":"images/gallery/times-lifestyle-week/21-dsc07423.jpg","alt":"DSC07423"},{"src":"images/gallery/times-lifestyle-week/22-dsc08116.jpg","alt":"DSC08116"},{"src":"images/gallery/times-lifestyle-week/23-dsc05976.jpg","alt":"DSC05976"},{"src":"images/gallery/times-lifestyle-week/24-dsc07781.jpg","alt":"DSC07781"},{"src":"images/gallery/times-lifestyle-week/25-dsc08276.jpg","alt":"DSC08276"},{"src":"images/gallery/times-lifestyle-week/26-dsc06929.jpg","alt":"DSC06929"},{"src":"images/gallery/times-lifestyle-week/27-dsc07202.jpg","alt":"DSC07202"},{"src":"images/gallery/times-lifestyle-week/28-dsc06652.jpg","alt":"DSC06652"},{"src":"images/gallery/times-lifestyle-week/29-dsc06874.jpg","alt":"DSC06874"},{"src":"images/gallery/times-lifestyle-week/30-dsc08118.jpg","alt":"DSC08118"},{"src":"images/gallery/times-lifestyle-week/31-dsc05759.jpg","alt":"DSC05759"},{"src":"images/gallery/times-lifestyle-week/32-dsc06293.jpg","alt":"DSC06293"},{"src":"images/gallery/times-lifestyle-week/33-dsc07826.jpg","alt":"DSC07826"},{"src":"images/gallery/times-lifestyle-week/34-dsc07198.jpg","alt":"DSC07198"},{"src":"images/gallery/times-lifestyle-week/35-dsc07789.jpg","alt":"DSC07789"},{"src":"images/gallery/times-lifestyle-week/36-dsc07922.jpg","alt":"DSC07922"},{"src":"images/gallery/times-lifestyle-week/37-dsc07843.jpg","alt":"DSC07843"},{"src":"images/gallery/times-lifestyle-week/38-dsc05703.jpg","alt":"DSC05703"},{"src":"images/gallery/times-lifestyle-week/39-dsc06409.jpg","alt":"DSC06409"},{"src":"images/gallery/times-lifestyle-week/40-dsc06783.jpg","alt":"DSC06783"},{"src":"images/gallery/times-lifestyle-week/41-dsc07258.jpg","alt":"DSC07258"},{"src":"images/gallery/times-lifestyle-week/42-dsc07661.jpg","alt":"DSC07661"}],"posters":[{"src":"images/gallery/posters/01-poster-01.jpg","alt":" MG 4655 2"},{"src":"images/gallery/posters/02-poster-02.jpg","alt":" MG 6763 Enhanced NR for poster"},{"src":"images/gallery/posters/03-poster-03.jpg","alt":"Kahi ganga aarti"},{"src":"images/gallery/posters/04-poster-04.jpg","alt":"Poster (1)"},{"src":"images/gallery/posters/05-poster-05.jpg","alt":"#Apurv Singh"},{"src":"images/gallery/posters/06-poster-06.jpg","alt":"Design 02"},{"src":"images/gallery/posters/07-poster-07.jpg","alt":"Design 01"},{"src":"images/gallery/posters/08-poster-08.jpg","alt":" MG 8021"}]};
const galleryTitles = {
  "branding":"Branding", "brochure":"Brochure", "catalogue":"Catalogue", "packaging":"Packaging",
  "ethnic-fashion":"Ethnic Fashion", "newborn":"Newborn", "portraits":"Portraits",
  "street":"Street Photography", "times-lifestyle-week":"Times Lifestyle Week", "posters":"Posters"
};
const modal = document.querySelector("#gallery-modal");
const backdrop = document.querySelector("#gallery-backdrop");
const galleryGrid = document.querySelector("#gallery-grid");
const galleryTitle = document.querySelector("#gallery-title");
const galleryKicker = document.querySelector("#gallery-kicker");
const closeGalleryButton = document.querySelector(".gallery-close");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCounter = document.querySelector("#lightbox-counter");
let activeGallery = [];
let activeIndex = 0;
let returnFocus = null;

function openGallery(key, trigger) {
  activeGallery = galleries[key] || [];
  if (!activeGallery.length) return;
  returnFocus = trigger;
  galleryTitle.textContent = galleryTitles[key] || key;
  galleryKicker.textContent = `${activeGallery.length} IMAGES · COLLECTION`;
  galleryGrid.innerHTML = activeGallery.map((item, i) => `
    <button class="gallery-tile" type="button" data-index="${i}" aria-label="Open image ${i+1} of ${activeGallery.length}">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <span>${String(i+1).padStart(2, "0")} / ${String(activeGallery.length).padStart(2, "0")}</span>
    </button>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.classList.add("modal-open");
  closeGalleryButton.focus();
}
function closeGallery() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  closeLightbox();
  document.body.classList.remove("modal-open");
  if (returnFocus) returnFocus.focus();
}
function showLightbox(index) {
  activeIndex = (index + activeGallery.length) % activeGallery.length;
  const item = activeGallery[activeIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCounter.textContent = `${activeIndex+1} / ${activeGallery.length}`;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}
function moveLightbox(step) { showLightbox(activeIndex + step); }

document.querySelectorAll("[data-gallery]").forEach(trigger => {
  trigger.addEventListener("click", event => {
    event.preventDefault();
    openGallery(trigger.dataset.gallery, trigger);
  });
});
galleryGrid.addEventListener("click", event => {
  const tile = event.target.closest("[data-index]");
  if (tile) showLightbox(Number(tile.dataset.index));
});
closeGalleryButton.addEventListener("click", closeGallery);
backdrop.addEventListener("click", closeGallery);
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("is-open")) closeLightbox();
    else if (modal.classList.contains("is-open")) closeGallery();
  }
  if (lightbox.classList.contains("is-open") && event.key === "ArrowRight") moveLightbox(1);
  if (lightbox.classList.contains("is-open") && event.key === "ArrowLeft") moveLightbox(-1);
});
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".discipline-card, .category-card, .photo-collection, .about-layout").forEach(item => item.classList.add("reveal"));
}
