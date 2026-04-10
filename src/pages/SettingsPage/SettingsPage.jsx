// libs
import { Link } from "react-router-dom";
import { PiCircleHalfTiltFill } from "react-icons/pi";

// components
import SettingsOption from "../../components/SettingsOption";
import NotificationCircle from "../../components/NotificationCircle";
import Storage from '../../components/Storage';

// hooks
import useVersion from "../../customHooks/useVersion";

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";
import SETTINGS from "../../constants/settings";

// styles
import classes from "./styles.module.css";

export default function SettingsPage() {
  const [isShowThemeUpdate, updateThemeVersion] = useVersion("theme", VERSIONS.THEME);
  const {
    lastUpdateAt,
    optionsValues,
    optionsKeys
  } = SETTINGS;

  return (
    <div className={classes.root}>
      {
        optionsKeys.map(optionKey =>
          <SettingsOption
            optionData={optionsValues[optionKey]}
            optionKey={optionKey}
            key={optionKey}
          />
        )
      }

      <Link to={routes.THEME} onClick={updateThemeVersion} className={classes.themeLink}>
        <span>Թեմաներ</span>
        <PiCircleHalfTiltFill size="2rem"/>
        {isShowThemeUpdate && <NotificationCircle />}
      </Link>

      <div className={classes.lastUpdateDateContainer}>
        <p className={classes.lastUpdateDate}>Թարմացվել է</p>
        <p className={classes.lastUpdateDate}>
          {timerFormat(lastUpdateAt)} առաջ
        </p>
      </div>

      <Storage />
    </div>
  );
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
