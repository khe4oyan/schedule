// styles
import classes from './styles.module.css';

export default function EmptyMessage({ text }) {
  return (
    <div className={classes.root}>
      <h2>{text}</h2>
    </div>
  )
}