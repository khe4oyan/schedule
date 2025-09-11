export default function filterLessons(lessons) {
  // const dayOnWeek = new Date().getDay() - 1;
  const dayOnWeek = 0;
  const lessonsOnDay = lessons[dayOnWeek];
  return lessonsOnDay;
}