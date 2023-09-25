const express = require('express');
const app = express();

let counter = 0;

app.use((req,res,next)=>{
    res.send(`request number is ${counter}`)
    counter++
})

app.listen(3030, ()=>{
    console.log('listening')
})