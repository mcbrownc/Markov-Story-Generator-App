const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));




app.get('/', (req, res) => {
  console.log('hello')
  res.send('hello');
})

// app.get('/', (req, res) => {
//   console.log('hello')
//   res.send('hello');
// })



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
