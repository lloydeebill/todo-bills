

import { stickyManager } from "./stickyManager";
import { showStickyWall } from "./showSticky";

function showAddStickyWindow() {


  const addStickyButton = document.querySelector('.add-sticky');
  const modal = document.querySelector('.sticky-modal');
  const closeButton = modal.querySelector('.close-button');

  addStickyButton.addEventListener("click", () => {
  modal.style.display = "block";

  })

  closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  })

  const colorPicker = document.querySelector('#stickyColorPicker');
  const colorOptions = colorPicker.querySelectorAll('.color-option');
  const stickyColorInput = document.querySelector('#stickyColor');

  colorOptions.forEach(option => {
    option.addEventListener('click',()=> {
      const selectedColor = option.getAttribute('data-color');
      stickyColorInput.value =selectedColor;

      colorOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    })
  })

  const addStickyForm = document.querySelector('#addStickyForm');

  addStickyForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const stickyName = document.querySelector('#stickyName').value;
    const stickyDetail = document.querySelector('#stickyDetail').value;
    const stickyColor = document.querySelector('#stickyColor').value;

    stickyManager.addSticky(stickyName, stickyDetail, stickyColor);

    document.querySelector('#stickyName').value = '';
    document.querySelector('#stickyDetail').value = '';
    document.querySelector('#stickyColor').value = '';

    colorOptions.forEach(opt => opt.classList.remove('selected'));
    colorOptions[0].classList.add('selected');

    modal.style.display = 'none';

    showStickyWall();
  })

}

export { showAddStickyWindow }; 