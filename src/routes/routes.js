const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.getIndex ) 
router.get('/login', controllers.getLogin ) 

module.exports = router;