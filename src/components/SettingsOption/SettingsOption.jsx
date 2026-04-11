// libs
// import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";


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
      {
        isActiveLine ?
        <FaToggleOn size={50} className={classes.toggleActive}/>:
        <FaToggleOn size={50} className={classes.toggle}/>
      }
    </button>
  )
}