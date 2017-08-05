const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'page not found',
    name: 'todo app'
  })
});

app.get('/users', (req, res) => {
  res.send([
    {name: 'me', age: 22},
    {name: 'meme', age: 32},
    {name: 'friend', age: 42},
  ])
})

app.listen(3000)

module.exports.app = app;
