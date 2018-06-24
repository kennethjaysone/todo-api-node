//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something else to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //     {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users collection (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Kenneth Jaysone Francis',
    //     age: 34,
    //     location: 'Kuala Lumpur'
    // }, (err, result) => {
    //     if (err)
    //     {
    //         return console.log('Unable to insert user: ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Kenneth Jaysone Francis',
    //     age: 34,
    //     location: 'Kuala Lumpur'
    // }, (err, result) => {
    //     if (err)
    //     {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), 'undefined', 2));
    // });

    client.close();
});