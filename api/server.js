require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(PORT, (req, res) => console.log(`Listening on ${PORT}`));