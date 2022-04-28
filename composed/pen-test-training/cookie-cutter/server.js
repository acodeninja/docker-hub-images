const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 9001

app.set('views', __dirname)
app.engine('html', require('ejs').renderFile)
app.use(require('cookie-parser')())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('form.html', {
        cookies: req.cookies
    })
})

app.post('/', (req, res) => {
    res.cookie(req.body.name, req.body.value, { maxAge: 900000, httpOnly: true })
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
