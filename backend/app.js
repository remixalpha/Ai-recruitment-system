const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const hrRoutes = require('./routes/hrRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/Ai', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB Connected');
});

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/hr', hrRoutes);

// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
