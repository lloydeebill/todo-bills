

import './style.css'

import userIcon from './assets/account-icon.svg'
import { showToday } from './today_modules/showToday';
import { showCalendar } from './calendar_modules/showCalendar';
import { showStickyWall } from './sticky_modules/showSticky';
import { showAddTaskWIndow } from './today_modules/addTaskWindow';
import { showAddStickyWindow } from './sticky_modules/addStickyWindow';



document.querySelector('.user-icon').src = userIcon;

showAddTaskWIndow();
showAddStickyWindow();
showStickyWall();

const todayButton = document.querySelector('.user-today');
const calendarButton = document.querySelector('.user-calendar');
const stickyWallButton = document.querySelector('.user-sticky-wall');



todayButton.addEventListener("click",() => {
  showToday();
})

calendarButton.addEventListener("click",() => {
  showCalendar();
})

stickyWallButton.addEventListener("click",() => {
  showStickyWall();
})








