const express = require('express');
const app = express();

app.use(express.static('public')); // don't worry about it
app.use(express.json())

const port = 3000;

app.listen(port, () => {
    console.log(`Example app (the therapy server) listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
    res.send('Hello World! Your first server, impressive! we hope you will enjoy the therapy server')
});

app.post('/api', (req, res) => {
    res.json({
        youSent: req.body
    });
});

app.get('/api', (req, res) => {
    console.log(req.query);

    res.json({
        youAre: 'cool',
        query: req.query,
    });
});