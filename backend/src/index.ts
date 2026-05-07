import express from 'express';
import { Request, Response } from 'express';
import pgp from 'pg-promise';
import { dbConfig } from './config';

const app = express()
const db = pgp(dbConfig);

app.get('/', (req: Request, res: Response) => {
  res.json(dbConfig)
})

app.listen(3000)