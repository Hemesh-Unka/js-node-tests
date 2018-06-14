const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Hemesh',
    age: 29
  }, {
    name: 'FakeGuy',
    age: 12
  }, { 
    name: 'FakeGirl',
    age: 200
  }]);
});

app.listen(3000);
module.exports.app = app;