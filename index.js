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

app.get('/blog', function (req, res) {
    res.render('blog')
})

app.get('/blog/:id', function (req, res) {
    // get selected blog id with params
    const blogId = req.params.id
    // render blog-detail page and send data to view
    res.render('blog-detail', {
        blog: {
            id: blogId,
            title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
            post_date: '12 Jul 2021 22:30 WIB',
            author: 'Ichsan Emrald Alamsyah',
            content: `Ketimpangan sumber daya manusia (SDM) di sektor digital masih
                  menjadi isu yang belum terpecahkan. Berdasarkan penelitian
                  ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
                  meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Quam, molestiae
                  numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
                  eligendi debitis?`
        }
    })
})

app.get('/contact-me', function (req, res) {
    res.render('contact')
})

const port = 5000
app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})