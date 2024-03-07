const express = require('express');
const homepingController = require('../../controller/home.controller');
const todoRouter = require('./todo.routes');
const router = express.Router();

router.use('/todos', todoRouter);
router.get('/ping', homepingController);

module.exports = router;