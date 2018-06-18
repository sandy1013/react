const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

const router = require('./router');

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`); 
});