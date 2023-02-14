// using dotenv file
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// importing routes
import postRoutes from './routes/posts.js';

// using an express
const app = express();

app.use('/posts', postRoutes);

// implementing default middlewares that provided by express
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const MongoDB_URI = process.env.MongoDB_URI;
const PORT = process.env.PORT || 5001;

mongoose.set('strictQuery', true); // must use before implementing db connection
// Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database

// creating database connection usign mongoose
mongoose
  .connect(MongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server runnig on PORT ${PORT}...`))
  )
  .catch((error) => console.log(error));
