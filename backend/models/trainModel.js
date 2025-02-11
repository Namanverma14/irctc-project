const db = require('../config/db');

class Train {
    static async create(source, destination, total_seats) {
        const [result] = await db.execute(
            'INSERT INTO trains (source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?)',
            [source, destination, total_seats, total_seats]
        );
        return result;
    }

    static async findByRoute(source, destination) {
        const [rows] = await db.execute(
            'SELECT * FROM trains WHERE source = ? AND destination = ?',
            [source, destination]
        );
        return rows;
    }

    static async updateAvailableSeats(trainId, seats) {
        const [result] = await db.execute(
            'UPDATE trains SET available_seats = available_seats - ? WHERE id = ?',
            [seats, trainId]
        );
        return result;
    }
}

module.exports = Train;