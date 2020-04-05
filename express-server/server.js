var express = require('express');
var app = express();
 
app.get('/', (req,res) => {
    res.send("hello world, my first expressJS and NodeJS backend service");
});

app.listen(3000);