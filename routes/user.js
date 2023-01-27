const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);
// equivalent to router.get('/', getUsers); router.post('/', createUser);

module.exports = router; // exporting for use in server.js