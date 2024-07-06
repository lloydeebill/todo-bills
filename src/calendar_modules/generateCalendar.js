
function generateCalendar(year,month) {

  const calendarContainer = document.querySelector('.content-container');

  const calendarMonth = document.createElement('div');
  calendarMonth.classList.add('calendar-month')

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Array of weekday names


  calendarContainer.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year,month + 1, 0).getDate();
  

  for(let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    calendarContainer.appendChild(emptyCell);
  }

  for (let day = 1; day <= totalDays; day++) {

    const dayCell = document.createElement('div');
    dayCell.innerText = day;
    dayCell.classList.add('day-cell');
    dayCell.setAttribute('data-day',day);

    const dayOfWeek = new Date(year, month, day).getDay();
    dayCell.innerHTML = `<span class="date-number">${day}</span><span class="day-name">${weekdays[dayOfWeek]}</span>`;

    calendarMonth.appendChild(dayCell);

  }

  calendarContainer.append(calendarMonth);
  
}




export { generateCalendar};