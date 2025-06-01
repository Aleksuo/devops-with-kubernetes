const express = require("express")
const app = express();
const port = 3000;

const randomString = Math.random().toString(36).substring(2, 15);
setInterval(() => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp}: ${randomString}`);
}, 5000)

app.get('/', (req, res) => {
    res.send(randomString);
})

app.listen(port, () => {
    console.log(`Log output app listening on port ${port}`)
})