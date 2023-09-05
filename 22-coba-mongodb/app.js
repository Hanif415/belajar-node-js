const { error } = require('console');
const { mongoClient, ObjectID } = require('mongodb');
const MongoClient = require('mongodb/lib/mongo_client');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'hanif';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        console.log('Koneksi gagal!');
    }

    const db = client.db(dbName);

    // Menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: "HanifAA",
    //         email: "hanif@gmail.com"
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data');
    //         }

    //         console.log(result);
    //     }
    // );

    // menambahkan banyak data ke collection mahasiswa
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: 'Hanif 99',
    //         email: 'hanif99@gmail.com',
    //     },
    //     {
    //         nama: 'Hanif 98',
    //         email: 'hanif98@gmail.com',
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Data gagal ditambahkan');
    //     }

    //     console.log(result);
    // });

    // // menampilkan semua data yang ada di collection
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         }));

    // menampilkan semua data berdasarkan kriteria yang ada di collection
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find({ _id: ObjectID('64f5b415a899b41cf8717a91') })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         }));

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID("64f5b59d3e221b54ac9c9856"),
    //     },
    //     {
    //         $set: {
    //             nama: 'Hanif 99',
    //         }
    //     }
    // )

    // updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // mengubah data mahasiswa lebih dari satu
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Hanif 99',
    //     },
    //     {
    //         $set: {
    //             nama: 'Hanif 69',
    //         }
    //     }
    // )

    // Menghapus 1 data dari collection
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID("64f5b59d3e221b54ac9c9856"),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // Menghapus lebih dari 1 dari collection
    db.collection('mahasiswa').deleteMany(
        {
            nama: "HanifAA",
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
});