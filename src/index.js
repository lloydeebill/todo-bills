

import './style.css'

import userIcon from './assets/account-icon.svg'
import calendarIcon from './assets/calendar-month.svg'
import stickyIcon from './assets/sticky-note.svg'
import todayIcon from './assets/today.svg'
import { showToday } from './today_modules/showToday';
import { showCalendar } from './calendar_modules/showCalendar';
import { showStickyWall } from './sticky_modules/showSticky';
import { showAddTaskWIndow } from './today_modules/addTaskWindow';
import { showAddStickyWindow } from './sticky_modules/addStickyWindow';



document.querySelector('.user-icon').src = userIcon;
document.querySelector('.calendar-icon').src = calendarIcon;
document.querySelector('.sticky-icon').src = stickyIcon;
document.querySelector('.today-icon').src = todayIcon;

showAddTaskWIndow();
showAddStickyWindow();
showToday();

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








