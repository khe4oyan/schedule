// styles
import classes from './styles.module.css';

export default function Event({ data }) {
  const {
    date,
    time,
    title,
    lessons,
    teachers,
  } = data;

  return (
    <div className={classes.root}>
      <p className={classes.date}>{date}</p>
      <h2>{title}</h2>
      
      <div>
        <div className={classes.table}>
          <p>1-ին խումբ</p>
          <p>2-րդ խումբ</p>
        </div>

        <div className={classes.table}>
          <p>{time[0]} - {lessons[0]}</p>
          <p>{time[1]} - {lessons[1]}</p>
        </div>

        <div className={classes.table}>
          <p>{teachers[0]}</p>
          <p>{teachers[1]}</p>
        </div>
      </div>
    </div>
  )
}