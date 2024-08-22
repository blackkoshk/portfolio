import Lenis from '@studio-freight/lenis';
export function lenis() {
/**▼ 慣性スクロール ▼*****************************************/
const setupLenis = () => {
    const lenis = new Lenis({
      lerp: 0.2, // 慣性の強さ
      duration: 1, // スクロールアニメーションの時間
      easing: easeOutQuart, // イージング関数
      smoothTouch: true, // タッチイベントでも慣性スクロールを有効にする
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return lenis;
  };

  // スクロールの速度調整
  const easeOutQuart = (x) => {
    return 1 - Math.pow(1 - x, 4);
  };

  const lenis = setupLenis();
  const stopScroll = () => {
    lenis.stop();
  };
  const startScroll = () => {
    lenis.start();
  };
  const addEventListeners = (elements, event, callback) => {
    elements.forEach((element) => {
      element.addEventListener(event, callback);
    });
  };

  const setup = () => {
    const openButtons = document.querySelectorAll(".js-open__modal");
    const closeButtons = document.querySelectorAll(".js-close__modal");
    const bgButtons = document.querySelectorAll(".js-modal__bg");
    const headerCloseButton = document.querySelectorAll(".js-menu");
    const headerOpenButton = document.querySelectorAll(".js-close");
    const headerLinkButton = document.querySelectorAll(".js-header__nav-list a");

    addEventListeners(headerCloseButton, "click", stopScroll);
    addEventListeners(openButtons, "click", stopScroll);
    addEventListeners(closeButtons, "click", startScroll);
    addEventListeners(headerOpenButton, "click", startScroll);
    addEventListeners(bgButtons, "click", startScroll);
    addEventListeners(headerLinkButton, "click", startScroll);
  };

  setup();

  /**▲ 慣性スクロール ▲*****************************************/
}