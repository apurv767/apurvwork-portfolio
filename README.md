# Apurv Singh — Portfolio Starter

A lightweight, responsive portfolio starter for Graphic Design and Photography. It uses plain HTML, CSS, and JavaScript, so there is no build step or package installation required.

## 1. Preview it

1. Download and unzip `apurv-portfolio.zip`.
2. Open the `apurv-portfolio` folder.
3. Double-click `index.html` to open it in your browser.

For a more reliable local preview, you can use VS Code with the Live Server extension, or run a local server from the folder with Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with `Control + C` in the Terminal.

## 2. Replace the placeholders with your own work

The current colored image areas are intentional placeholders. No stock or AI-generated images are included.

1. Create an `images` folder beside `index.html`.
2. Put your own exported images inside it, grouped however you prefer, for example:
   - `images/branding/`
   - `images/catalogue/`
   - `images/brochure/`
   - `images/packaging/`
   - `images/posters/`
   - `images/times-lifestyle-week/`
   - `images/ethnic-fashion/`
   - `images/portraits/`
   - `images/street/`
   - `images/newborn/`
3. When you are ready, replace a placeholder `<div class="... placeholder ...">` in `index.html` with an image element. Example:

```html
<div class="category-visual">
  <img src="images/branding/my-project-cover.jpg" alt="Description of my branding project">
</div>
```

4. Add this CSS to `styles.css` for image areas:

```css
.category-visual img,
.photo-visual img,
.discipline-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

For posters or layouts where the entire artwork must remain visible, use `object-fit: contain` and a suitable background instead of cropping.

Keep the image files inside the project and use relative paths. Avoid remote image URLs.

## 3. Personalize your details

- Search `index.html` for `YOUR.EMAIL@EXAMPLE.COM` and replace it with your real email address.
- Update the About section with your own approved bio.
- Change the hero text if you prefer another introduction.
- Do not add client names or project descriptions unless they are accurate.

## 4. What's included

- `index.html` — all portfolio sections and placeholder areas.
- `styles.css` — visual design, responsive layouts, and subtle motion.
- `script.js` — mobile navigation and small enhancements.
- `images/` — empty folder for your real assets.

## 5. Before publishing

Check all pages and links, add real images and contact details, and review the site on mobile. This starter is not deployed online. Hosting and domain setup are separate steps.

## Design notes

Direction: editorial minimalism; warm off-white background; near-black typography; generous spacing; understated details. Fonts currently use Google Fonts with system fallbacks. If you want the site to work without any external font requests, remove the `@import` line at the top of `styles.css` and the browser will use the fallback fonts.
