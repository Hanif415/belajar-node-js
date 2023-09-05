const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');
const validator = require('validator');

// console.log(fs);

// menuliskan string ke file secara (synchronous)
// try {
//     fs.writeFileSync('test.txt', 'Hello World secara synchronous');
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file secara (asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara asynchronous', (e) => {
//     console.log(e);
// });

// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);


// menuliskan string ke file secara (synchronous)
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     console.log(err);
//     console.log(data);
// });

// Readline
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// membuat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json bila belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const tanyaPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, rejects) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// }

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    // const file = fs.readFileSync('data/contacts.json', 'utf8');
    // const contacts = JSON.parse(file);'

    const contacts = loadContact();
    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, tolong gunakan nama lain.'));
        return false;
    }

    // check email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid, mohon perbaiki ulang.'));
            return false;
        }
    }

    // check Nomor HP

    if (!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid mohon masukan kembali nomor HP yang sesuai.'));
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('Data berhasil dimasukan'));
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Contact: '));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan.`));
        return false;
    }

    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHp);
    if (contact.email) {
        console.log(contact.noHp);
    }
}

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );

    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan.`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

    console.log(chalk.green.inverse.bold(`contact ${nama} berhasil dihapus`));
}

module.exports = { simpanContact, listContact, detailContact, deleteContact }

// const pertanyaan2 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Masukana email anda : ', (email) => {
//             resolve(email);
//         });
//     });
// }