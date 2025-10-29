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
  }

  getData() {
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

export default [
  [ // Понедельник
    new DoubleLess(
      new SingleLesson("Գրաֆ․ ինտեր․ ծրագր․ Լաբ․", "5401, 5102", "Մանուկյան  Վ․ Սաֆարյան Ա․", "09:30", "10:50"),
      new SingleLesson("Կիրառ. Հավելվ.ստեղծ. միջոց Դաս", 5701, "Թումանյան Ն․", "09:30", "10:50"),
    ),
    new SingleLesson("Գրաֆ․ ինտեր․ ծրագր․ Դաս", 5401, "Մանուկյան  Վ․", "11:00", "12:20"),
    new SingleLesson("Ֆիզկուլտուրա", null, "Ինյան", "12:50", "14:10"),
    new DoubleLess(
      new SingleLesson("Տեղեկատվ․ անվտանգություն․ Դաս", 5102, "Մինասյան Լ․", "14:20", "15:40"),
      new SingleLesson("Դինամիկ վեբ կայքերի նախագծում դաս", 51009, "Պողոսյան Մ․", "14:20", "15:40"),
    ),
  ],

  [ // Вторник
    new SingleLesson("Ձեռներեցություն Դաս, գործ", 51302, "Մարկոսյան Մ․", "09:30", "10:50"),
    new SingleLesson("Գրաֆ․ ինտեր․ ծրագր․ Լաբ․", "5706, 5103", "Մանուկյան  Վ․ Սաֆարյան Ա․", "11:00", "12:20"),
    new SingleLesson("Կազմակ․ մարքեթ․ գործ․  Դաս, Գործ", 5011, "Վարդանյան Գ․", "12:50", "14:10"),
    new DoubleLess(
      null,
      new SingleLesson("Դինամիկ վեբ կայքերի նախագծում Լաբ.2", 5704, "Մխիթարյան Լ․", "14:20", "15:40"),
    ),
  ],

  [ // Среда
    new SingleLesson("Կետային գրաֆիկա լաբ․", "5104, 5119", "Ռահանյան Գ․ Նորեկյան Ա․", "09:30", "10:50"),
    new SingleLesson("Տեղեկատվ․ անվտանգություն․ Լաբ․", 5102, "Մինասյան Լ․ Մխիթարյան Լ․", "11:00", "12:20"),
    new SingleLesson("Դինամիկ վեբ կայքերի նախագծում դաս", 51009, "Պողոսյան Մ․", "12:50", "14:10"),
    new DoubleLess(
      new SingleLesson("Դինամիկ վեբ կայքերի նախագծում Լաբ․2", 51009, "Պողոսյան Մ․", "14:20", "15:40"),
      new SingleLesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց Լաբ․2", 5117, "Մարուխյան Ա․", "14:20", "15:40"),
    ),
  ],

  [ // Четверг
    new SingleLesson("Կետային գրաֆիկա լաբ.", 5105, "Ռահանյան Գ. Նորեկյան Ա.", "09:30", "10:50"),
    new SingleLesson("Ձեռներեցություն Դաս, գործ", 1401, "Մարկոսյան Մ․", "11:00", "12:20"),
    new SingleLesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբ", "5120, 5121", "Թումանյան Ն․ Մարուխյան Ա․", "12:50", "14:10"),
    new DoubleLess(
      new SingleLesson("Կազմակ. մարքեթ. գործ. Դաս.", 51305, "Վարդանյան Գ․", "14:20", "15:40"),
      null,
    ),
  ],

  [ // Пятница
    new DoubleLess(
      new SingleLesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց լաբ 1", 5704, "Թումանյան Ն․", "09:30", "10:50"),
      new SingleLesson("Դիսկրետ մաթ. հիմ. Գործ", 5702, "Հարությունյան Է․", "09:30", "10:50"),
    ),
    new SingleLesson("Դիսկրետ մաթ. հիմ. Դաս, գործ", 12304, "Հարությունյան Է․", "11:00", "12:20"),
    new SingleLesson("Ձեռներեցություն Դաս․ գործ", 5005, "Մարկոսյան Մ․", "12:50", "14:10"),
    new SingleLesson("Դինամիկ վեբ կայքերի նախագծում Լաբ.", 51009, "Պողոսյան Մ․ Մխիթարյան Լ․", "14:20", "15:40"),
  ],
];
