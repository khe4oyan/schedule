// classes
import SingleLesson from '../classes/SingleLesson.class.js';
import DoubleLesson from '../classes/DoubleLesson.class.js';

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
    new DoubleLesson(
      new SingleLesson(lessons.java, "5401, 5102", "Մանուկյան  Վ․ Սաֆարյան Ա․", "09:30", "10:50").isLab(),
      new SingleLesson(lessons.excel, 5701, "Թումանյան Ն․", "09:30", "10:50").isLesson(),
    ),
    new SingleLesson(lessons.java, 5401, "Մանուկյան  Վ․", "11:00", "12:20").isLesson(),
    new SingleLesson(lessons.fizcult, null, "Ինյան", "12:50", "14:10"),
    new DoubleLesson(
      new SingleLesson(lessons.infoSecurity, 5102, "Մինասյան Լ․", "14:20", "15:40").isLesson(),
      new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "14:20", "15:40").isLesson(),
    ),
  ],

  [ // Вторник
    new SingleLesson(lessons.entr, 51302, "Մարկոսյան Մ․", "09:30", "10:50").isLesson().isPractice(),
    new SingleLesson(lessons.java, "5706, 5103", "Մանուկյան  Վ․ Սաֆարյան Ա․", "11:00", "12:20").isLab(),
    new SingleLesson(lessons.marketing, 5011, "Վարդանյան Գ․", "12:50", "14:10").isLesson().isPractice(),
    new DoubleLesson(
      null,
      new SingleLesson(lessons.php, 5704, "Մխիթարյան Լ․", "14:20", "15:40").isLab().group_2(),
    ),
  ],

  [ // Среда
    new SingleLesson(lessons.photoshop, "5104, 5119", "Ռահանյան Գ․ Նորեկյան Ա․", "09:30", "10:50").isLab(),
    new SingleLesson(lessons.infoSecurity, 5102, "Մինասյան Լ․ Մխիթարյան Լ․", "11:00", "12:20").isLab(),
    new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "12:50", "14:10").isLesson(),
    new DoubleLesson(
      new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․", "14:20", "15:40").isLab().group_2(),
      new SingleLesson(lessons.excel, 5117, "Մարուխյան Ա․", "14:20", "15:40").isLab().group_2(),
    ),
  ],

  [ // Четверг
    new SingleLesson(lessons.photoshop, 5105, "Ռահանյան Գ. Նորեկյան Ա.", "09:30", "10:50").isLab(),
    new SingleLesson(lessons.entr, 1401, "Մարկոսյան Մ․", "11:00", "12:20").isLesson().isPractice(),
    new SingleLesson(lessons.excel, "5120, 5121", "Թումանյան Ն․ Մարուխյան Ա․", "12:50", "14:10").isLab(),
    new DoubleLesson(
      new SingleLesson(lessons.marketing, 51305, "Վարդանյան Գ․", "14:20", "15:40").isLesson(),
      null,
    ),
  ],

  [ // Пятница
    new DoubleLesson(
      new SingleLesson(lessons.excel, 5704, "Թումանյան Ն․", "09:30", "10:50").isLab().group_1(),
      new SingleLesson(lessons.math, 5702, "Հարությունյան Է․", "09:30", "10:50").isPractice(),
    ),
    new SingleLesson(lessons.math, 12304, "Հարությունյան Է․", "11:00", "12:20").isLesson().isPractice(),
    new SingleLesson(lessons.entr, 5005, "Մարկոսյան Մ․", "12:50", "14:10").isLesson().isPractice(),
    new SingleLesson(lessons.php, 51009, "Պողոսյան Մ․ Մխիթարյան Լ․", "14:20", "15:40").isLab(),
  ],
];
