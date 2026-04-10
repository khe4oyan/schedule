// components
import EventCard from "../../components/EventCard";

// constants
import events from "../../constants/events";

// styles
import classes from "./styles.module.css";

export default function EventsPage() {
  return (
    <div className={classes.root}>
      <EventsList headerText="Ակնկալվող " evetsList={events.featureEvents} />
      <EventsList headerText="Ավարտված " evetsList={events.prevEvents} />
    </div>
  );
}

function EventsList({ headerText, evetsList }) {
  return (
    <div className={classes.events}>
      {headerText && <h3 className={classes.sectionHeaderText}>{headerText}</h3>}

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
