
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const data = require("./data.json");

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    });
    
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
    );
    
    app.get('/budget', (req, res) => {
        res.json(data);
    });
    
    
    app.use('/',express.static('public'));