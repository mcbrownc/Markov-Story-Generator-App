const path = require('path');
const express = require('express');
const storyController = require('./controllers/storyController.js'); 
const db = require('./models/model.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));




app.get('/', (req, res) => {
  console.log('hello')
  res.send('hello');
})

app.get('/db', (req, res) => {
  db.find().exec()
  .then(data => res.json(data))
  
})

app.get('/:name', (req, res) => {
  db.findOne({title: req.params.name}).exec()
  .then(book => res.json(book))
})

app.post('/story', 
  storyController.createStory,
  (req, res) => {
    res.send({title: req.body.title, description: req.body.description});
  })

app.delete('/:name', 
  storyController.deleteStory,
  (req, res) => {
    res.status(200).send(res.locals.deletedTitle)
})

app.patch('/:name', 
  // storyController.updateStory,
  (req, res) => {
    console.log(req)
    res.status(200).send(res.locals.deletedTitle)
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
