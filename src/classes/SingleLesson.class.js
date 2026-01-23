import { statuses } from "../components/Lesson/Lesson";

import Lesson from "./Lesson.class.js";

export default class SingleLesson extends Lesson {
  constructor(title, room, teacher) {
    super();

    this.title = title;
    this.room = room;
    this.teacher = teacher;
    this.status = statuses.DEFAULT;
    this.type = "";
    this.subGroup = -1;
    this.start = "";
    this.end = "";
  }

  getData() {
    return this;
  }

  isLesson() {
    this.type += "Դաս. ";
    return this;
  }
  isLab() {
    this.type += "Լաբ. ";
    return this;
  }
  isPractice() {
    this.type += "Գործ. ";
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

  time(time) {
    switch (time) {
      case 1:
        this.start = "09:30";
        this.end = "10:50";
        break;

      case 2:
        this.start = "11:00";
        this.end = "12:20";
        break;

      case 3:
        this.start = "12:50";
        this.end = "14:10";
        break;

      case 4:
        this.start = "14:20";
        this.end = "15:40";
        break;

      default:
        console.error(`undefined time`);
        break;
    }

    return this;
  }
}
