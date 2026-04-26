function filterSelection(category, btn) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter button');

  // reset active
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // filter gambar
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
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