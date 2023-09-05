const mongoose = require('mongoose');

// Koneksi ke database
mongoose.connect('mongodb://127.0.0.1:27017/hanif', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Menambah data
// const contact1 = new Contact({
//     nama: 'Hanif 2',
//     nohp: '083213443678',
//     email: 'hanif2@gmail.com',
// });

// contact1.save().then((contact) => console.log(contact));