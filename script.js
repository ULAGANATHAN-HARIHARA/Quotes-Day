// script.js
const localQuotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function newQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    quoteEl.textContent = "“" + data.content + "”";
    authorEl.textContent = "— " + data.author;
  } catch (err) {
    // fallback to local quotes
    const q = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteEl.textContent = "“" + q.text + "”";
    authorEl.textContent = "— " + q.author;
  }
}

function copyQuote() {
  navigator.clipboard.writeText(quoteEl.textContent + " " + authorEl.textContent);
  alert("Quote copied!");
}

function tweetQuote() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteEl.textContent + " " + authorEl.textContent)}`;
  window.open(url, "_blank");
}

// load first quote
newQuote();

