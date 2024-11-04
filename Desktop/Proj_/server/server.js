const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');  // Auth routes

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // For parsing JSON requests

// Connect to Database
connectDB();

// API Routes
app.use('/api/auth', authRoutes);  // Attach auth routes

// Default route for server health check
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
