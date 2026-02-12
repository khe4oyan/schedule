// libs
import { CiClock2 } from "react-icons/ci";

// styles
import classes from './styles.module.css';

export default function Lesson({ data }) {
  const title = data?.title;
  const teacher = data?.teacher;
  const room = data?.room;
  const start = data?.start;
  const end = data?.end;
  const type = data?.type;
  const group = data?.subGroup;
  const tempRoom = data?.tempRoom;

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <p className={classes.title}>{title} {type && type } {group > 0 && group }</p>
      </div>

      <div className={classes.teacherBox}>
        <p className={classes.teacher}>{teacher}</p>
      </div>

      <div className={classes.room}>
        {
          tempRoom ? 
          <p><s>{room}</s> {tempRoom}</p> :
          <p>{room}</p>
        }
      </div>

      <div className={classes.footer}>
        <div className={classes.timeBox}> 
          <CiClock2 size={17} />
          <p className={classes.time}>{start} - {end}</p>
        </div>
      </div>
    </div>
  )
}