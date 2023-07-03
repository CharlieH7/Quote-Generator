// Variables 

let btn = document.getElementById('new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');


async function getQuote() {
  let response = await fetch('https://api.quotable.io/random');
  let data = await response.json();
  quote.textContent = data.content;
  author.textContent = data.author;
}

btn.addEventListener('click', getQuote);
  
  
  
