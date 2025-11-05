import Lesson from './Lesson.class.js';

export default class DoubleLesson extends Lesson{
  constructor(less_odd, less_even) {
    super();

    this.less_odd = less_odd;
    this.less_even = less_even;
  }

  getData(isTopLesson) {
    if (isTopLesson) {
      return this.less_odd?.getData();
    } else {
      return this.less_even?.getData();
    }
  }
}