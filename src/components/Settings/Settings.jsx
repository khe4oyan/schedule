// copmonents
import SettingsOption from '../SettingsOption/SettingsOption';

// styles
import classes from './styles.module.css';

export default function Settings() {
  return (
    <div className={classes.root}>
      <SettingsOption 
        optionName="Show header"
        optionKey="headerShow"
        defaultValue={true}
        isRequiredToReload={true}
      />

      <SettingsOption 
        optionName="Disabled lesson gradient line"
        optionKey="lessonLineDisabled"
      />
    </div>
  )
}