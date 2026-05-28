const authControllers = require('../controllers/authControllers')
const { authMiddleware } = require('../middlewares/authMiddleware')

const router = require('express').Router()

router.post('/admin-login', authControllers.admin_login)
router.get('/get-user', authMiddleware, authControllers.getUser)

module.exports = router

// health/status endpoint
router.get('/status', (req, res) => {
	res.json({ ok: true, msg: 'auth router alive' });
});