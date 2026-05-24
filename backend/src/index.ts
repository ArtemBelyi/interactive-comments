import 'dotenv/config';
import express from 'express';
import { config } from './config';
import userRouter from './routes/user';
import { connectDB, disconnectDB } from './config/database';

const app = express()

app.use(express.json());

app.use(userRouter);

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
// Написать middleware responseHandler для оберки успешных результатов в обертку с типами { status, text, data } все ответы должны быть одинаковыми 
// Написать middleware errorHandler для обертки ошибок также в одинаковый объект, использовать express-validator