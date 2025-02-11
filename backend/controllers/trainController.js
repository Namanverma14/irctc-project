const Train = require('../models/trainModel');

const addTrain = async (req, res) => {
    const { source, destination, total_seats } = req.body;
    try {
        await Train.create(source, destination, total_seats);
        res.status(201).json({ message: 'Train added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTrains = async (req, res) => {
    const { source, destination } = req.query;
    try {
        const trains = await Train.findByRoute(source, destination);
        res.json(trains);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addTrain, getTrains };