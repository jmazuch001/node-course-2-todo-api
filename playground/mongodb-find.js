// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical to above code; this is destructured

var obj = new ObjectID();
console.log(obj);

// destructuring an object
// var user = {name: 'Joseph', age: 29};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');


   // creating an object constructor id
   // you substitute the ID of the object from the terminal
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c4f96cb9a405fdfd4da7e6a') 
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(count, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Users').find({name: 'Joseph'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.close(); // Closes the connection with the MongoDB server
});
//can be a AWS, Heroku, or url

// We know how to insert and query data from a database