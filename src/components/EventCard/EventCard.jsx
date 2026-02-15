// libs
import { MdToday } from "react-icons/md";
import { MdPlace } from "react-icons/md";

// utils
import dateFormat from '../../utils/dateFormat';

// styles
import classes from './styles.module.css';

export default function EventCard({ data }) {
  const {
    title, 
    place, 
    date,
  } = data;

  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>

      <div className={`${classes.place} ${classes.withIcon}`}>
        <MdPlace />
        <p> {place}</p>
      </div>
    
      <div className={`${classes.date} ${classes.withIcon}`}>
        <MdToday />
        <p>{dateFormat(date)}</p>
      </div>
    </div>
  )
}