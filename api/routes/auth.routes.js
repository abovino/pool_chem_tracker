const router = require('express').Router();
const userRegistration = require('../controller/auth/registration');
const login = require('../controller/auth/login');

router.post('/register', userRegistration);
router.post('/login', login);

module.exports = router;