// script.js
const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const dateEl = document.getElementById("date");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");

// Show today's date (India Time)
function updateDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
  const today = new Date().toLocaleDateString("en-IN", options);
  dateEl.innerText = today;
}

// Generate random quote
function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = `"${quotes[random].text}"`;
  authorEl.innerText = `- ${quotes[random].author}`;
}

// Copy quote to clipboard
function copyQuote() {
  const text = `${quoteEl.innerText} ${authorEl.innerText}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("Quote copied to clipboard!");
  });
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
copyBtn.addEventListener("click", copyQuote);

// Initialize
updateDate();
newQuote();
