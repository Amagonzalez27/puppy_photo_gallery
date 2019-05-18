const modal = document.querySelector('.modal');
const items = document.querySelectorAll('.item');
const modalImg = document.getElementById('display_image');

items.forEach(item => {
  item.addEventListener('click', function(e) {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
