const express = require('express')
const path = require("path");

const app = express()

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../views"));

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/home', function (req, res) {
    setHeader(res)
    res.render('index')
})

// const port = 5000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.debug(`Server running on PORT ${PORT}`)
})

function setHeader(res) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
}