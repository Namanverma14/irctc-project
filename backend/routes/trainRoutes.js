const express = require('express');
const { addTrain, getTrains } = require('../controllers/trainController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/trains', authenticate, isAdmin, addTrain);
router.get('/trains', authenticate, getTrains);

module.exports = router;