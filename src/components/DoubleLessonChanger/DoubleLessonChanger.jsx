// styles
import classes from './styles.module.css';

export default function DoubleLessonChanger({ setIsTopLesson, isTopLesson }) {
  const onClick = () => setIsTopLesson(prev => !prev);

  return (
    <button className={classes.root} onClick={onClick}>
      <p className={`${!isTopLesson && classes.inActiveP}`}>Համարիչ</p>
      <div className={`${classes.border} ${!isTopLesson && classes.borderActive}`}></div>
      <p className={`${isTopLesson && classes.inActiveP}`}>Հայտարար</p>
    </button>
  )
}