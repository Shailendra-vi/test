const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log(req.socket.remoteAddress);
    res.send('Hello')
})

app.listen(3000);