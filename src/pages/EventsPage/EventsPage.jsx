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

      <EventsList headerText="Ակնկալվող " evetsList={events.featureEvents} />
      <EventsList headerText="Ավարտված " evetsList={events.prevEvents} />
    </div>
  );
}

function EventsList({ headerText, evetsList }) {
  return (
    <div className={classes.events}>
      {headerText && <h3>{headerText}</h3>}

      {evetsList.length === 0 ? (
        <div className={classes.noEvents}>
          Միջոցառումներ չկան
        </div>
      ) : (
        evetsList.map((eventData, ind) => (
          <EventCard data={eventData} key={ind} />
        ))
      )}
    </div>
  );
}
