const db = require('../models/model.js');

const storyController = {};

storyController.createStory = async (req, res, next) => {
  const newStory = new db({
    title: req.body.title,
    description: req.body.description
  })
  await newStory.save();
  return next();
}

storyController.deleteStory = async (req, res, next) => {
  console.log('made it to deleteStory')
  const { name } = req.params;
  const deletedTitle = await db.findOneAndDelete({title: name});
  res.locals.deletedTitle = deletedTitle;
  return next();
}

module.exports = storyController;