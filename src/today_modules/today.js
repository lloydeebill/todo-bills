
import { showTaskList } from "./listToday";

function showToday() {
  const content = document.querySelector('.user-content');

  const contentTitle = document.createElement('h1');


  const contentContainer = document.createElement('div'); 
  contentContainer.classList.add('content-container');

  contentTitle.innerText = "TODAY ";

  content.append(contentTitle,contentContainer);

  showTaskList();


}


export {showToday};



