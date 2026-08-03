import 'dotenv/config';
import express, { type Express, type Request, type Response } from 'express';
import { getRandomPublicRound, findRound, gradeGuess } from './data/quiz.ts';
import cors from 'cors';

const app: Express = express();
const port = Number(process.env.PORT);
const corsOrigin = process.env.CORS_ORIGIN;

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/round', (req: Request, res: Response) => {
  res.json(getRandomPublicRound());
});

app.post('/round/:id/guess', (req: Request, res: Response) => {
  const roundId = Number(req.params.id);
  const answerId = req.body?.answerId;

  if (!Number.isInteger(roundId) || !Number.isInteger(answerId)) {
    res.status(400).json({ error: 'roundId and answerId must be integers' });
    return;
  }

  const round = findRound(roundId);
  if (!round) {
    res.status(404).json({ error: 'Round not found' });
    return;
  }

  const result = gradeGuess(round, answerId);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
