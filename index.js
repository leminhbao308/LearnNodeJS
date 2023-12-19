const express = require('express');

const app = express()
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.json({
        name: "Le Minh Bao",
        website: "leminhbao.com"
    })
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('0399405711')
})