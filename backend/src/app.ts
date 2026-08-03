import 'dotenv/config';
import express, { type Express, type Request, type Response } from 'express';
import { getRandomRound } from './data/quiz.ts';
import cors from 'cors';

const app: Express = express();
const port = Number(process.env.PORT);
const corsOrigin = process.env.CORS_ORIGIN;

app.use(cors({ origin: corsOrigin }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/round', (req: Request, res: Response) => {
  res.json(getRandomRound());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
