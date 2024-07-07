
import { showTaskList } from "./showTaskList";

function showToday() {
  const content = document.querySelector('.user-content');

  const contentTitle = document.createElement('h1');
  contentTitle.classList.add("content-title");

  const contentContainer = document.createElement('div'); 
  contentContainer.classList.add('content-container');


  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDayOfWeek = today.toLocaleDateString('en-US', options);

  const todayTitle = document.createElement('h2');
  todayTitle.innerText = `${currentDayOfWeek}`;

  contentTitle.innerText = "Today";

  content.innerHTML = ''; 
  content.append(contentTitle, todayTitle, contentContainer);

  showTaskList();


}


export {showToday};



