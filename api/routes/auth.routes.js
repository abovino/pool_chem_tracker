const router = require('express').Router();
const userRegistration = require('../controller/auth/registration');
const login = require('../controller/auth/login');
const verify = require('../controller/auth/verify');

router.post('/register', userRegistration);
router.post('/login', login);
router.get('/verify', verify);

module.exports = router;