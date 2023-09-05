const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts.js')

const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayout);

//built-in middleware
app.use(express.static('public'));

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
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
    });
});

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);

    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact,
    });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});