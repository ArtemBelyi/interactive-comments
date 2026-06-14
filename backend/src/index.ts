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
// Ответы в запросах
// "_id": "6a2ef58e5b5d3487efc9add7",
            // "content": "Tomat comment_1",
            // "score": 0,
            // "user": {
            //     "_id": "6a2ee58505a3d6b95962e100",
            //     "username": "Tomat"
            // },
// Создать CommentsRespDto убрать лишние мвойства для фронта
