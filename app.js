const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Post created'
    });
});

app.post('/api/login', (req, res) => {
    //Mock User
    const user = {
        id: 1,
        username: 'Saral',
        email: 'saralbjr@gmail.com'
    }
    jwt.sign({user: user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});

const PORT = 5000;
app.listen(5000, ()=> console.log(`Server started on ${PORT}`))
