

import './style.css'

import userIcon from './assets/account-icon.svg'
import { showToday } from './today_modules/showToday';
import { showHome } from './home_modules/showHome';
import { showCalendar } from './calendar_modules/showCalendar';
import { showStickyWall } from './sticky_modules/showSticky';
import { showAddTaskWIndow } from './today_modules/addTaskWindow';
import { showAddStickyWindow } from './sticky_modules/addStickyWindow';



document.querySelector('.user-icon').src = userIcon;

showAddTaskWIndow();
showAddStickyWindow();
showCalendar();


const homeButton = document.querySelector('.user-home');
const todayButton = document.querySelector('.user-today');
const calendarButton = document.querySelector('.user-calendar');
const stickyWallButton = document.querySelector('.user-sticky-wall');

homeButton.addEventListener("click",() => {
  showHome();
})

todayButton.addEventListener("click",() => {
  showToday();
})

calendarButton.addEventListener("click",() => {
  showCalendar();
})

stickyWallButton.addEventListener("click",() => {
  showStickyWall();
})








