import '../style.css'

import { stickyManager } from "./stickyManager";
import { createDeleteButton } from "../shared-modules/deleteButton";


function createStickyElement(sticky) {

  const stickyElement = document.createElement("div");
  const stickyTitle = document.createElement("h3");
  const stickyDetail = document.createElement("p");

  stickyTitle.innerText = sticky.title; 
  stickyDetail.innerText = sticky.detail;

  const stickyDeleteButton = createDeleteButton();

  stickyDeleteButton.addEventListener("click", () => {
    stickyManager.deleteSticky(sticky.id);
    showStickyList();    
  })

  stickyElement.appendChild(stickyTitle);
  stickyElement.appendChild(stickyDetail);
  stickyElement.appendChild(stickyDeleteButton);

  return stickyElement;
}

function showStickyList() {

  const stickyListContainer = document.querySelector(".content-container");

  stickyListContainer.innerHTML = '';
  
  const stickies = stickyManager.getStickyList();

  stickies.forEach(sticky => {

    const stickyElement = createStickyElement(sticky);
    stickyListContainer.appendChild(stickyElement);

  })
}


export { showStickyList } ;