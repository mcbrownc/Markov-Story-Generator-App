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

module.exports = storyController;