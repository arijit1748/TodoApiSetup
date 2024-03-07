const express = require('express');
const homepingController = require('../../controller/home.controller');
const router = express.Router();

router.get('/ping', homepingController);

module.exports = router;