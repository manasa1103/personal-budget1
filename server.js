const express = require('express');
const app=express();
const port=3000;

app.use('/', express.static('public'));

const budget ={
    myBudget: [
    {
        title:'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.sendFile('C:\Users\prady\dev\personal-budget1\server.json');
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
}
);


