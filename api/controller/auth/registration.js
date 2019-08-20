require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../config/db');

const userRegistration = async (req, res) => {
	const { username, password1, password2, fname = null, lname = null } = req.body;

	// check that the username doesn't already exist
	try {
		let user = await db.select('username').from('users').where('username', username);
		if (user.length > 0) {
			res.status(400).json({ error: 'Username already exists' });
		}
	} catch (error) {
		res.status(500).json({ error });
	}

	// check that passwords match
	if (password1 !== password2) {
		res.status(400).json({ error: 'Passwords do not match' });
	}

	// Create the user
	try {
		const user = { username, fname, lname };
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password1, salt);
		const newUser = await db('users').insert(user).returning(['user_id', 'username']);
		const token = await jwt.sign(newUser[0], process.env.JWT_SECRET, { expiresIn: 360000 });
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ error })
	}
}

module.exports = userRegistration;
