export interface Answer {
  id: number;
  text: string;
}

export interface Round {
  id: number;
  question: string;
  answers: Answer[];
}

export interface GuessRequest {
  answerId: number;
}

export interface GuessResult {
  correct: boolean;
  correctAnswerId: number;
}
