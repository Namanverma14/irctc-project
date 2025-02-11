const jwt = require('jsonwebtoken');
const Train = require('../models/trainModel');
const Booking = require('../models/bookingModel');
require('dotenv').config();

const bookSeat = async (req, res) => {
    const { trainId, seats } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    try {
        const train = await Train.findByRoute(trainId);
        if (train.available_seats < seats) {
            return res.status(400).json({ message: 'Not enough seats available' });
        }
        await Train.updateAvailableSeats(trainId, seats);
        await Booking.create(userId, trainId, seats);
        res.json({ message: 'Seat booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookings = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    try {
        const bookings = await Booking.findByUser(userId);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { bookSeat, getBookings };