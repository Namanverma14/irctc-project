# IRCTC Railway Management System

This project is a railway management system similar to IRCTC, where users can check train availability, view seat availability, and book seats. The system supports two types of users: **Admin** and **Login Users**.

## Features
- **User Registration and Login**: Users can register and log in to their accounts.
- **Admin Functions**: Admins can add new trains and update seat availability.
- **Train Search**: Users can search for trains between two stations.
- **Seat Booking**: Users can book seats on available trains.
- **Role-Based Access Control**: Different permissions for admin and regular users.

## Tech Stack
- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: React.js (optional, if implemented)
- **Database**: MySQL

---

## Setup

### Prerequisites
1. **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
2. **MySQL**: Install MySQL from [mysql.com](https://www.mysql.com/).
3. **Git**: Install Git from [git-scm.com](https://git-scm.com/).

### Backend Setup
1. Clone the repository:
   ```bash
   `git clone` https://github.com/your-username/irctc-project.git
   `cd irctc-project/backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the backend folder and add the following environment variables:
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=irctc
    JWT_SECRET=yourjwtsecret
4. Start the backend server:
    `node app.js`

### Frontend Setup (Optional)
1. Navigate to frontend folder `cd ../frontend`
2. Install dependencies: `npm install`
3. Start the frontend dev server: `npm start`
