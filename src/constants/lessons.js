// classes
import SingleLesson from '../classes/SingleLesson.class.js';
// import DoubleLesson from '../classes/DoubleLesson.class.js';

const items = {
  php: "Դինամիկ վեբ կայքերի նախագծում",
  control: "Կառավարման գործ. կազմակերպում.",
  behaviour: "Վարվելակերպի հիմունքներ",
  sociology: "Քաղաքագիտություն և սոցիոլոգիայի հիմունքներ",
  math: "Դիսկրետ մաթեմ. կիռարութ",
  photoshop: "Վեկտորային գրաֆիկա",
  fizkult: "Ֆիզկուլտ",
  permission: "Իրավունքի հիմունքներ",
};

const tch = {
  poghoxyan: "Պողոսյան Մ.",
  mxitaryan: "Մխիթարյան Լ.",
  markosyan: "Մարկոսյան Մ․",
  grigoryanL: "Գրիգորյան Լ․",
  harutyunyanE: "Հարությունյան Է.",
  rahanyanG: "Ռահանյան Գ․",
  norekyanA: "Նորեկյան Ա․",
  ch: "Չ - ?",
  voskanyan: "Ոսկանյան Տ․",
};

const lessons = [
  [ // Понедельник
    new SingleLesson(items.php, "51009 51009", `${tch.poghoxyan} ${tch.mxitaryan}`).isLab().time(1),
    new SingleLesson(items.control, "51301", tch.markosyan).isLesson().isPractice().time(2),
    new SingleLesson(items.behaviour, "51301", tch.grigoryanL).isLesson().isPractice().time(3),
    new SingleLesson(items.sociology, "51301", tch.grigoryanL).isLesson().time(4),
  ],
  
  [ // Вторник
    new SingleLesson(items.math, "51106", tch.harutyunyanE).isPractice().time(1),
    new SingleLesson(items.photoshop, "5118 5121", `${tch.rahanyanG} ${tch.norekyanA}`).isLab().time(2),
    new SingleLesson(items.sociology, "51301", tch.grigoryanL).isLesson().isPractice().time(3),
    new SingleLesson(items.control, "51301", tch.markosyan).isLesson().isPractice().time(4),
  ],
  
  [ // Среда
    new SingleLesson(items.php, "51009", tch.poghoxyan).isLesson().time(1),
    new SingleLesson(items.control, "51302", tch.markosyan).isLesson().time(2),
    new SingleLesson(items.fizkult, null, tch.ch).time(3),
  ],
  
  [ // Четверг
    new SingleLesson(items.math, "5011", tch.harutyunyanE).isLesson().isPractice().time(2),
    new SingleLesson(items.photoshop, "5118 5119", `${tch.rahanyanG} ${tch.norekyanA}`).isLab().time(3),
    new SingleLesson(items.sociology, "51301", tch.grigoryanL).isLesson().isPractice().time(4),
  ],
  
  [ // Пятница
    new SingleLesson(items.permission, "17413", tch.voskanyan).isLesson().time(1),
    new SingleLesson(items.permission, "17413", tch.voskanyan).isPractice().time(2),
    new SingleLesson(items.photoshop, "5102 5102", `${tch.rahanyanG} ${tch.norekyanA}`).isLab().time(3),
    new SingleLesson(items.php, "51009", tch.poghoxyan).isLesson().time(4),
  ],
];

export default lessons;