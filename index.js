const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send("hello world node server");
})

app.listen(5000, () => {
    console.log('Server on 5000');
})