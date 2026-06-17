import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';

import { config } from './config';
import { connectDB, disconnectDB } from './config/database';
import { responseHandler } from './middlewares/responseHandler';
import authMiddleware from './middlewares/auth'
import userRouter from './routes/user';
import authRouter from './routes/auth';
import commentRouter from './routes/comment';

const app = express()

app.use(express.json());
app.use(cookieParser());

app.use(responseHandler);

app.use(authRouter);

app.use(authMiddleware);

app.use(userRouter);
app.use(commentRouter);

async function startServer(): Promise<void> {
  try {
    await connectDB();
    app.listen(config.port, (): void => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

process.on('SIGINT', async (): Promise<void> => {
  await disconnectDB()
  console.log('MongoDB connection closed');
  process.exit(0);
});

startServer();

// TODO
