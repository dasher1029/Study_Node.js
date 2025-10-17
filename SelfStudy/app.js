const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5050;
const rootDirectory = path.join(__dirname, 'cloud_files');

app.get('/', (req,res) => {
    fs.readdir(rootDirectory, (files) => {
        let fileListHtml = '<h1>Private Cloud</h1>'
        fileListHtml += '</ul>';
        files.forEach(file => {
            const filePath = 
        })
    })
})
