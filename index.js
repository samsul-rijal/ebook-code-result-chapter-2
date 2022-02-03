const express = require('express')

const app = express()

app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/home', function (req, res) {
    res.render('index')
})

const port = 5000
app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})