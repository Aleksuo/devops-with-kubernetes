import {pool} from "./db.js"
import * as fs from "node:fs"
import express from "express"

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



app.get('/pingpong', async (req, res) => {
    const result = await pool.query("SELECT nextval('app_count') - 1 AS value");
    const value = result.rows[0].value;
    res.send(value);
   // reqCount += 1;
  //const output = `Pings / Pongs: ${reqCount}`
  //saveToFile(output)
    
})

app.listen(port, () => {
  console.log(`Pong app listening on port ${port}`)
})
