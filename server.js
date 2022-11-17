const express = require('express')
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express()
const port = 443

const optionSSL = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
};

const server = https.createServer(optionSSL, app);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })