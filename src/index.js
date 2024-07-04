

import './style.css'

import userIcon from './assets/account-icon.svg'
import { showToday } from './today_modules/showToday';
import { showAddTaskWIndow } from './today_modules/addTaskWindow';


document.querySelector('.user-icon').src = userIcon;


showAddTaskWIndow();

showToday();


