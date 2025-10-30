// libs
import { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

// custom hooks
import useSettingsOption from '../../customHooks/useSettingsOption';

// styles
import classes from './styles.module.css';

export default function SettingsOption({ 
  optionName, 
  optionKey, 
  defaultValue = false, 
  isRequiredToReload = false 
}) {
  const [isDisabledLine, toggleDisabledLine] = useSettingsOption(optionKey, defaultValue);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked(true);
    toggleDisabledLine();
  }

  return (
    <button onClick={onClick} className={classes.root}>
      <p className={classes.optionName}>{optionName}</p>

      {
        isDisabledLine ?
        <BsToggleOn size={50} className={classes.icon}/> :
        <BsToggleOff size={50} className={classes.icon}/>
      }

      {
        isRequiredToReload && isClicked &&
        <p className={classes.reloadTitle}>need reload for view result</p>
      }

    </button>
  )
}