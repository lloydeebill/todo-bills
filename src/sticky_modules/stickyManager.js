

class Sticky {
  constructor(title,detail) {
    this.id = Date.now();
    this.title = title;
    this.detail = detail;
  }
}

class StickyManager {
  constructor(){
    this.stickyList = [];
  }

  addSticky(title,detail) {
    
    let newSticky = new Sticky(title,detail);

    this.stickyList.push(newSticky);
  }

  getStickyList() {
    return this.stickyList
  }

  deleteSticky(id) {

    this.stickyList = this.stickyList
    .filter(sticky => sticky.id !== id);
  }
}

const stickyManager = new StickyManager();

stickyManager.addSticky("Get Details","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");

stickyManager.addSticky("Research Project","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");


stickyManager.addSticky("Grocery List","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");

stickyManager.addSticky("Research Project","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");


stickyManager.addSticky("Grocery List","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");

stickyManager.addSticky("Research Project","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");


stickyManager.addSticky("Grocery List","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita maiores nam sequi voluptatum ducimus vero doloremque ullam voluptatibus nisi natus repudiandae, sunt neque praesentium? Rem, quidem. Similique, fuga consequatur?");



export {stickyManager};