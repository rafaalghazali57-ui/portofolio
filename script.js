function filterSelection(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

function openModal(card) {
  document.getElementById('modal').style.display = 'flex';

  document.getElementById('modalImg').src =
    card.querySelector('img').src;

  document.getElementById('modalTitle').innerText =
    card.querySelector('h3').innerText;

  document.getElementById('modalDesc').innerText =
    card.querySelector('p').innerText;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}