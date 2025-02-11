const express = require('express');
const { bookSeat, getBookings } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookings', authenticate, bookSeat);
router.get('/bookings', authenticate, getBookings);

module.exports = router;