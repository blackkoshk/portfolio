/**▼ マウスストーカー ▼*****************************************/

export function mouseStalker() {
  if (window.matchMedia && window.matchMedia('(min-device-width: 600px)').matches) {
  const mouseStalker = document.querySelector('.js-mouse');
let msPos = {
  // マウスストーカーの位置
  s: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2
  },
  // マウスポインターの位置
  m: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2
  }
};

// マウスストーカーをactiveにする
if (window.matchMedia( "(pointer: fine)" ).matches) {
  document.addEventListener ("mousemove", msActivate);
}
function msActivate() {
  mouseStalker.classList.add('js-mouse_active');
  document.removeEventListener ("mousemove", msActivate);
  // mouseの位置セット
  document.addEventListener('mousemove', function(e){
    msPos.m.x = e.clientX;
    msPos.m.y = e.clientY;
  });
  // アニメーション開始
  requestAnimationFrame(msPosUpdate);
}

// マウスストーカーを動かす関数
function msPosUpdate() {
  msPos.s.x += (msPos.m.x - msPos.s.x) * .8;
  msPos.s.y += (msPos.m.y - msPos.s.y) * .8;
  const x = Math.round(msPos.s.x * 10) / 10;
  const y = Math.round(msPos.s.y * 10) / 10;
  mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)';
  requestAnimationFrame(msPosUpdate);
}

// hover時にclass追加
const stalkerLinkObj = document.querySelectorAll('.js-works__list-link,.js-page-works__list-link');
for (let i = 0; i < stalkerLinkObj.length; i++) {
  stalkerLinkObj[i].addEventListener('mouseover', function(){
    mouseStalker.classList.add('js-mouse_hover');
  });
  stalkerLinkObj[i].addEventListener('mouseout', function(){
    mouseStalker.classList.remove('js-mouse_hover');
  });
}
  }
}
/**▲ マウスストーカー ▲*****************************************/