/**▼ 地球 ▼*****************************************/
import * as THREE from 'three'

export function earth() {

    const W_WIDTH = 1200; // ブラウザの横サイズ
    const W_HEIGHT = 1200; // ブラウザの縦サイズ
    const W_RATIO = window.devicePixelRatio || 1; // ドット比
    
    let camera, scene, renderer, earth; // カメラ、シーン、レンダラー、地球
    
    window.addEventListener('DOMContentLoaded', init);
    
    function init() {
        // カメラを作る
        camera = new THREE.PerspectiveCamera(50, W_WIDTH / W_HEIGHT, 1, 1000);
        camera.position.set(0, 0, 600);
    
        // シーンを作る
        scene = new THREE.Scene();
    
        // ライトを作る1
        let dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 3, 5); // 光の向き
        scene.add(dirLight);
    
        // ライトを作る2
        let ambLight = new THREE.AmbientLight(0x333333, 1);
        scene.add(ambLight);
    
        // レンダラーを作る
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(W_RATIO); // ピクセル比
        renderer.setSize(W_WIDTH, W_HEIGHT);
        renderer.physicallyCorrectLights = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.setClearColor(0x000000, 0);
    
        // HTMLに配置する
        let div = document.querySelector(".js-main__mv-earth");
        div.appendChild(renderer.domElement);
    
        // 地球を配置する
        createEarth();
    
        // アニメーションの開始
        animate();
    }
    
    function createEarth() {
        // 1. テクスチャの読み込み
        let txLoader = new THREE.TextureLoader();
        let normalMap = txLoader.load("./assets/img/earth.webp");
    
        // 2. ジオメトリ
        let geometry = new THREE.SphereGeometry(250, 200, 200);
    
        // 3. マテリアル
        let material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: normalMap
        });
    
        // 4. メッシュ
        earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
    }
    
    function animate() {
        // 地球を回転させる
        earth.rotation.y += 0.002;
    
        // レンダリング
        renderer.render(scene, camera);
    
        // 更新
        requestAnimationFrame(animate);
    }
    
}


/**▲ 地球 ▲*****************************************/