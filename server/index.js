const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'https://f3a2-2409-40e1-301c-86ad-8110-2b74-47b6-abc.ngrok-free.app'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        // Allow requests with no origin (like mobile apps or curl requests)
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Include credentials if needed
  }));
  
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', pageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
