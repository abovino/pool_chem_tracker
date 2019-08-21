require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	res.status(200).json({
		username,
		password,
		cat: 'Constantina',
	});
});

app.listen(PORT, (req, res) => console.log(`Listening on ${PORT}`));