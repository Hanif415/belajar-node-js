// const { tanyaPertanyaan, simpanContact } = require('./contacts');


// const main = async () => {
//     const nama = await tanyaPertanyaan('Masukan nama anda: ');
//     const email = await tanyaPertanyaan('Masukan email anda: ');
//     const noHp = await tanyaPertanyaan('Masukan noHp anda: ');

//     simpanContact(nama, email, noHp);
// }

// main();

// rl.question('Masukana nama anda : ', (nama) => {
//     rl.question('Masukana umur anda : ', (umur) => {
//         console.log(`Terimakasih ${nama} anda berumur ${umur}`);
//         rl.close();
//     });
// });

// rl.question('Masukana nama anda : ', (nama) => {
//     rl.question('Masukana No Telp anda : ', (noHp) => {
//         const contact = { nama, noHp };
//         const file = fs.readFileSync('data/contacts.json', 'utf8');
//         const contacts = JSON.parse(file);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         console.log('Data berhasil dimasukan');

//         rl.close();
//     });
// });
const { argv } = require('process');
const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demanOption: true,
            type: 'string',
        },
        email: {
            describe: "Email",
            demanOption: false,
            type: 'string',
        },
        noHp: {
            describe: "Nomor Handphone",
            demanOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    }
}).demandCommand();

yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();
    }
});

// menampilkan detail
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
}).demandCommand();

// menghapus contact
yargs.command({
    command: 'delete',
    describe: 'Mengahupus contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
}).demandCommand();

yargs.parse();
