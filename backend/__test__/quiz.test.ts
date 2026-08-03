import { describe, it, expect } from 'vitest';
import {
  toPublicRound,
  getRandomPublicRound,
  gradeGuess,
} from '../src/data/quiz.ts';

describe('toPublicRound', () => {
  it('strips isCorrect while preserving id and text', () => {
    const internalRound = {
      id: 42,
      question: 'Test Question?',
      answers: [
        { id: 1, text: 'Alpha', isCorrect: false },
        { id: 2, text: 'Beta', isCorrect: true },
      ],
    };

    const publicRound = toPublicRound(internalRound);

    expect(publicRound).toEqual({
      id: 42,
      question: 'Test Question?',
      answers: [
        { id: 1, text: 'Alpha' },
        { id: 2, text: 'Beta' },
      ],
    });
  });
});

describe('getRandomPublicRound', () => {
  it('never leaks isCorrect to the public shape', () => {
    const round = getRandomPublicRound();
    for (const answer of round.answers) {
      expect(answer).not.toHaveProperty('isCorrect');
    }
  });
});

describe('gradeGuess', () => {
  const round = {
    id: 1,
    question: 'Which is correct?',
    answers: [
      { id: 1, text: 'Wrong A', isCorrect: false },
      { id: 2, text: 'Right', isCorrect: true },
      { id: 3, text: 'Wrong B', isCorrect: false },
    ],
  };

  it('grades a correct guess as correct', () => {
    expect(gradeGuess(round, 2)).toEqual({ correct: true, correctAnswerId: 2 });
  });

  it('grades a wrong guess as incorrect and reveals the correct id', () => {
    expect(gradeGuess(round, 1)).toEqual({
      correct: false,
      correctAnswerId: 2,
    });
  });
});
