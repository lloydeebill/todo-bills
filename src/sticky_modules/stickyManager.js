

class Sticky {
  constructor(title,detail,color, id=null) {
    this.id = this.generateUniqueId();
    this.title = title;
    this.detail = detail;
    this.color = color;
  }

  generateUniqueId() {
    return `sn-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
  }
}

class StickyManager {
  constructor(){
    this.stickyList = this.loadStickies() || [];
  }

  addSticky(title,detail,color) {
    
    let newSticky = new Sticky(title,detail,color);

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
      return parsedStickies.map(sticky => new Sticky(sticky.title, sticky.detail, sticky.color));
    }

    return [];
  }
}

const stickyManager = new StickyManager();




export {stickyManager};