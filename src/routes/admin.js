const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/checkAuth');
const adminController = require('../controllers/adminController');

router.get('/admin', isAdmin, adminController.admin);


module.exports = router;