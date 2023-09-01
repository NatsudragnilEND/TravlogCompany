document.addEventListener('DOMContentLoaded', function() {
  let leftButton = document.querySelector('.td');
  let rightButton = document.querySelector('.ssd');
  let werElement = document.querySelector('.wer');
  let hingElement = document.querySelector('.hing');
  let forElement = document.querySelector('.for');
  let itemElements = document.querySelectorAll('.item');

  let currentIndex = 1;
  let items = [werElement, hingElement, forElement];
  let totalItems = items.length;

  function moveShadowLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }

    updateShadowPosition();
  }

  function moveShadowRight() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }

    updateShadowPosition();
  }

  function updateShadowPosition() {
    for (let i = 0; i < totalItems; i++) {
      let boxShadow = '';
      let transform = '';
      let transition = '';
      let padding = '';
      if (currentIndex === 2) {
        transform = 'translateX(-170px)';
      }
      if (i === currentIndex) {
        boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 41px 89px 0px rgba(0, 0, 0, 0.10)';
        padding = '80px 70px'
        transition = 'transform 0.4s';
        
      }

      itemElements[i].style.boxShadow = boxShadow;
      itemElements[i].style.transform = transform;
      itemElements[i].style.transition = transition;
      itemElements[i].style.padding = padding;
    }
  }

  leftButton.addEventListener('click', moveShadowLeft);
  rightButton.addEventListener('click', moveShadowRight);

  // Изначально установим тень на элементе .hing
  updateShadowPosition();
});
