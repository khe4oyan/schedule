// styles
import classes from './styles.module.css';

export default function DoubleLessonChanger({ setIsWeekToggled, isWeekToggled }) {
  const onClick = () => setIsWeekToggled(prev => !prev);

  return (
    <button className={classes.root} onClick={onClick}>
      <p className={`${isWeekToggled && classes.inActiveP}`}>Համարիչ</p>
      <div className={`${classes.border} ${!isWeekToggled && classes.borderActive}`}></div>
      <p className={`${!isWeekToggled && classes.inActiveP}`}>Հայտարար</p>
    </button>
  )
}