export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Round {
  id: number;
  question: string;
  answers: Answer[];
}
