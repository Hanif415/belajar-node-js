const express = require('express');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const send = require('send');
const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(morgan('dev'));

//built-in middleware
app.use(express.static('public'));

// Application middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next()
});

app.use((req, res, next) => {
    console.log('Middleware ke 2');
    next()
});

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Hanif Amrullah',
            email: 'hanif@gmail.com'
        },
        {
            nama: 'Hanif2',
            email: 'hanif2@gmail.com'
        },
        {
            nama: 'Hanif3',
            email: 'hanif3@gmail.com'
        }
    ];
    res.render('index', {
        layout: 'layouts/main-layout',
        nama: 'Hanif Amrullah',
        title: 'Halaman Home',
        mahasiswa,
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});