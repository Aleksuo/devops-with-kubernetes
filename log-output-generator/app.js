const fs = require('node:fs')

const randomString = Math.random().toString(36).substring(2, 15);
setInterval(() => {
    const timeStamp = new Date().toISOString();
    const res = `${timeStamp}: ${randomString}`
    fs.writeFile('/usr/src/app/files/timestamp.txt', res, err => {
        if(err) {
            console.error(err)
        } else {
            console.info("File write successful!")
        }
    })
}, 5000)

