const express = require('express');

var app = express();

// Using middleware with app.use
// __dirname is a shortcut for taking directly to that directory and then you concatenate /public
app.use(express.static(__dirname + '/public'));

// The arguments are (1) the URL, and (2) request, response; notice (2) is encapsulated
// The request is what stores the aesthetics of the site 
// The response is what you send back
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>'); // This will be your body data; you CAN send more but this will do for now
    // This next line shows you how to send JSON data
    res.send({
        name: 'Joseph', 
        likes: [
            'Gaming', 
            'Working out', 
            'Cars', 
            'Martial Arts'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle that request'
    });
});

// app.listen(3000);

// optional for app.listen
app.listen(3000, () => {
    console.log('server is up on port 3000');
});