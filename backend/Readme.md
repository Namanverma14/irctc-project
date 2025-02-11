# IRCTC API

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add the required environment variables.
4. Run `node app.js` to start the server.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login a user.
- **POST /api/trains**: Add a new train (Admin only).
- **GET /api/trains**: Get trains between source and destination.
- **POST /api/bookings**: Book a seat on a train.
- **GET /api/bookings**: Get booking details for a user.