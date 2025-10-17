const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5050;
const rootDirectory = path.join(__dirname, 'cloud_files');

app.get('/', (req, res) => {
    fs.readdir(rootDirectory, (err, files) => {
        if (err) {
            console.error('폴더 읽기 오류:', err);
            return res.status(500).send('내부 서버 오류');
        }
        let fileListHtml = '<h1>Private Cloud</h1><ul>';
        if (files.length === 0){
            fileListHtml += '<li>파일이 없습니다.</li>';
        }else {
            files.forEach(file => {
                const filePath = path.join(rootDirectory, file);
                const fileLink = `/download/${file}`;//절대경로 완성하면 실제 다운로드가 가능해짐
                fileListHtml += `<li><a href="${fileLink}" download>${file}</a></li>`;
            });
        }
        fileListHtml += '</ul>';
        res.send(fileListHtml);
    });
});

app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(rootDirectory, filename);
    if (!filePath.startsWith(rootDirectory)){
        return res.status(403).send('금지됨: 이 경로에 대한 접근이 허용되지 않습니다.');
    }
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()){
            return res.status(404).send('파일을 찾을 수 없습니다.');
        }
        res.download(filePath, (downloadErr) => {
            if (downloadErr){
                console.error('파일 다운로드 오류:', downloadErr);
                res.status(500).send('내부 서버 오류');
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${5050} 에서 실행 중입니다.`);
});