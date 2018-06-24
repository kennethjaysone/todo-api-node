//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to delete document: ', err);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({
    //     text: 'Have tea'
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to delete document: ', err);
    // });
    
    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({
    //     text: 'Eat breakfast'
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to delete document: ', err);
    // });

    // Challenge
    // deleteMany & findOneAndDelete by id

    db.collection('Users').deleteMany({
        name: 'Kenneth'
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('Unable to delete document');
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b2e1e04a4db29047a099b02')
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

    //client.close();
});