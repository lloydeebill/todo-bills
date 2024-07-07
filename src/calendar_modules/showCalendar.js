import { Calendar } from "./generateCalendar";

function showCalendar() {
  const content = document.querySelector('.user-content');

  const contentTitle = document.createElement('h1');
  contentTitle.classList.add("content-title");

  const contentContainer = document.createElement('div'); 
  contentContainer.classList.add('content-container');

  const calendarTitle = document.createElement('h2');

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calendar = new Calendar(2024, 6);
  const monthIndex = calendar.month;
  const monthName = monthNames[monthIndex];

  calendarTitle.innerText = `${monthName} ${calendar.year}`

  contentTitle.innerText = "Calendar";

  content.innerHTML = ''; 
  content.append(contentTitle, calendarTitle,contentContainer);

  calendar.generateCalendar();
}

export { showCalendar };
