// utils
import timeFormat from '../../utils/timeFormat';

// constants
import SETTINGS from '../../constants/settings';

// styles
import classes from './styles.module.css';

export default function InfoPage() {
  const { lastUpdateAt } = SETTINGS;

  return (
    <div className={classes.root}>
      <div className={classes.lastUpdateDateContainer}>
        <p className={classes.lastUpdateDate}>Թարմացվել է</p>
        <p className={classes.lastUpdateDate}>
          {timeFormat(lastUpdateAt)} առաջ
        </p>
      </div>
    </div>
  )
}