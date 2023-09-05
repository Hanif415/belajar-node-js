const express = require('express');
const send = require('send');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // req.json({
    //     nama: 'Hanif',
    //     email: 'hanif@gmail.com',
    //     noHP: '08384114787'
    // })

    res.sendFile('./index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    // res.send('Ini Adalah halaman about!');
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('Ini Adalah halaman Contact!');
    res.sendFile('./contact.html', { root: __dirname });
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

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('<h1>Error: File not found</h1>');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });
//         const url = req.url;

//         switch (url) {
//             case '/about':
//                 renderHTML('./about.html', res);
//                 break;
//             case '/contact':
//                 renderHTML('./contact.html', res);
//                 break;
//             default:
//                 renderHTML('./index.html', res);
//                 break;
//         }
//         // if (url === '/about') {
//         //     renderHTML('./about.html', res);
//         // } else if (url === '/contact') {
//         //     renderHTML('./contact.html', res);
//         // } else {
//         //     // res.write("Hello World.");
//         //     renderHTML('./index.html', res);
//         // }
//     }).listen(port, () => {
//         console.log(`Server is listening on port ${port}..`);
//     });