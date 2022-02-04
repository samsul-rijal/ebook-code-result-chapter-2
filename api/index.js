const express = require('express')

const app = express()

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/home', function (req, res) {
    // setHeader(res)
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.render('index')
})

const port = 5000
app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})

// function setHeader(res) {
//     res.setHeader("Content-Type", "text/html");
//     res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
// }