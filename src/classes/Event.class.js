export default class Event {
  constructor(title, place, date) {
    this.title = title;
    this.place = place;
    this.date = date;
    this.isPrev = false;
  }

  setIsPrev() {
    this.isPrev = true;
    return this;
  }
}
