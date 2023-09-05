function cetakNama(nama) {
    return `Hello, nama saya ${nama}`;
}

// console.log(cetakNama('Hanif Amrullah A.'));

const PI = 3.14;
const mahasiswa = {
    nama: 'Hanif Amrullah A.',
    umur: 22,
    cetakMhs() {
        return `Halo nama saya ${this.nama} saya ${this.umur} tahun.`;
    },
}

class Orang {
    constructor() {
        console.log('ORang telah dibuat.');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang };