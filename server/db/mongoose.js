var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhose:27017/TodoApp');

module.exports = {mongoose};