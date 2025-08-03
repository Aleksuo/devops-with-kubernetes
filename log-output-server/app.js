const express = require("express");
const fs = require("node:fs");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        const timestamp = fs.readFileSync('/usr/src/app/files/timestamp.txt', 'utf-8')
        const pongCount = fs.readFileSync('/usr/src/app/files/pong.txt', 'utf-8')
        const response = `<div>${timestamp}</div> <div>${pongCount}</div>`
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(response))
    } catch {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Log output app listening on port ${port}`)
})