import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/lightdb', () => {
    console.log('Connected to mongodb...');
});

const app = express();

//Middleware
app.use('/api', routes);

export default app;