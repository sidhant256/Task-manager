const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Task Manager API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
