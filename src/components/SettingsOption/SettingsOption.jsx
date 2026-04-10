// custom hooks
import useSettingsOption from '../../customHooks/useSettingsOption';

// styles
import classes from './styles.module.css';

export default function SettingsOption({ optionData }) {
  const { name } = optionData;
  const [isActiveLine, toggleDisabledLine] = useSettingsOption(optionData);

  return (
    <button onClick={toggleDisabledLine} className={classes.root}>
      <p className={classes.optionName}>{name}</p>
      <div className={`${classes.toggleLine} ${isActiveLine && classes.toggleLineActive}`}></div>
    </button>
  )
}