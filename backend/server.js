const express = require('express');
const cors    = require('cors');
const dotenv  = require('dotenv');
const connectDB      = require('./config/db.js');
const projectRoutes  = require('./routes/projectRoutes.js');
const contactRoutes  = require('./routes/contactRoutes.js');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact',  contactRoutes);

// Health check
app.get('/', (req, res) => res.send('Portfolio API is running'));

// Global error handler (required for Express v5 async errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});
app.use(cors({
  origin: "*", // Sab web domains allowed karne ke liye
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
