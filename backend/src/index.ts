import 'dotenv/config';
import express from 'express';
import { config } from './config';
import { Request, Response } from 'express';
import { connectDB, disconnectDB } from './config/database';

const app = express()

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ name: "Ok" })
})


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