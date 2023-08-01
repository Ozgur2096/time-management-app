import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';

import authRouter from './routes/auth.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from from homepage');
});

app.use('/api/auth', authRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
startServer();
