require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const User = require('./models/auth')
const bcrypt = require('bcryptjs')

const PORT = process.env.PORT || 5173;
const jwtSecret = process.env.JWTSECRET;


const connectDB = async () => {

    try {  
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`database is connected sucessfully: ${connect.connection.host}`);
    } catch (e) {
        console.error(e);
    }
}     
    
app.use(express.static('public'));

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle the '/' route on the server by serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});      

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://laptop-ecom.vercel.app'); // Replace with your actual origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
       
// const corsOptions = {
//     origin: 'https://laptop-ecom.vercel.app',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies to be sent
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };

// // Use CORS middleware
// app.use(cors(corsOptions));

app.use(express.json());
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;


          // Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }


        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Try to create the user
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

        // Check if all fields are provided
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // Generate JWT token or other login success actions here
        const token = "JWT_TOKEN_PLACEHOLDER"; // Generate your JWT here

        res.status(200).json({ 
            message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error); // Log the actual error
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



// app.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
        
//         // Test for user existence
//         const user = await User.findOne({ username });
        
//         if (!user) {
//             return res.status(401).json({ message: 'invalid credentials' });
//         }

//         // Compare the entered password with the stored hashed password
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {        
//             return res.status(401).json({ message: 'Invalid Credentials' });
 
//         }
 
//         // Generate a JWT token
//         const token = jwt.sign({ userID: user._id }, jwtSecret, {expiresIn: '1h'});
//         res.cookie('token', token, { httpOnly: true });

//         // Redirect to home page
//         // res.status(200).json({ success: true, redirectUrl: '/dashboard' });
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ message: 'An error occurred' });
//     }
// });


connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
