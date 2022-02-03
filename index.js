const express = require('express')

const app = express()

app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/home', function (req, res) {
    res.render('index')
})

const isLogin = false

app.get('/blog', function (req, res) {
    res.render('blog', {
        isLogin: isLogin
    })
})

app.get('/add-blog', function (req, res) {
    res.render("form-blog")
})

app.get('/blog/:id', function (req, res) {
    const blogId = req.params.id
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

app.post('/blog', function (req, res) {
    console.log({
        title: req.body.title,
        content: req.body.content
    })
})

app.listen(5000, function () {
    console.log('server starting on PORT: 5000')
})