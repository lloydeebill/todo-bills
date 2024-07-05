

function showStickyWall() {
  const content = document.querySelector('.user-content');

  const contentTitle = document.createElement('h1');
  contentTitle.classList.add("content-title");

  const contentContainer = document.createElement('div'); 
  contentContainer.classList.add('content-container');

  contentTitle.innerText = "Sticky Wall";


  content.innerHTML = ''; 
  content.append(contentTitle,contentContainer);



}


export {showStickyWall};



