const authControllers = require('../controllers/authControllers')

const router = require('express').Router()

router.post('/admin-login', authControllers.admin_login)

module.exports = router

// health/status endpoint
router.get('/status', (req, res) => {
	res.json({ ok: true, msg: 'auth router alive' });
});