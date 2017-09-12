const path = require('path');
const express = require('express');
const app = express();

var db = require('./db');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/get-user-list', function(request, response) {
    var collection = db.get().collection('cave-users');

    collection.find().toArray(function(err, docs) {
        response.send(docs);
    });
});

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

db.connect('mongodb://batman:noname@ds125994.mlab.com:25994/batman-cave', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(PORT, error => {
            error
                ? console.error(error)
                : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
        });
    }
});
