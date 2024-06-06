const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/user', (req, res) => {
    res.status(200).send({
        name: 'Tobey'
    });
})

app.post('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        res.status(418).send({ message: 'No name was provided!'});
    }

    res.send({
        name: `NAME: ${name} | ID: ${id}`
    });
})

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})