const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // 環境変数からポートを取得

// 静的ファイルの提供
app.use(express.static(path.join(__dirname)));

// ルートハンドラ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running.......!`);
    
});

