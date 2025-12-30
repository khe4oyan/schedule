// styles
import classes from './styles.module.css';

export default function DoubleLessonChanger({ setIsTopLesson, isTopLesson }) {
  const onClick = () => setIsTopLesson(prev => !prev);
  
  return (
    <button className={classes.root} onClick={onClick}>
      <div>
        <p className={classes.statusText}>{isTopLesson ? "Համարիչ" : "Հայտարար"} </p>
      </div>

      <div className={classes.statusBox}>
        <div className={`${classes.point} ${isTopLesson && classes.pointActive}`}></div>
        <div className={`${classes.point} ${!isTopLesson && classes.pointActive}`}></div>
      </div>
    </button>
  )
}