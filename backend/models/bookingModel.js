const db = require('../config/db');

class Booking {
    static async create(userId, trainId, seatsBooked) {
        const [result] = await db.execute(
            'INSERT INTO bookings (user_id, train_id, seats_booked) VALUES (?, ?, ?)',
            [userId, trainId, seatsBooked]
        );
        return result;
    }

    static async findByUser(userId) {
        const [rows] = await db.execute('SELECT * FROM bookings WHERE user_id = ?', [userId]);
        return rows;
    }
}

module.exports = Booking;