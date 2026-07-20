export interface Answer {
    text: string;
    isCorrect: boolean;
}

export interface Round {
    id: number;
    question: string;
    answers: Answer[];
}

// function to get a random round from the rounds array
export function getRandomRound(): Round {
    const randomIndex = Math.floor(Math.random() * rounds.length);
    return rounds[randomIndex];
}

const rounds: Round[] = [
    {
        id: 1,
        question: "Who is the bearer of the One Ring for most of the journey to Mount Doom?",
        answers: [
            { text: "Samwise Gamgee", isCorrect: false },
            { text: "Bilbo Baggins", isCorrect: false },
            { text: "Frodo Baggins", isCorrect: true },
            { text: "Meriadoc Brandybuck", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "What is the name of Aragorn's reforged sword?",
        answers: [
            { text: "Glamdring", isCorrect: false },
            { text: "Andúril", isCorrect: true },
            { text: "Sting", isCorrect: false },
            { text: "Orcrist", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "In which mountain must the One Ring be destroyed?",
        answers: [
            { text: "Mount Doom", isCorrect: true },
            { text: "Caradhras", isCorrect: false },
            { text: "Weathertop", isCorrect: false },
            { text: "Erebor", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "What creature was Gollum before the Ring corrupted him?",
        answers: [
            { text: "An Elf", isCorrect: false },
            { text: "A Dwarf", isCorrect: false },
            { text: "A Hobbit-like being called a Stoor", isCorrect: true },
            { text: "A Man of Rohan", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "Who is the Steward of Gondor at the time of the War of the Ring?",
        answers: [
            { text: "Théoden", isCorrect: false },
            { text: "Denethor", isCorrect: true },
            { text: "Faramir", isCorrect: false },
            { text: "Imrahil", isCorrect: false },
        ],
    },
    {
        id: 6,
        question: "How many members are in the Fellowship of the Ring?",
        answers: [
            { text: "7", isCorrect: false },
            { text: "8", isCorrect: false },
            { text: "9", isCorrect: true },
            { text: "10", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "What is the name of Gandalf's horse?",
        answers: [
            { text: "Bill", isCorrect: false },
            { text: "Asfaloth", isCorrect: false },
            { text: "Shadowfax", isCorrect: true },
            { text: "Brego", isCorrect: false },
        ],
    },
    {
        id: 8,
        question: "Which fortress is the site of the great battle in 'The Two Towers'?",
        answers: [
            { text: "Minas Tirith", isCorrect: false },
            { text: "Isengard", isCorrect: false },
            { text: "Osgiliath", isCorrect: false },
            { text: "Helm's Deep", isCorrect: true },
        ],
    },
    {
        id: 9,
        question: "Who kills the Witch-king of Angmar?",
        answers: [
            { text: "Éowyn", isCorrect: true },
            { text: "Aragorn", isCorrect: false },
            { text: "Gandalf", isCorrect: false },
            { text: "Legolas", isCorrect: false },
        ],
    },
    {
        id: 10,
        question: "What race is Legolas?",
        answers: [
            { text: "Dwarf", isCorrect: false },
            { text: "Elf", isCorrect: true },
            { text: "Man", isCorrect: false },
            { text: "Maia", isCorrect: false },
        ],
    },
    {
        id: 11,
        question: "What is the Elvish name for the Grey Pilgrim, Gandalf, among the Elves?",
        answers: [
            { text: "Mithrandir", isCorrect: true },
            { text: "Olórin", isCorrect: false },
            { text: "Curunír", isCorrect: false },
            { text: "Incánus", isCorrect: false },
        ],
    },
    {
        id: 12,
        question: "Which wizard betrays the Free Peoples and allies with Sauron?",
        answers: [
            { text: "Radagast", isCorrect: false },
            { text: "Saruman", isCorrect: true },
            { text: "Gandalf", isCorrect: false },
            { text: "Alatar", isCorrect: false },
        ],
    },
    {
        id: 13,
        question: "What is the name of the giant spider that attacks Frodo near Cirith Ungol?",
        answers: [
            { text: "Ungoliant", isCorrect: false },
            { text: "Shelob", isCorrect: true },
            { text: "Lobelia", isCorrect: false },
            { text: "Smaug", isCorrect: false },
        ],
    },
    {
        id: 14,
        question: "Who is the Lady of Lothlórien?",
        answers: [
            { text: "Arwen", isCorrect: false },
            { text: "Éowyn", isCorrect: false },
            { text: "Galadriel", isCorrect: true },
            { text: "Goldberry", isCorrect: false },
        ],
    },
    {
        id: 15,
        question: "What gift does Galadriel give to Sam Gamgee?",
        answers: [
            { text: "A box of earth from her orchard", isCorrect: true },
            { text: "A phial of starlight", isCorrect: false },
            { text: "A bow of the Galadhrim", isCorrect: false },
            { text: "Three strands of her hair", isCorrect: false },
        ],
    }
];

