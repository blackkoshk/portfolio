
<?php
var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>シンプルモーダル</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
        }

        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #45a049;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            max-width: 500px;
            width: 80%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            position: relative;
        }

        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
            color: #777;
            padding: 0;
        }

        .close-button:hover {
            color: #333;
            background: none;
        }

        .modal-header {
            margin-top: 0;
            color: #333;
            padding-right: 30px;
        }

        .modal-footer {
            margin-top: 20px;
            text-align: right;
        }
    </style>
</head>
<body>
<form method="POST" action="">
    <div><label>題名：<input type="text" id="title" name="title"></label></div>
    <div><label>著者：<input type="text" id="author" name="author"></label></div>
    <input type="submit" name="submit" value="検索">
</form>
    <button id="openModalBtn">モーダルを開く</button>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <button class="close-button">&times;</button>
            <h2 class="modal-header">モーダルタイトル</h2>
            <p>ここにモーダルの内容が入ります。テキスト、画像、フォームなど様々なコンテンツを配置できます。</p>
            <div class="modal-footer">
                <button id="closeModalBtn">閉じる</button>
            </div>
        </div>
    </div>

    <script>
        // モーダル要素を取得
        const modal = document.getElementById('myModal');
        
        // 開くボタンを取得
        const openBtn = document.getElementById('openModalBtn');
        
        // 閉じるボタンを取得
        const closeBtn = document.getElementById('closeModalBtn');
        const closeX = document.querySelector('.close-button');
        
        // 開くボタンのクリックイベント
        openBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
        
        // 閉じるボタンのクリックイベント
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // ×ボタンのクリックイベント
        closeX.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // モーダルの外側をクリックしたときに閉じる
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    </script>
</body>
</html>