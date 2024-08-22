/**▼ 画像にモザイクをかける ▼*****************************************/

export function particle() {
    const num = 30;
    const wrap = document.querySelector(".js-particle");
    const wrapHeight = wrap.offsetHeight;
  
  
    const getRandom = ( min, max ) => {
     return Math.floor( Math.random() * ( max - min ) + min );
    }
  
  
    const target = document.querySelector(".js-particle__item");
    for (let i = 0; i < num; i++){
      const targetClone = target.cloneNode(true);
      wrap.appendChild( targetClone );
    }
  
  
    const arrFunc = [];
  
    document.querySelectorAll(".js-particle__item").forEach((item) => {
  
      item.style.left = getRandom( 0, 94 ) + "%";
      item.style.width = getRandom( 4, 8 ) + '%';
  
  
      const func01 = item.animate(
        [
          { transform: 'translateY(' + wrapHeight / item.offsetHeight * 100 + '%)'},
          { willChange: 'none'},
          { transform: 'translateY(-100%)'},
        ], {
          duration: getRandom( 20000, 20000 ),
          iterations: Infinity,
          delay: - getRandom( 20000, 40000 )
        }
      );
    });
  
    const switching = (e) => {
      if( e[0].isIntersecting ){
        arrFunc.forEach((func) => {
          func.play();
        });
      }else{
        arrFunc.forEach((func) => {
          func.pause();
        });
      }
    }
  
    const createObserver = () => {
      let observer;
      const options = { root: null, rootMargin: "0%", threshold: 0 };
      observer = new IntersectionObserver(switching, options);
      observer.observe(wrap);
    }
    createObserver();
}

/**▲ 画像にモザイクをかける ▲*****************************************/