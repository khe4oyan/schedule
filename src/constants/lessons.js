import { statuses } from '../components/Lesson/Lesson';

class Lesson {
  constructor(title, room, teacher, start, end) {
    this.title = title;
    this.room = room;
    this.teacher = teacher;
    this.start = start;
    this.end = end;
    this.status = statuses.DEFAULT;
  }
}

class DoubleLess {
  constructor(less_odd, less_even) {
    // if only one lesson
    if (!less_odd && less_even) {
      return less_even;
    }

    if (!less_even && less_odd) {
      return less_odd;
    }

    // calculate weeknumber from September 1
    const startTime = new Date(2025, 8, 1).getTime();
    const nowTime = new Date().getTime();
    const passedTime = nowTime - startTime;

    const passedDays = Math.floor(passedTime / 1000 / 60 / 60 / 24);
    const passedWeeks = Math.floor(passedDays / 7);
    
    if (passedWeeks % 2 === 0) {
      return less_odd;
    } else {
      return less_even;
    }
  }
}

export default [
  [ // Понедельник
    new DoubleLess(
      new Lesson("Գրաֆ․ ինտեր․ ծրագր․ Լաբ․", 5401, "Մանւկյան Վ․ Սաֆարյան Ա․", "09:30", "10:50"), // ?
      new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց Լաբ․2", 57001, "Թումանյան Լ․", "09:30", "10:50"),
    ),
    new Lesson("Գրաֆ․ ինտեր․ ծրագր․ Դաս", 5401, "Մանւկյան Վ․", "11:00", "12:20"),
    new Lesson("Ֆիզկուլտուրա", null, "Ինյան", "12:50", "14:10"),
    new DoubleLess(
      new Lesson("Տեղեկատվ․ անվտանգություն․ Լաբ․", 5401, "Մինասյան Լ․", "14:20", "15:40"),
      new Lesson("Դինամիկ վեբ կայքերի նախագծում դաս", 51009, "Պողոսյան Մ․", "14:20", "15:40")
    ),
  ],

  [ // Вторник
    new Lesson("Ձեռներեցություն Դաս, գործ", 51302, "Մարկոսյան Մ․", "09:30", "10:50"),
    new Lesson("Գրաֆ․ ինտեր․ ծրագր․ Լաբ․", "5706, 5117", "Մանւկյան Վ․ Սաֆարյան Ա․", "11:00", "12:20"),
    new Lesson("Կազմակ․ մարքեթ․ գործ․  Դաս, Գործ", 5011, "Վարդանյան Գ․", "12:50", "14:10"),
    new DoubleLess(
      null,
      new Lesson("Դինամիկ վեբ կայքերի նախագծում դաս", 5704, "Մխիթարյան Լ․", "14:20", "15:40"),
    ),
  ],

  [ // Среда
    new Lesson("Կետային գրաֆիկա լաբ․", "5104, 5119", "Ռահանյան Գ․ Նորեկյան Ա․", "09:30", "10:50"),
    new Lesson("Տեղեկատվ․ անվտանգություն․ Լաբ․", "5104, 5104", "Մինասյան Լ․ Մխիթարյան Լ․", "11:00", "12:20"),
    new Lesson("Դինամիկ վեբ կայքերի նախագծում դաս", 51009, "Պողոսյան Մ․", "12:50", "14:10"),
    new DoubleLess(
      new Lesson("Դինամիկ վեբ կայքերի նախագծում Լաբ․2", 51009, "Պողոսյան Մ․", "14:20", "15:40"),
      new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց Լաբ․2", 5108, "Մարուխյան Մ․", "14:20", "15:40"),
    ),
  ],

  [ // Четверг
    new Lesson("Կետային գրաֆիկա լաբ․", "5108, 5120", "Պողոսյան Մ․", "09:30", "10:50"),
    new Lesson("Ձեռներեցություն Դաս, գործ", 1309, "Մարկոսյան Մ․", "11:00", "12:20"),
    new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբ", 5108, "Թումանյան Ն․ Մարուխյան Մ․", "12:50", "14:10"),
    new DoubleLess(
      new Lesson("Կազմակ․ մարքեթ․ գօրծ․ Դաս․", 51305, "Վարդանյան Գ․", "14:20", "15:40"),
      null,
    ),
  ],

  [ // Пятница
    new DoubleLess(
      new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբէ", 5704, "Թումանյան Ն․", "09:30", "10:50"),
      new Lesson("Դիսկրետ մա․ հիմ․ Գործ", 12304, "Հարությունյան Է․", "09:30", "10:50")
    ),
    new Lesson("Դիսկրետ մաթ․ հիմ․ Դաս․ գործ", 12304, "Հարությունյան Է․", "11:00", "12:20"),
    new Lesson("Ձեռներեցություն Դաս․ գործ", 5005, "Մարկոսյան Մ․", "12:50", "14:10"),
    new Lesson("Դինամիկ վեբ կայքերի նախագծում Լաբ․", 51009, "Պողոսյան Մ․ Մխիթարյան Լ․", "14:20", "15:40"),
  ],
];