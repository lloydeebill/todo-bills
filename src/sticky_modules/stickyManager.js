

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

  checkInitialStickies() {
    const initialStickiesCreated = localStorage.getItem('initialStickiesCreated');
    if (!initialStickiesCreated) {
      this.createInitialStickies();
      localStorage.setItem('initialStickiesCreated','true');
    }
  }

  createInitialStickies() {
    const initialStickies = [
      {
        title: 'Lorem ipsum' , 
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis repudiandae harum est minus reprehenderit cum quam animi praesentium at et rerum vero, sed aliquam, vitae eveniet enim itaque nulla.',
        color: 'rgb(245, 245, 135)'
      },
      {
        title: 'Ipsum lorem', 
        detail: `-Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        -Maiores numquam esse in sunt nostrum sapiente aliquid vero accusantium quae`,
        color: 'rgb(255, 179, 93)'},
      {
        title: 'Maioers numquam', 
        detail: `1. Lorem ipsum.2. Maioers numquam 3. Nisi obcaecati 4. Distinctio mollitia`,
        color: 'rgb(122, 183, 252)'},
      {
        title: '',
        detail: 'Ad officiis repudiandae harum est minus reprehenderit cum quam animi praesentium at et rerum vero, sed aliquam, vitae eveniet enim itaque nulla.',
        color: 'rgb(248, 186, 196)'

      }
    ]

    initialStickies.forEach(sticky => this.addSticky(sticky.title,sticky.detail,sticky.color))
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