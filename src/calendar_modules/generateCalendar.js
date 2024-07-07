
import { createDeleteButton } from "../shared-modules/deleteButton";

class Calendar {
  constructor(year,month) {
    this.year = year;
    this.month = month;
    this.modal = document.querySelector('.schedule-modal');
    this.closeButton = this.modal.querySelector('.close-button');
    this.currentDayCell = null;

    this.initializeFormListener();
  }

  initializeFormListener() {
    const form = this.modal.querySelector('#addScheduleForm');

    form.addEventListener('submit',(event) => {

      event.preventDefault();
      this.addScheduleCell();
    })

    this.closeButton.addEventListener('click',() => {
      this.modal.style.display = "none"
    })
  }

  generateCalendar() {

    const calendarContainer = document.querySelector('.content-container');
    const calendarMonth = document.createElement('div');
    calendarMonth.classList.add('calendar-month')


    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

    calendarContainer.innerHTML = '';

    const firstDay = new Date(this.year, this.month, 1).getDay();
    const totalDays = new Date(this.year, this.month + 1, 0).getDate();


    for(let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      calendarContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= totalDays; day++) {

      const dayCell = document.createElement('div');
      dayCell.innerText = day;
      dayCell.classList.add('day-cell');
      dayCell.setAttribute('data-day',day);
  
      const dayOfWeek = new Date(this.year, this.month, day).getDay();
      dayCell.innerHTML = `<div>
      <span class="date-number">${day}</span>
      <span class="day-name">${weekdays[dayOfWeek]}</span>
      </div>
      <p class='add-schedule-prompt'>Click to add Schedule</p>`;
  
  
      dayCell.addEventListener('click',() => this.showScheduleModal(dayCell));
  
      calendarMonth.appendChild(dayCell);
  
    }
  
    calendarContainer.append(calendarMonth);


  }

  showScheduleModal(dayCell) {

    this.modal.style.display = "block";
    this.currentDayCell = dayCell;
  }


  addScheduleCell() {

    const scheduleName = this.modal.querySelector('#scheduleName').value;
    const scheduleCheckBox = document.createElement('input');

    scheduleCheckBox.type = "checkbox";
    scheduleCheckBox.id = scheduleName;
    scheduleCheckBox.name = scheduleName;

    const scheduleContent = document.createElement('div');
    scheduleContent.classList.add('schedule-content');
    const addSchedulePrompt = document.querySelector('.add-schedule-prompt');

    if (addSchedulePrompt) {
      addSchedulePrompt.style.display = "none";
    }
    scheduleContent.innerHTML = `<p>${scheduleName}</p>`
    

    const deleteButton = createDeleteButton();

    deleteButton.addEventListener('click',(event)=>{
      event.stopPropagation();
      this.currentDayCell.removeChild(scheduleContent);

      if(this.currentDayCell.querySelectorAll('.schedule-content').length === 0){
        addSchedulePrompt.style.display = "block";
      }
    })

    scheduleCheckBox.addEventListener('click', (event) => {
      event.stopPropagation(); 
    });
  

    scheduleContent.appendChild(scheduleCheckBox);
    scheduleContent.appendChild(deleteButton);
    this.currentDayCell.appendChild(scheduleContent);

    this.modal.style.display = "none";
    this.modal.querySelector('#addScheduleForm').reset();
  }
}





export { Calendar }

