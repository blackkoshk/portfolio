/**▼ モーダルの開閉 ▼*****************************************/
export function modal() {
document.addEventListener('DOMContentLoaded', function() {
  const modalOpenBtns = document.querySelectorAll('.js-open__modal');
  const modalCloseBtns = document.querySelectorAll('.js-close__modal');
  const modalBgBtns = document.querySelectorAll('.js-modal__bg');
  const navOpenBtns = document.querySelectorAll('.js-menu');
  const navCloseBtns = document.querySelectorAll('.js-close');
  const navLinkBtns = document.querySelectorAll('.l-header__nav-item a');
  const bodyTag = document.querySelector('body');
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  // フォーカストラップ機能の追加
  function trapFocus(modal) {
    focusableElements = modal.querySelectorAll(focusableElementsString);
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', handleKeyDown);
  }

  function releaseFocus(modal) {
    modal.removeEventListener('keydown', handleKeyDown);
  }

  function handleKeyDown(e) {
    let isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }

  // モーダルを開くボタンにイベントリスナーを追加する
  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('aria-controls');
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      modal.setAttribute('aria-hidden', 'false');
      bodyTag.classList.add('js-modal__stop');
      trapFocus(modal);
      modal.querySelector(focusableElementsString).focus();
    });
  });

  // モーダルを閉じるボタンと背景にイベントリスナーを追加する
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.js-modal__area');
      modal.style.display = "none";
      modal.setAttribute('aria-hidden', 'true');
      bodyTag.classList.remove('js-modal__stop');
      releaseFocus(modal);
    });
  });

  modalBgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.js-modal__area');
      modal.style.display = "none";
      modal.setAttribute('aria-hidden', 'true');
      bodyTag.classList.remove('js-modal__stop');
      releaseFocus(modal);
    });
  });

  // ウィンドウ全体をクリックしたときにモーダルを閉じる
  window.addEventListener("click", event => {
    if (event.target.classList.contains("js-modal__area")) {
      const modal = event.target;
      modal.style.display = "none";
      modal.setAttribute('aria-hidden', 'true');
      bodyTag.classList.remove('js-modal__stop');
      releaseFocus(modal);
    }
  });

  // ナビゲーションのイベントリスナー追加
  navOpenBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      bodyTag.classList.add('js-modal__stop');
    });
  });

  navCloseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      bodyTag.classList.remove('js-modal__stop');
    });
  });

  navLinkBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      bodyTag.classList.remove('js-modal__stop');
    });
  });
});

}
/**▲ モーダルを開いたときにスクロールを止める ▲*****************************************/
