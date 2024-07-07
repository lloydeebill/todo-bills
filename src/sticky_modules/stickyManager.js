

class Sticky {
  constructor(title,detail) {
    this.id = Date.now();
    this.title = title;
    this.detail = detail;
  }
}

class StickyManager {
  constructor(){
    this.stickyList = this.loadStickies() || [];
  }

  addSticky(title,detail) {
    
    let newSticky = new Sticky(title,detail);

    this.stickyList.push(newSticky);
    this.saveStickies();
  }

  getStickyList() {
    return this.stickyList
  }

  deleteSticky(id) {

    this.stickyList = this.stickyList
    .filter(sticky => sticky.id !== id);
    this.saveStickies();
  }

  saveStickies() {
    localStorage.setItem('stickyList',JSON.stringify(this.stickyList));
  }

  loadStickies() {
    const stickies = localStorage.getItem('stickyList');

    if (stickies) {
      const parsedStickies = JSON.parse(stickies);
      return parsedStickies.map(sticky => new Sticky(sticky.title, sticky.detail));
    }

    return [];
  }
}

const stickyManager = new StickyManager();




export {stickyManager};