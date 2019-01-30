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

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });
// deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });
// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Joseph'});

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5c4ce5833c93e355f89c7d41")
}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
});


    // db.close(); // Closes the connection with the MongoDB server
});
//can be a AWS, Heroku, or url

// We know how to insert and query data from a database