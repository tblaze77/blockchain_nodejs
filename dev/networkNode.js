var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('dukatoni cryptocurrency');
} )

app.listen(8000);