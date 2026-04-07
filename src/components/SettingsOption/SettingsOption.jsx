// libs
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

// custom hooks
import useSettingsOption from '../../customHooks/useSettingsOption';

// styles
import classes from './styles.module.css';

export default function SettingsOption({ optionData }) {
  const { name } = optionData;
  const [isDisabledLine, toggleDisabledLine] = useSettingsOption(optionData);

  return (
    <button onClick={toggleDisabledLine} className={classes.root}>
      <p className={classes.optionName}>{name}</p>

      {
        isDisabledLine ?
        <BsToggleOn size={50} className={`${classes.icon} ${classes.icon_on}`}/> :
        <BsToggleOff size={50} className={classes.icon}/>
      }
    </button>
  )
}