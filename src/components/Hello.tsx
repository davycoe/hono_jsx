export const Hello = () => (
  <>
    <h1 class="text-red-300">Hello, Cloudflare from component!</h1>

    <astro-heart>
      <button aria-label="Heart">💜</button> × <span>0</span>
    </astro-heart>
  </>
);

export const Counter = () => {
  class AstroHeart extends HTMLElement {
    constructor() {
      super();
      let count = 0;

      const heartButton = this.querySelector("button");
      const countSpan = this.querySelector("span");

      // Each time the button is clicked, update the count.

      if (heartButton && countSpan) {
        heartButton.addEventListener("click", () => {
          count++;
          countSpan.textContent = count.toString();
        });
      }
    }
  }
  return customElements.define("astro-heart", AstroHeart);
};
