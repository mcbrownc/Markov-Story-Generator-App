const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://mcbrownc:TEyiBYXhSOOqPgaf@cluster0.5tudok3.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(MONGO_URI, {
        // options for the connect method to parse the URI
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // sets the name of the DB that our collections are part of
        dbName: 'MarkovGenerator',
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));





const storySchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
});

module.exports = mongoose.model('story', storySchema);