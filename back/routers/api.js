var service = require('../service');
var express = require('express');
var router = express.Router();

router.post('/auth', service.authentication);
router.post('/reg', service.registration);
router.get('/logout', service.logout);

module.exports = router;