// classes
import Practice from "../classes/Practice.class.js";

const mxitaryan = "Մխիթարյան Լ.";
const poghoxyan = "Պողոսյան Մ.";
const manukyanQ = "Մանուկյան Ք․";

/*
"09:30", "10:50"
"11:00", "12:20"
"12:50", "14:10"
"14:20", "15:40"
*/

const practice = [
  [
    /*  Понедельник */
    null,
    null,
    new Practice("5", "1", "2", mxitaryan, "12:50", "14:10"),
    new Practice("5", "10", "9", poghoxyan, "14:20", "15:40"),
  ],

  [
    /*  Вторник */
  ],

  [
    /*  Среда */
  ],

  [
    /*  Четверг */
    new Practice("5", "10", "9", poghoxyan, "09:30", "10:50"),
    new Practice("5", "1", "2", mxitaryan, "11:00", "12:20"),
  ],
  
  [
    /*  Пятница */
    null,
    new Practice("5", "1", "2", manukyanQ, "11:00", "12:20"),
    new Practice("5", "1", "5", mxitaryan, "12:50", "14:10"),
  ],
];

export default practice;
