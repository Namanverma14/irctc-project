import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [trains, setTrains] = useState([]);
    const [token, setToken] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            setToken(response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const handleSearchTrains = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/trains', {
                params: { source, destination },
                headers: { Authorization: `Bearer ${token}` }
            });
            setTrains(response.data);
        } catch (error) {
            alert('Error fetching trains');
        }
    };

    return (
        <div>
            <h1>IRCTC Railway System</h1>

            <div>
                <h2>Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleRegister}>Register</button>
            </div>

            <div>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>

            <div>
                <h2>Search Trains</h2>
                <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
                <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                <button onClick={handleSearchTrains}>Search</button>
            </div>

            <div>
                <h2>Available Trains</h2>
                <ul>
                    {trains.map((train) => (
                        <li key={train.id}>
                            {train.source} to {train.destination} - Seats: {train.available_seats}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;