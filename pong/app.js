import {pool} from "./db.js"
import express from "express"


const app = express()
const port = 3000

app.get('/pingpong', async (req, res) => {
    const result = await pool.query("SELECT nextval('app_count') - 1 AS value");
    const value = result.rows[0].value;
    res.send(value);
})

app.listen(port, () => {
  console.log(`Pong app listening on port ${port}`)
})
