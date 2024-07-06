
import '../style.css';

import deleteIcon from '../assets/delete-icon.svg'


function createDeleteButton() {


  const deleteButton = document.createElement("img");
    deleteButton.src = deleteIcon;
    deleteButton.classList.add('delete-button');



    return deleteButton;
}


export { createDeleteButton }