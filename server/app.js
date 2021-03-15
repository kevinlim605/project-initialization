import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import mongoStore from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// routers

// dotenv config
dotenv.config();

// directory
const __dirname = path.resolve();

// mongoDB server
connectDB();

// connect-mongo

// passport config

var app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session store

// session middleware

// passport auth

// routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(notFound);

// error handler
app.use(errorHandler);

export default app;
