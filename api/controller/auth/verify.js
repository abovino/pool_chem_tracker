require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (req, res) => {
	const token = req.headers.authorization.split(' ')[1];

	if (!token) {
		res.status(401).json({ error: 'No token, authorization denied' });
	}	

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		res.status(200).json({
			verified: true,
		});
	} catch (error) {
		res.status(401).json({ error: 'Token could not be decoded' });
	}
}

module.exports = verify;