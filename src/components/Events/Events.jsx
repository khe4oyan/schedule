// components
import Event from '../Event';

// styles
import classes from './styles.module.css';

const eventTypes = {
  start: "start",
  finish: "finish",
  line: "line",
  stugarq: "stugarq",
};

const events = [
  { type: "start" },
  { type: "line" },
  {
    type: eventTypes.stugarq,
    date: "27.11.2025",
    time: ["09:30" , "09:30"],
    title: "Դինամիկ վեբ կայքերի նախագծում (PHP)",
    lessons: ["51009", "51010"],
    teachers: ["Պողոսյան Մ․", "Մխիթարյան Լ․"],
  },
  { type: "line" },
  { type: "finish" },
];

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
          }
        })
      }
    </div>
  )
}