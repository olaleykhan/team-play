const { Router } = require('express');
const {AuthController} = require('../controllers/auth.controller');

const route = Router();

// auth/signup
route.post(
    '/signup', AuthController.signUp
)

module.exports = route;
