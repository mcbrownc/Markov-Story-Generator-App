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
  const { name } = req.params;
  const deletedTitle = await db.findOneAndDelete({title: name});
  res.locals.deletedTitle = deletedTitle;
  return next();
}

storyController.updateStory = async (req, res, next) => {
  console.log('made it to updateStory')
  const name  = req.params.name;
  console.log('body ' + req.body.title)
  const newStory = req.body.description;
  console.log('newstory ' + newStory)
  const updatedTitle = await db.findOneAndUpdate(
    {title: name},
    {description: newStory},
    {new: true}
    );
  res.locals.updatedTitle = updatedTitle;
  return next();
}

module.exports = storyController;