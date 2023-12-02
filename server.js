// const sum = (a, b) => a + b;
// console.log(sum(10, 5));
// =====================================

// const express = require('express');
// const bodyParser = require('body-parser');

import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes
import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

// middleware- промежуточное ПО

app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
