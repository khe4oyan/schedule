// copmonents
import SettingsOption from '../SettingsOption/SettingsOption';
import Telegram from '../Telegram/Telegram';

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

      <Telegram />
    </div>
  )
}