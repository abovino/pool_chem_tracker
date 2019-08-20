require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../config/db');

const login = async (req, res) => {
	const { username, password } = req.body;
	
	// Get the user by username
	try {
		const user = await db.select(['user_id', 'username', 'password']).from('users').where('username', username).first();
		
		if (!user) {
			res.status(400).json({ error: 'Login failed' });
		}

		// Check if plain text pw === pw in db
		const isCorrectPassword = await bcrypt.compare(password, user.password);

		if (!isCorrectPassword) {
			res.status(400).json({ error: 'Login failed' });
		}

		const payload = {
			user_id: user.user_id,
			username: user.username
		}
		
		const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });

		res.status(200).json({ token });

	} catch (error) {
		res.status(500).json({ error });
	}
}

module.exports = login;
