import { statuses } from "../components/Lesson/Lesson";

import Lesson from "./Lesson.class.js";

export default class SingleLesson extends Lesson {
  constructor(title, room, teacher, start, end) {
    super();

    this.title = title;
    this.room = room;
    this.teacher = teacher;
    this.start = start;
    this.end = end;
    this.status = statuses.DEFAULT;
    this.type = "";
    this.subGroup = -1;
  }

  getData() {
    return this;
  }

  isLesson() {
    this.type += "Դաս ";
    return this;
  }
  isLab() {
    this.type += "Լաբ. ";
    return this;
  }
  isPractice() {
    this.type += "գործ ";
    return this;
  }

  group_1() {
    this.subGroup = 1;
    return this;
  }
  group_2() {
    this.subGroup = 2;
    return this;
  }
}