const path = require('path');
const express = require('express');
const storyController = require('./controllers/storyController.js'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));




app.get('/', (req, res) => {
  console.log('hello')
  res.send('hello');
})

app.get('/test', (req, res) => {
  console.log('made it!');
  res.locals.affirmation = 'You did it, you crazy son of a bitch you did it';
  res.status(200).json(res.locals.affirmation);
})

app.post('/story', 
  storyController.createStory,
  (req, res) => {
    console.log(req.body.title + ' ' + req.body.description)
    res.send({title: req.body.title, description: req.body.description});
  })





app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
