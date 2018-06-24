//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2a6e3029ccf804e639c6af')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, 'undefined', 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos: ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos count: ', err);
    // });

    db.collection('Todos').find({
        text: 'Eat lunch'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(docs.length);
        console.log(JSON.stringify(docs, 'undefined', 2));
    }, (err) => {
        console.log('Unable to fetch todos: ', err);
    });
   
    //client.close();
});