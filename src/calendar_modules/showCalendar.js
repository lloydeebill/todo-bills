

function showCalendar() {
  const content = document.querySelector('.user-content');

  const contentTitle = document.createElement('h1');
  contentTitle.classList.add("content-title");

  const contentContainer = document.createElement('div'); 
  contentContainer.classList.add('content-container');

  contentTitle.innerText = "Calendar";


  content.innerHTML = ''; 
  content.append(contentTitle,contentContainer);



}


export {showCalendar};



