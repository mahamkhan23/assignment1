const express = require("express")
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')
})


app.get('/about', (req, res) => {
    res.send('hello from maham')
})

app.get('/contact', (req, res) => {
    res.send('<h1>hello from contact page</h1>')
})
app.get('/homepage', (req, res) => {
    res.send('<h1>hello from home page</h1>')
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})

