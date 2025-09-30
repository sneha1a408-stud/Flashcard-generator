const form = document.getElementById('flashcard-form');
const container = document.getElementById('flashcards-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();
  if (question && answer) {
    createFlashcard(question, answer);
    form.reset();
  }
});

function createFlashcard(question, answer) {
  console.log("Creating flashcard:", question, answer); // Add this line

  const card = document.createElement('div');
  card.className = 'flashcard';

  const inner = document.createElement('div');
  inner.className = 'flashcard-inner';

  const front = document.createElement('div');
  front.className = 'flashcard-front';
  front.textContent = question;

  const back = document.createElement('div');
  back.className = 'flashcard-back';
  back.textContent = answer;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  container.appendChild(card);
}

