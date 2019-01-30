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

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c4f6bf7745475228409a3dd')
// }, {
//     // use of update operator; this will render the object operable 
//     $set: {
//        // set equal to an object
//        completed: true 
//     }, 
// }, {
//     // update operator
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c4f6bf7745475228409a3dd')
}, {
    $set: {
        name: 'Mary'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    // db.close(); // Closes the connection with the MongoDB server
});
//can be a AWS, Heroku, or url

// We know how to insert and query data from a database