const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ ok: true, msg: 'auth router alive' });
});

module.exports = router;
