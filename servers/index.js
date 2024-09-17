require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/auth');
const bcrypt = require('bcryptjs');


// CORS configuration
const corsOptions = {
    origin: 'https://laptop-ecom.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

const PORT = process.env.PORT || 5173;
const jwtSecret = process.env.JWTSECRET;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database is connected successfully: ${connect.connection.host}`);
    } catch (e) {
        console.error(e);
    }
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/', 'index.html'));
});

// API Routes
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is an API response' });
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        return res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ message: 'User already exists' });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ userID: user._id }, jwtSecret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
