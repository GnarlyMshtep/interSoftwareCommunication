const express = require('express');
const app = express();

app.listen('3000');
app.use(express.json())
//app.use(express.static('public'))
/*

*/

app.post('/api/postSomething', (req, res) => {

    res.json({
        youSent: req
    });
});

app.get('/api', (req, res) => {

    res.json({
        youAre: 'cool'
    });
});