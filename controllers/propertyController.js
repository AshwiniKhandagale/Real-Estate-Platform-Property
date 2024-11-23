const axios = require('axios');
const Property = require('../models/propertyModel');

// Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate('agentId userId');
    console.log(properties)
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};

// Get property by ID
const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id).populate('agentId userId');
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error: error.message });
  }
};

// Register a new property
const registerProperty = async (req, res) => {
  const { name, location, price, agentId, userId, description } = req.body;

  try {
    const newProperty = new Property({ name, location, price, agentId, userId, description });
    await newProperty.save();
    res.status(201).json({ message: 'Property registered successfully', property: newProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error registering property', error: error.message });
  }
};

// Update a property
const updateProperty = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property updated', property: updatedProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error: error.message });
  }
};

// Delete a property
const deleteProperty = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
};

module.exports = { getAllProperties, getPropertyById, registerProperty, updateProperty, deleteProperty };
