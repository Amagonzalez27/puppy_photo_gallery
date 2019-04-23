const modal = document.querySelector('.modal');
const items = document.querySelectorAll('.item');
const modalImg = document.getElementById('display_image');

items.forEach(item => {
  item.addEventListener('click', function(e) {
    modal.style.display = 'block';
    const src = e.target.currentSrc;
    console.log(e.target.src);

    modalImg.src = src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
