const {Router} = require('express');
const authRoute = require('./auth.route');

const route = Router();

route.use('/auth', authRoute );

module.exports = route;