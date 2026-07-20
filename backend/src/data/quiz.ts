export interface Answer {
    text: string;
    isCorrect: boolean;
}

export interface Round {
    id: number;
    question: string;
    answers: Answer[];
}

export const round: Round = {
    id: 1,
    question: 'Who are the best band in the world?',
    answers: [
        { text: 'Judas Priest', isCorrect: true },
        { text: 'Motörhead', isCorrect: false },
        { text: 'Iron Maiden', isCorrect: false },
        { text: 'Metallica', isCorrect: false },
    ],
};
