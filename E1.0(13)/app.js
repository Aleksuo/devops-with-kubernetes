const randomString = Math.random().toString(36).substring(2, 15);
setInterval(() => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp}: ${randomString}`);
}, 5000)