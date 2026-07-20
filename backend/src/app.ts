import express, { type Express, type Request, type Response } from 'express';
import { round } from './data/quiz.ts';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/round', (req: Request, res: Response) => {
    res.json(round);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
