const express = require('express');
const router = express.Router();
const { getAllProperties, getPropertyById, registerProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');
const verifyToken = require('../middlewares/authMiddleware');

// Get all properties
router.get('/properties', verifyToken, getAllProperties);

// Get property by ID
router.get('/properties/:id', verifyToken, getPropertyById);

// Register a new property
router.post('/properties', verifyToken, registerProperty);

// Update a property
router.put('/properties/:id', verifyToken, updateProperty);

// Delete a property
router.delete('/properties/:id', verifyToken, deleteProperty);

module.exports = router;
