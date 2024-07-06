

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

  const addStickyForm = document.querySelector('#addStickyForm');

  addStickyForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const stickyName = document.querySelector('#stickyName').value;
    const stickyDetail = document.querySelector('#stickyDetail').value;

    stickyManager.addSticky(stickyName, stickyDetail);

    document.querySelector('#stickyName').value = '';
    document.querySelector('#stickyDetail').value = '';

    modal.style.display = 'none';

    showStickyWall();
  })

}

export { showAddStickyWindow }; 