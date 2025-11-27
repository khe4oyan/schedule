// classes
import Practice from '../classes/Practice.class.js'

export default [
  [ /*  Понедельник */],

  [ /*  Вторник */],

  [ /*  Среда */
    new Practice(5, 10, 10, "Մանուկյան Լ", "09:30", "10:50"),
    new Practice(5, 10, 8, "Պողոսյան Մ", "11:00", "12:20"),
  ],

  [ /*  Четверг */
    null,
    new Practice(5, 10, 8, "Պողոսյան Մ", "11:00", "12:20"),
    new Practice(5, 10, 8, "Մանուկյան Ք", "12:50", "14:10"),
  ],

  [ /*  Пятница */
    null,
    null,
    new Practice(5, 10, 9, "Պողոսյան Ա", "12:50", "14:10"),
    new Practice(5, 7, 6, "Մանուկյան Վ", "14:20", "15:40"),
  ],
];