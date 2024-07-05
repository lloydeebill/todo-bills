

import './style.css'

import userIcon from './assets/account-icon.svg'
import { showToday } from './today_modules/showToday';
import { showHome } from './home_modules/showHome';
import { showAddTaskWIndow } from './today_modules/addTaskWindow';


document.querySelector('.user-icon').src = userIcon;

showAddTaskWIndow();
showHome();


const homeButton = document.querySelector('.user-home');
const todayButton = document.querySelector('.user-today');

homeButton.addEventListener("click",() => {
  showHome();
})

todayButton.addEventListener("click",() => {
  showToday();
})





