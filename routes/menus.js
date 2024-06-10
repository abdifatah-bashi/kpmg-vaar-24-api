const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');
const upload = require('../middleware/upload');

// Create a new menu with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const menu = new Menu({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      image: req.file ? req.file.path : null, // Save image path
    });
    await menu.save();
    res.status(201).send(menu);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all menu
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).send(menus);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a menu by ID
router.get('/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).send();
    }
    res.status(200).send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a menu by ID
router.delete('/:id', async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).send();
    }
    res.status(200).send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
