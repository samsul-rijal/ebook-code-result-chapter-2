const express = require('express')
const path = require("path");

const app = express()

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../views"));

app.use("/public", express.static(path.join(__dirname, "../public")));

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/home', function (req, res) {
    setHeader(res)
    res.render('index')
})

app.get('/blog', function (req, res) {
    setHeader(res)
    res.render('blog')
})

app.get('/contact-me', function (req, res) {
    setHeader(res)
    res.render('contact')
})

const port = 5000
app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})

function setHeader(res) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
}