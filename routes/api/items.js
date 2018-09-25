const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Items');

// @route   GET api/items
// @desc    Gets all items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Creates an item
// @access  Public
router.post('/', (req, res) => {
  const item = new Item({
    name: req.body.name
  });

  item.save().then(item => res.json(item));
});

// @route   Delete apiitems
// @desc    Deletes an item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
