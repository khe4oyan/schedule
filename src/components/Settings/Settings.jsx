// copmonents
import SettingsOption from '../SettingsOption/SettingsOption';

// styles
import classes from './styles.module.css';

export default function Settings() {
  return (
    <div className={classes.root}>
      <SettingsOption 
        optionName="Ցուցադրել վերնագիրը"
        optionKey="headerShow"
        defaultValue={true}
        isRequiredToReload={true}
        />

      <SettingsOption 
        optionName="Անջատել դասի գրադիենտը"
        optionKey="lessonLineDisabled"
      />

      <div className={classes.lastUpdateDateContainer}>
        <p className={classes.lastUpdateDate}>Թարմացվել է</p>
        <p className={classes.lastUpdateDate}> {timerFormat("2026-01-24 10:43")} առաջ</p>
      </div>
    </div>
  )
}

function timerFormat(inputDate) {
  const updateDate = new Date(inputDate);
  const currentDate = new Date();

  const diffSeconds = Math.floor((currentDate - updateDate) / 1000);
  if (diffSeconds < 60) return `${diffSeconds} վայրկյան`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} րոպե`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} ժամ`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} օր`;
}
