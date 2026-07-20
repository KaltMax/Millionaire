import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/rounds', (req: Request, res: Response) => {
    res.send(round);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const round = [
    Question,
    Answers
];

const question = 'Who are the best band in the world?';

const answers = [
    Answer1: 'Judas Priest', true;
    Answer2: 'Motörhead', false;
    Answer3: 'Metallica', false;
    Answer4: 'Iron Maiden', false;
];