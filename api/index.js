const express = require('express');

const app = express();

app.get('/', function (req, res) {
    setHeader(res)
    res.send('Hello World');
});

const port = 5000;
app.listen(port, function () {
    console.debug(`Server running on port ${port}`);
});

function setHeader(res) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
}