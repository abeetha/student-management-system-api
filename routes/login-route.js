const express = require('express')
const router = express.Router();

const { getAllUsers, addUser } = require('../controller/login_controller')

router.post('/login', getAllUsers)
router.post('/register', addUser)

module.exports = router;