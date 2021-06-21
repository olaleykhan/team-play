const express = require('express');
const morgan = require('morgan');
const route = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(route);

app.use('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "welcome on board"
    })
});



module.exports = app; 