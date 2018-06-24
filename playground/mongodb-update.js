//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID('5b2f5b21d35e5d9f512d6f0f')
    // }, {
    //     $set: {
    //         complete: false
    //     }    
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });

    // Challenge
    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5b2e1e513ac5e40488cfdf2e')
    }, {
        $set: {
            name: 'Kenneth'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });


    //client.close();
});