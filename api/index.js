const express = require('express')
const path = require("path");

const app = express()

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../views"));

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/home', function (req, res) {
    // setHeader(res)
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.render('index')
})

// const port = 5000
const PORT = process.env.PORT || 3000;

app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})

// function setHeader(res) {
//     res.setHeader("Content-Type", "text/html");
//     res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
// }