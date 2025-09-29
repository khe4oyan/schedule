export default function isAcademicTopLessonDay() {
  // calculate weeknumber from September 1
  const startTime = new Date(2025, 8, 1).getTime();
  const nowDate = new Date();
  const nowTime = nowDate.getTime();
  const passedTime = nowTime - startTime;

  const passedDays = Math.floor(passedTime / 1000 / 60 / 60 / 24);
  let passedWeeks = Math.floor(passedDays / 7);

  return passedWeeks % 2 === 0;
}