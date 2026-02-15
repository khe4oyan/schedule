// components
import EventCard from "../../components/EventCard";

// constants
import events from "../../constants/events";

// styles
import classes from "./styles.module.css";

export default function EventsPage() {
  return (
    <div className={classes.root}>
      <h2 className={classes.headerText}>Միջոցառումներ</h2>

      <div className={classes.events}>
        {events.map((eventData, ind) => (
          <EventCard data={eventData} key={ind} />
        ))}
      </div>
    </div>
  );
}
