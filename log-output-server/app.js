const express = require("express");
const fs = require("node:fs");
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        console.log("Handling request...");
        const information = fs.readFileSync('/usr/src/app/config/information.txt', 'utf-8')
        const timestamp = fs.readFileSync('/usr/src/app/files/timestamp.txt', 'utf-8')
        const ppRes = await fetch("http://pong-svc:3000/pingpong", {
            method: "GET",
        });
        const body = await ppRes.text();
        const pongCount = Number(body);
        //const pongCount = fs.readFileSync('/usr/src/app/files/pong.txt', 'utf-8')
        const response = `
        <div>file content: ${information}</div>
        <div>env variable: MESSAGE=${process.env.MESSAGE}</div>
        <div>${timestamp}</div> 
        <div>${pongCount}</div>
        `
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(response))
    } catch (e) {
        console.error(e);
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Log output app listening on port ${port}`)
})