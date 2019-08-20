const express = require('express');
const app = express();

app.use(express.json({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(3000, (req, res) => console.log('listening'));