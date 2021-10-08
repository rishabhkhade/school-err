require("dotenv").config();

import express from 'express';
import logger from 'morgan';

import cors from 'cors';

import routes from './routes';

const app = express() // setup express application

app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', routes);


app.listen(process.env.PORT, (err) => {
    if (err) return console.log(`can not listen to port: ${process.env.PORT}`);
    console.log(`server is listening to port: ${process.env.PORT}/`);
});
