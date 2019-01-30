// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical to above code; this is destructured

var obj = new ObjectID();
console.log(obj);

// destructuring an object
// var user = {name: 'Joseph', age: 29};
// var {name} = user;
// console.log(name);

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB Server');
//     }
//     console.log('Connected to MongoDB Server');
//     // const db = client.db('Todos');

//     db.collection('Todos').insertOne({
//       text: 'Walk the dog', 
//       completed: false  
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

    // db.collection('Users').insertOne({
    //     name: 'Joseph', 
    //     age: 29,
    //     location: 'Folkston'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close(); // Closes the connection with the MongoDB server
});
//can be a AWS, Heroku, or url
