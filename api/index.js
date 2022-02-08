const express = require('express')
const path = require("path");

const db = require(path.join(__dirname, '../connection/db'));

const app = express()

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../views"));

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }))

const blogs = [
    {
        id: 1,
        title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
        post_date: '12 Jul 2021 22:30 WIB',
        author: 'Ichsan Emrald Alamsyah',
        content: `Ketimpangan sumber daya manusia (SDM) di sektor digital masih
                    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
                    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
                    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Quam, molestiae
                    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
                    eligendi debitis?`,
    },
];

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/home', function (req, res) {
    setHeader(res)
    res.render('index')
})

const isLogin = true

app.get('/blog', function (req, res) {
    setHeader(res)

    db.connect((err, client, done) => {
        if (err) throw err

        client.query('SELECT * FROM tb_blog', (err, result) => {
            done()
            if (err) throw

            let data = result.rows

            data = data.map((blog) => {
                return {
                    ...blog,
                    post_at: getFullTime(blog.post_at),
                    post_age: getDistanceTime(blog.post_at),
                    isLogin: isLogin
                }
            })

            res.render(
                'blog',
                {
                    isLogin: isLogin,
                    blogs: data
                })
        })
    })
})

app.get('/blog/:id', function (req, res) {
    const blogId = req.params.id
    const blog = blogs.find((item) => item.id == blogId);
    setHeader(res)
    res.render('blog-detail', { blog });
})

app.get('/add-blog', function (req, res) {
    setHeader(res)
    res.render("form-blog")
})

app.post('/blog', function (req, res) {
    const blog = {
        title: req.body.title,
        post_date: '12 Jul 2021 22:30 WIB',
        author: 'Ichsan Emrald Alamsyah',
        content: req.body.content,
    };

    blogs.push(blog);

    res.redirect('/blog');
})

app.get('/delete-blog/:index', function (req, res) {
    const index = req.params.index;

    blogs.splice(index, 1);

    setHeader(res)
    res.redirect('/blog');
});

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