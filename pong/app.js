const fs = require('node:fs')
const express = require('express')


const saveToFile = (str) => {
  fs.writeFile('/usr/src/app/files/pong.txt', str, err => {
        if(err) {
            console.error(err)
        } else {
            console.info("File write successful!")
        }
  })
}

const app = express()
const port = 3000
let reqCount = 0;
const output = `Pings / Pongs: ${reqCount}`
saveToFile(output);



app.get('/pingpong', (req, res) => {
    res.send(reqCount);
    reqCount += 1;
    const output = `Pings / Pongs: ${reqCount}`
    saveToFile(output)
    
})

app.listen(port, () => {
  console.log(`Pong app listening on port ${port}`)
})
