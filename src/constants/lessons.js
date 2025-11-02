import { statuses } from '../components/Lesson/Lesson';

class Lesson {
  getData() {
    console.warn("Implement getData method for Lesson inheritance");
  }
}

class SingleLesson extends Lesson {
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

class DoubleLess extends Lesson {
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

const lessons = {
  java: "Գրաֆ․ ինտեր․ ծրագր․",
  excel: "Կիրառ․ Հավելվ․ ստեղծ. միջոց",
  fizcult: "Ֆիզկուլտուրա",
  infoSecurity: "Տեղեկատվ․ անվտանգություն․",
  php: "Դինամիկ վեբ կայքերի նախագծում",
  entr: "Ձեռներեցություն",
  marketing: "Կազմակ․ մարքեթ",
  photoshop: "Կետային գրաֆիկա",
  math: "Դիսկրետ մաթ. հիմ.",
};

export default [
  [ // Понедельник
    new DoubleLess(
      new SingleLesson(lessons.java, "5401, 5102", "Մանուկյան  Վ․ Սաֆարյան Ա․", "09:30", "10:50").isLab(),
      new SingleLesson(lessons.excel, 5701, "Թումանյան Ն․", "09:30", "10:50").isLesson(),
    ),
    new SingleLesson(lessons.java, 5401, "Մանուկյան  Վ․", "11:00", "12:20").isLesson(),
    new SingleLesson(lessons.fizcult, null, "Ինյան", "12:50", "14:10"),
    new DoubleLess(
      new SingleLesson(lessons.infoSecurity, 5102, "Մինասյան Լ․", "14:20", "15:40").isLesson(),
      new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "14:20", "15:40").isLesson(),
    ),
  ],

  [ // Вторник
    new SingleLesson(lessons.entr, 51302, "Մարկոսյան Մ․", "09:30", "10:50").isLesson().isPractice(),
    new SingleLesson(lessons.java, "5706, 5103", "Մանուկյան  Վ․ Սաֆարյան Ա․", "11:00", "12:20").isLab(),
    new SingleLesson(lessons.marketing, 5011, "Վարդանյան Գ․", "12:50", "14:10").isLesson().isPractice(),
    new DoubleLess(
      null,
      new SingleLesson(lessons.php, 5704, "Մխիթարյան Լ․", "14:20", "15:40").isLab().group_2(),
    ),
  ],

  [ // Среда
    new SingleLesson(lessons.photoshop, "5104, 5119", "Ռահանյան Գ․ Նորեկյան Ա․", "09:30", "10:50").isLab(),
    new SingleLesson(lessons.infoSecurity, 5102, "Մինասյան Լ․ Մխիթարյան Լ․", "11:00", "12:20").isLab(),
    new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "12:50", "14:10").isLesson(),
    new DoubleLess(
      new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "14:20", "15:40").isLab().group_2(),
      new SingleLesson(lessons.excel, 5117, "Մարուխյան Ա․", "14:20", "15:40").isLab().group_2(),
    ),
  ],

  [ // Четверг
    new SingleLesson(lessons.photoshop, 5105, "Ռահանյան Գ. Նորեկյան Ա.", "09:30", "10:50").isLab(),
    new SingleLesson(lessons.entr, 1401, "Մարկոսյան Մ․", "11:00", "12:20").isLesson().isPractice(),
    new SingleLesson(lessons.excel, "5120, 5121", "Թումանյան Ն․ Մարուխյան Ա․", "12:50", "14:10").isLab(),
    new DoubleLess(
      new SingleLesson(lessons.marketing, 51305, "Վարդանյան Գ․", "14:20", "15:40").isLesson(),
      null,
    ),
  ],

  [ // Пятница
    new DoubleLess(
      new SingleLesson(lessons.excel, 5704, "Թումանյան Ն․", "09:30", "10:50").isLab().group_1(),
      new SingleLesson(lessons.math, 5702, "Հարությունյան Է․", "09:30", "10:50").isPractice(),
    ),
    new SingleLesson(lessons.math, 12304, "Հարությունյան Է․", "11:00", "12:20").isLesson().isPractice(),
    new SingleLesson(lessons.entr, 5005, "Մարկոսյան Մ․", "12:50", "14:10").isLesson().isPractice(),
    new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․ Մխիթարյան Լ․", "14:20", "15:40").isLab(),
  ],
];
