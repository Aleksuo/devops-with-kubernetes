const express = require("express");
const { time } = require("node:console");
const fs = require("node:fs");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        const timestamp = fs.readFileSync('/usr/src/app/files/timestamp.txt', 'utf-8')
        res.send(timestamp)
    } catch {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Log output app listening on port ${port}`)
})