/**▼ ローディング処理 ▼*****************************************/

export function loading() {
    window.addEventListener('load', function(){
        const css=document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("type","text/css");
        css.setAttribute("href","/assets/css/animation.css");
        document.getElementsByTagName("head")[0].appendChild(css);
    })
    window.onpageshow = function(event){
        if (event.persisted){
            window.location.reload();
        }
    };

    const updateRootSize = () => {
    // ビューポート幅を取得
    const viewportWidth = window.innerWidth;

    // ドキュメントのルート要素を取得
    const rootElement = document.documentElement;

    // --size の値を設定
    rootElement.style.setProperty('--size', `${viewportWidth}px`);
    };

      // 初期化時に実行
    updateRootSize();

      // ウィンドウのリサイズ時に実行
    window.addEventListener('resize', updateRootSize);

}
/**▲ ローディング処理 ▲*****************************************/