var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
//   try {
//     confirm.log();
// } catch(err) {
//     console.error(err);
//     console.log(mongoose.Promise);
// }
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});



// CRUD operations - Create, Read, Update, Delete;
// when you do this, you use the post-http method and you send the resource as a body
// 





// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something

// we are going to have a Mongoose Todo model so that mongoose knows how to store our data


// refer to mongoose schemas


// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//     text: '   Edit this video        ',
//     text: true
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });






// user

// email - require it = trim it - set type - set min lenght of 1

// create a new user
// var User = mongoose.model('User', {
//     email: {
//         type: String, 
//         required: true, 
//         trim: true, 
//         minlength: 1
//     }
// })

// var user = new User({
//     email: 'johnmazuch@gmail.com   '
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// }); 

// if you just deactivate the central components, it will only show the ID
// var otherTodo = new Todo({
    // text: 'Feed the snake',
    // completed: true, 
    // completedAt: 123
// });

// completedAt will let you know WHEN a task is completed

// trim property: elminates leading and trailing white space(s)

// type casting will wrap things in quotes