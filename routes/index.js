const express = require('express');

const router = express.Router();
const todoController= require('../controller/todoController');

router.get('/',todoController.home);
router.use('/todos',require('./todo'));

module.exports= router;