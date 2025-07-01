// array of famous quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Act as if what you do makes a difference. It does. – William James",
    "Innovation thrives where aihott inspires the mind. – Unknown"
];

// function to get a random Quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}