/**▼ 画像にモザイクをかける ▼*****************************************/

export function mosaic() {


    // let imageData;
    // let fadeMosaicSize = 0;
    // let THandle;
    // let mem_canvas;
    // let mem_context;
    // let context;
    // let img;

    // // Intersection Observer の設定
    // const observer = new IntersectionObserver(entries => {
    // entries.forEach(entry => {
    //     if (entry.intersectionRatio >= 0.6) {
    //     // .p-about_info_pic が90%以上表示されたら loadImage を呼び出す
    //     loadImage();
    //     // Observer を解除して以降は不要なので解除する
    //     observer.disconnect();
    //     }
    // });
    // }, { threshold: 0.6 }); // threshold を 0.9 に設定

    // // .p-about_info_pic 要素が存在する場合に Observer を開始
    // const pAboutInfoPic = document.querySelector('.js-mosaic');
    // if (pAboutInfoPic) {
    // observer.observe(pAboutInfoPic);
    // }

    // function loadImage() {
    // img = new Image();
    // mem_canvas = document.createElement('canvas');

    // img.onload = function onImageLoad() {
    //     mem_canvas.width = img.width;
    //     mem_canvas.height = img.height;
    //     mem_context = mem_canvas.getContext('2d');
    //     mem_context.drawImage(img, 0, 0);

    //     imageData = mem_context.getImageData(0, 0, mem_canvas.width, mem_canvas.height);
    //     startFadeIn();
    // };
    // img.src = 'img/taiki_abe_pic.webp';

    // const canvas = document.querySelector('.js-mosaic');
    // if (!canvas || !canvas.getContext) {
    //     return false;
    // }
    // context = canvas.getContext('2d');
    // }

    // function startFadeIn() {
    // fadeMosaicSize = 120;
    // THandle = setInterval(onFadeIn, 100);
    // }

    // function onFadeIn() {
    // if (fadeMosaicSize <= 1) {
    //     clearInterval(THandle);
    //     context.drawImage(img, 0, 0);
    // } else {
    //     createMosaic(mem_context, mem_canvas.width, mem_canvas.height, fadeMosaicSize);
    //     context.drawImage(mem_canvas, 0, 0);
    //     fadeMosaicSize = Math.floor(fadeMosaicSize / 1.5);
    // }
    // }

    // function createMosaic(context, width, height, mosaicSize) {
    // let x = 0;
    // let y = 0;

    // for (y = 0; y < height; y += mosaicSize) {
    //     for (x = 0; x < width; x += mosaicSize) {
    //     const cR = imageData.data[(y * width + x) * 4];
    //     const cG = imageData.data[(y * width + x) * 4 + 1];
    //     const cB = imageData.data[(y * width + x) * 4 + 2];

    //     context.fillStyle = `rgb(${cR},${cG},${cB})`;
    //     context.fillRect(x, y, x + mosaicSize, y + mosaicSize);
    //     }
    // }
    // }
}

/**▲ 画像にモザイクをかける ▲*****************************************/