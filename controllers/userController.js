const User = require('../models/User.js');

const getUsers = async (req, res, next) => {
    try {
        const result = await User.find()
        res.status(200).setHeader('Content-Type', 'application/json').json(result);
    } catch (error) {
        throw new Error(`Error getting users: ${error.message}`)
    }
}