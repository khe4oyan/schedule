export default class Event {
  constructor(title, place, date) {
    this.title = title;
    this.place = place;
    this.date = date;
    this.isPrev = false;
    this.isExam = false;
  }

  setIsPrev() {
    this.isPrev = true;
    return this;
  }

  setIsExam() {
    this.isExam = true;
    return this;
  }
}
