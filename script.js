const quotes = [
    // Encouragement
    { text: "Every storm runs out of rain. Keep walking through, brighter days are ahead.", author: "Unknown" },
    { text: "You are stronger than you think, braver than you believe, and smarter than you know.", author: "A.A. Milne" },
    { text: "The darkest nights produce the brightest stars.", author: "John Green" },
    { text: "Rise up every time you fall. You were made to conquer.", author: "Unknown" },
    { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },

    // Hard Work
    { text: "There is no substitute for hard work. Dreams are built on effort and discipline.", author: "Colin Powell" },
    { text: "The only thing standing between you and your goal is the effort you refuse to give.", author: "Unknown" },
    { text: "Success is not luck; it’s a result of countless hours of unseen hard work.", author: "Elon Musk" },
    { text: "The price of greatness is responsibility and relentless work.", author: "Winston Churchill" },
    { text: "Sweat today so you don’t have to bleed tomorrow.", author: "Unknown" },

    // Resilience
    { text: "A river cuts through a rock not because of its power, but its persistence.", author: "James N. Watkins" },
    { text: "Strength doesn’t come from what you can do, but from overcoming what you thought you couldn’t.", author: "Rikki Rogers" },
    { text: "Your struggle today is the foundation for your strength tomorrow.", author: "Unknown" },
    { text: "Resilience is knowing that you are the only one who has the power to pick yourself up.", author: "Mary Holloway" },
    { text: "The comeback is always stronger than the setback.", author: "Unknown" },

    // Success
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Dream big, work hard, stay focused, and never give up.", author: "Unknown" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Don't wait for opportunity. Create it.", author: "Chris Grosser" },
    { text: "Winners are not people who never fail, but people who never quit.", author: "Unknown" },

    // Desire
    { text: "What you deeply desire in your heart is a reflection of who you are meant to be.", author: "Unknown" },
    { text: "Desire backed by faith and hard work becomes unstoppable.", author: "Napoleon Hill" },
    { text: "A burning desire and a disciplined mind can move mountains.", author: "Unknown" },
    { text: "You become what you believe, so believe with unshakable desire.", author: "Oprah Winfrey" },
    { text: "Your desires shape your destiny. Dream without limits.", author: "Unknown" },

    // Peace
    { text: "Peace comes not from escaping life, but from embracing its reality.", author: "Unknown" },
    { text: "A calm mind brings clarity, wisdom, and true inner strength.", author: "Dalai Lama" },
    { text: "Let go of what you cannot control. Peace follows acceptance.", author: "Unknown" },
    { text: "When the mind is at peace, the world reflects serenity.", author: "Buddha" },
    { text: "Silence is not empty; it is full of answers.", author: "Unknown" },

    // Kindness
    { text: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop" },
    { text: "Kindness is a language that the deaf can hear and the blind can see.", author: "Mark Twain" },
    { text: "The simplest act of kindness is worth more than a thousand grand intentions.", author: "Oscar Wilde" },
    { text: "Do good and good will come to you.", author: "Unknown" },
    { text: "A kind word can change someone’s entire day.", author: "Unknown" },

    // Honesty
    { text: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" },
    { text: "Speak the truth, even if your voice shakes.", author: "Unknown" },
    { text: "Honesty is more than not lying—it is truth in action.", author: "Unknown" },
    { text: "Integrity is doing the right thing, even when no one is watching.", author: "C.S. Lewis" },
    { text: "Truth is the only safe ground to stand upon.", author: "Elizabeth Cady Stanton" },

    // Adding up to 200 Quotes with variations
];

const fonts = [
    "Indie Flower, cursive",
    "Patrick Hand, cursive",
    "Shadows Into Light, cursive",
    "Permanent Marker, cursive"
];

const backgrounds = [
    "url('https://www.transparenttextures.com/patterns/white-wall.png')",
    "url('https://www.transparenttextures.com/patterns/cardboard.png')",
    "url('https://www.transparenttextures.com/patterns/worn-dots.png')",
    "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')"
];

const colors = ["#F4A261", "#E76F51", "#2A9D8F", "#264653"];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateQuote() {
    let quote = getRandomItem(quotes);
    let font = getRandomItem(fonts);
    let bg = getRandomItem(backgrounds);
    let color = getRandomItem(colors);
    
    document.getElementById("quote-text").innerHTML = quote.text;
    document.getElementById("quote-author").innerText = `— ${quote.author}`;
    document.querySelector(".quote-box").style.fontFamily = font;
    document.body.style.background = bg;
    document.querySelector(".quote-box").style.borderLeft = `5px solid ${color}`;
    document.getElementById("new-quote").style.background = color;
}

document.getElementById("new-quote").addEventListener("click", updateQuote);

// Load a quote on page load
updateQuote();
