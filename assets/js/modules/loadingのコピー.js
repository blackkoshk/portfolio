/**▼ ローディング処理 ▼*****************************************/

export function loading() {
    const loading = document.querySelector('.js-loading');
    window.addEventListener('load', () => {
    setTimeout(function() {
    loading.classList.add('hide');
    }, 1000);
});
}
/**▲ ローディング処理 ▲*****************************************/