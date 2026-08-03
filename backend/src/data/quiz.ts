import type { Round, GuessResult } from '@millionaire/shared';

interface InternalAnswer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface InternalRound {
  id: number;
  question: string;
  answers: InternalAnswer[];
}

export function toPublicRound(round: InternalRound): Round {
  return {
    id: round.id,
    question: round.question,
    answers: round.answers.map(({ id, text }) => ({ id, text })),
  };
}

// function to get a random round from the rounds array
export function getRandomPublicRound(): Round {
  const randomIndex = Math.floor(Math.random() * rounds.length);
  return toPublicRound(rounds[randomIndex]);
}

export function gradeGuess(
  roundId: number,
  answerId: number,
): GuessResult | null {
  const round = rounds.find((r) => r.id === roundId);
  if (!round) {
    return null;
  }

  const correctAnswer = round.answers.find((a) => a.isCorrect);
  if (!correctAnswer) {
    return null;
  }

  return {
    correct: answerId === correctAnswer.id,
    correctAnswerId: correctAnswer.id,
  };
}

const rounds: InternalRound[] = [
  {
    id: 1,
    question:
      'Who is the bearer of the One Ring for most of the journey to Mount Doom?',
    answers: [
      { id: 1, text: 'Samwise Gamgee', isCorrect: false },
      { id: 2, text: 'Bilbo Baggins', isCorrect: false },
      { id: 3, text: 'Frodo Baggins', isCorrect: true },
      { id: 4, text: 'Meriadoc Brandybuck', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is the name of Aragorn's reforged sword?",
    answers: [
      { id: 5, text: 'Glamdring', isCorrect: false },
      { id: 6, text: 'Andúril', isCorrect: true },
      { id: 7, text: 'Sting', isCorrect: false },
      { id: 8, text: 'Orcrist', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'In which mountain must the One Ring be destroyed?',
    answers: [
      { id: 9, text: 'Mount Doom', isCorrect: true },
      { id: 10, text: 'Caradhras', isCorrect: false },
      { id: 11, text: 'Weathertop', isCorrect: false },
      { id: 12, text: 'Erebor', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'What creature was Gollum before the Ring corrupted him?',
    answers: [
      { id: 13, text: 'An Elf', isCorrect: false },
      { id: 14, text: 'A Dwarf', isCorrect: false },
      { id: 15, text: 'A Hobbit-like being called a Stoor', isCorrect: true },
      { id: 16, text: 'A Man of Rohan', isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      'Who is the Steward of Gondor at the time of the War of the Ring?',
    answers: [
      { id: 17, text: 'Théoden', isCorrect: false },
      { id: 18, text: 'Denethor', isCorrect: true },
      { id: 19, text: 'Faramir', isCorrect: false },
      { id: 20, text: 'Imrahil', isCorrect: false },
    ],
  },
  {
    id: 6,
    question: 'How many members are in the Fellowship of the Ring?',
    answers: [
      { id: 21, text: '7', isCorrect: false },
      { id: 22, text: '8', isCorrect: false },
      { id: 23, text: '9', isCorrect: true },
      { id: 24, text: '10', isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the name of Gandalf's horse?",
    answers: [
      { id: 25, text: 'Bill', isCorrect: false },
      { id: 26, text: 'Asfaloth', isCorrect: false },
      { id: 27, text: 'Shadowfax', isCorrect: true },
      { id: 28, text: 'Brego', isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Which fortress is the site of the great battle in 'The Two Towers'?",
    answers: [
      { id: 29, text: 'Minas Tirith', isCorrect: false },
      { id: 30, text: 'Isengard', isCorrect: false },
      { id: 31, text: 'Osgiliath', isCorrect: false },
      { id: 32, text: "Helm's Deep", isCorrect: true },
    ],
  },
  {
    id: 9,
    question: 'Who kills the Witch-king of Angmar?',
    answers: [
      { id: 33, text: 'Éowyn', isCorrect: true },
      { id: 34, text: 'Aragorn', isCorrect: false },
      { id: 35, text: 'Gandalf', isCorrect: false },
      { id: 36, text: 'Legolas', isCorrect: false },
    ],
  },
  {
    id: 10,
    question: 'What race is Legolas?',
    answers: [
      { id: 37, text: 'Dwarf', isCorrect: false },
      { id: 38, text: 'Elf', isCorrect: true },
      { id: 39, text: 'Man', isCorrect: false },
      { id: 40, text: 'Maia', isCorrect: false },
    ],
  },
  {
    id: 11,
    question:
      'What is the Elvish name for the Grey Pilgrim, Gandalf, among the Elves?',
    answers: [
      { id: 41, text: 'Mithrandir', isCorrect: true },
      { id: 42, text: 'Olórin', isCorrect: false },
      { id: 43, text: 'Curunír', isCorrect: false },
      { id: 44, text: 'Incánus', isCorrect: false },
    ],
  },
  {
    id: 12,
    question: 'Which wizard betrays the Free Peoples and allies with Sauron?',
    answers: [
      { id: 45, text: 'Radagast', isCorrect: false },
      { id: 46, text: 'Saruman', isCorrect: true },
      { id: 47, text: 'Gandalf', isCorrect: false },
      { id: 48, text: 'Alatar', isCorrect: false },
    ],
  },
  {
    id: 13,
    question:
      'What is the name of the giant spider that attacks Frodo near Cirith Ungol?',
    answers: [
      { id: 49, text: 'Ungoliant', isCorrect: false },
      { id: 50, text: 'Shelob', isCorrect: true },
      { id: 51, text: 'Lobelia', isCorrect: false },
      { id: 52, text: 'Smaug', isCorrect: false },
    ],
  },
  {
    id: 14,
    question: 'Who is the Lady of Lothlórien?',
    answers: [
      { id: 53, text: 'Arwen', isCorrect: false },
      { id: 54, text: 'Éowyn', isCorrect: false },
      { id: 55, text: 'Galadriel', isCorrect: true },
      { id: 56, text: 'Goldberry', isCorrect: false },
    ],
  },
  {
    id: 15,
    question: 'What gift does Galadriel give to Sam Gamgee?',
    answers: [
      { id: 57, text: 'A box of earth from her orchard', isCorrect: true },
      { id: 58, text: 'A phial of starlight', isCorrect: false },
      { id: 59, text: 'A bow of the Galadhrim', isCorrect: false },
      { id: 60, text: 'Three strands of her hair', isCorrect: false },
    ],
  },
];
