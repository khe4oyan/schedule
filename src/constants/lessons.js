import { statuses } from '../components/Lesson/Lesson';

class Lesson {
  constructor(title, teacher, room, start, end) {
    this.title = title;
    this.teacher = teacher;
    this.room = room;
    this.start = start;
    this.end = end;
    this.status = statuses.DEFAULT;
  }
}

export default [
  [ // Понедельник
    new Lesson("Lesson 1", "teacher name", 51000, "09:30", "10:15"),
    new Lesson("Lesson 2", "teacher name", 51000, "10:20", "11:05"),
    // new Lesson(),
    // new Lesson(),
    // new Lesson(),
  ],

  [ // Вторник
    new Lesson("Lesson 1", "teacher name", 51000, "09:30", "10:15"),
    // new Lesson(),
    // new Lesson(),
    // new Lesson(),
    // new Lesson(),
  ],

  [ // Среда
    new Lesson("Lesson 1", "teacher name", 51000, "09:30", "10:15"),
    // new Lesson(),
    // new Lesson(),
    // new Lesson(),
    // new Lesson(),
  ],

  [ // Четверг
    new Lesson("Lesson 1", "teacher name", 51000, "09:30", "10:15"),
    // new Lesson("Կետային գրաֆիկա լաբ․", "Պողոսյան Մ․", 5108), // 5120
    // new Lesson("Ձեռներեցություն Դաս, գօռց", "Մարկոսյան Մ․", 1309),
    // new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբ", "Թումանյան Ն․ Մարուխյան Մ․", 5108),
    // new Lesson("Կազմակ․ մարքեթ․ գօրծ․ Դաս․", "Վարդանյան Գ․", 51305),
  ],

  [ // Пятница
    new Lesson("Lesson 1", "teacher name", 51000, "09:30", "10:15"),
    new Lesson("Lesson 2", "teacher name", 51000, "10:20", "10:50"),
    // new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբէ", "Թումանյան Ն․", 5704),
    // new Lesson("Դիսկրետ մաթ․ հիմ․ Դաս․ գործ", "Հարությունյան Է․", 12304),
    // new Lesson("Ձեռներեցություն Դաս․ գործ", "Մարկոսյան Մ․", 5005),
    // new Lesson("Դինամիկ վեբ կայքերի նախագծում Լաբ․", "Պողոսյան Մ․ Մխիթարյան Լ․", 51009),
  ],
];