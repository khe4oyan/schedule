// classes
import Event from "../classes/Event.class.js";

const allEvents = [
  new Event("Դատարան", "Նազարբեկյան 40", "2026-02-20 10:00"),
  new Event("Դատարան", "Նազարբեկյան 40", "2026-02-27 10:00"),
  new Event("Դատարան", "Նազարբեկյան 40", "2026-03-10 10:00"),
];

const prevEvents = [];
const featureEvents = [];

for (let i = 0; i < allEvents.length; ++i) {
  const event = allEvents[i];
  const { date } = event;

  const eDate = new Date(date);
  const nDate = new Date();

  if (eDate - nDate < 0) {
    prevEvents.push(event.setIsPrev());
  } else {
    featureEvents.push(event);
  }
}

const events = { featureEvents, prevEvents };

export default events;
