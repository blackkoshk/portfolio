/**▼ ハンバーガーメニュー ▼*****************************************/


export function nav() {
  function clickToggleMenu() {
    const nav = document.querySelector('.js-header__nav');
    const toggleMenu = document.querySelector('.js-header__btn');

    if (!nav || !toggleMenu || window.getComputedStyle(toggleMenu).display === 'none') return;

    const toggleClick = () => {
      const isOpen = nav.classList.contains('js-open');
      nav.classList.toggle('js-open', !isOpen);
      nav.classList.toggle('js-close', isOpen);
      toggleMenu.classList.toggle('js-open__btn', !isOpen);
      toggleMenu.classList.toggle('js-close__btn', isOpen);
    };

    const closeMenuAnchorLink = () => {
      const currentPathName = location.pathname;
      const menuLinks = [...document.querySelectorAll('.js-header__nav a')];

      menuLinks.forEach(menuLink => {
        const href = new URL(menuLink.href);
        if (currentPathName === href.pathname && href.hash) {
          menuLink.addEventListener('click', toggleClick);
        }
      });
    };

    closeMenuAnchorLink();
    toggleMenu.addEventListener('click', toggleClick);
  }

  clickToggleMenu();


  /**▲ ハンバーガーメニュー ▲*****************************************/

  /**▼ ハンバーガーメニュー内のhoverアクション ▼*****************************************/

//   let currentWidth = window.innerWidth;
//   function onResize(){
//   const newWidth = window.innerWidth;
//   if(
//       (newWidth < 600 && currentWidth >= 600) ||
//       (newWidth >= 600 && currentWidth < 600)
//   ) {
//       location.reload();
//   }
//   currentWidth = newWidth;
//   }
//   window.addEventListener('resize', onResize);
//   if(currentWidth >= 600){
//   if (window.matchMedia && window.matchMedia('(min-device-width: 600px)').matches) {
//   document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('nav a');

//   function animateLinkText(link) {
//     // データ属性から元のテキストを取得
//     const newText = link.dataset.newText;
//     const originalText = link.dataset.originalText;
//     let currentIndex = 0;
//     const interval = 50; // アニメーション間隔
//     const intervalId = setInterval(() => {
//       if(currentIndex < newText.length) {
//         // 部分的に新しいテキストを設定
//         const newLinkText = originalText.substring(0, currentIndex) +
//           newText[currentIndex] +
//           originalText.substring(currentIndex + 1);
//         link.innerText = newLinkText;
//         currentIndex++;
//       } else {
//         clearInterval(intervalId);
//         // 少し待ってから元のテキストに戻す
//         setTimeout(() => {
//           link.innerText = originalText;
//         }, interval);
//       }
//     }, interval);
//   }
//   // もしリンクが見つかった場合のみ処理を実行
//   if (links) {
//     // 各リンクのdata属性に元のテキストを設定
//     links.forEach(link => {
//       link.dataset.originalText = link.innerText;
//     });

//     // マウスオーバー時にアニメーション呼び出し
//     links.forEach(link => {
//       link.addEventListener('mouseover', function() {
//         const newText = this.dataset.newText;
//         animateLinkText(this); // 'this' を使用してリンク要素を渡す
//       });
//     });
//   }
// });
// };
//   };

}


/**▲ ハンバーガーメニュー内のhoverアクション ▲*****************************************/