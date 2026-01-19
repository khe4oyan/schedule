// libs
import { FaTelegram } from "react-icons/fa6";

// styles
import classes from './styles.module.css';

export default function Telegram() {
  return (
    <a className={classes.root} target="_blank" rel="noreferrer" href='https://t.me/+0OqDVQ1keQ00Y2Uy'>
      <span>
        <FaTelegram /> 
      </span>
      <span>
        Telegram
      </span>
    </a>
  )
}