// components
import Event from '../Event';

// constants
import { eventTypes, events } from '../../constants/events.js';

// styles
import classes from './styles.module.css';

export default function Events() {
  return (
    <div className={classes.root}>
      {
        events.map((event, ind) => {
          const type = event.type;

          switch (type) {
            case eventTypes.stugarq:
              return <Event
                key={ind}
                data={event}
              />
            case eventTypes.line:
              return <div className={classes.line} key={ind}></div>
            case eventTypes.start:
              return <div className={classes.start} key={ind}></div>
            case eventTypes.finish:
              return <div className={classes.finish} key={ind}></div>
            case eventTypes.date:
              return <div className={classes.date} key={ind}>{event.title}</div>
          }
        })
      }
    </div>
  )
}