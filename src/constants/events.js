export const eventTypes = {
  start: "start",
  finish: "finish",
  line: "line",
  stugarq: "stugarq",
  date: "date",
};

export const events = [
  { type: eventTypes.start },
  { type: eventTypes.line },
  { type: eventTypes.date, title: "27.11.2025" },
  { type: eventTypes.line },
  {
    type: eventTypes.stugarq,
    time: ["09:30" , "09:30"],
    title: "Դինամիկ վեբ կայքերի նախագծում (PHP)",
    lessons: ["51009", "51010"],
    teachers: ["Պողոսյան Մ․", "Մխիթարյան Լ․"],
  },
  { type: eventTypes.line },
  { type: eventTypes.finish },
];
