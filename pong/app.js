const express = require('express')
const app = express()
const port = 3000
let reqCount = 0;

app.get('/pingpong', (req, res) => {
    res.send(reqCount);
    reqCount += 1;
})

app.listen(port, () => {
  console.log(`Pong app listening on port ${port}`)
})