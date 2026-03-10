// libs
import { Link } from "react-router-dom";
import { PiCircleHalfTiltFill } from "react-icons/pi";

// components
import SettingsOption from "../../components/SettingsOption";
import NotificationCircle from "../../components/NotificationCircle";

// hooks
import useVersion from "../../customHooks/useVersion";

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";

// styles
import classes from "./styles.module.css";

export default function SettingsPage() {
  const [isShowThemeUpdate, updateThemeVersion] = useVersion("theme", VERSIONS.THEME);

  return (
    <div className={classes.root}>
      <SettingsOption
        optionName="Անջատել դասի գրադիենտը"
        optionKey="lessonLineDisabled"
      />

      <Link to={routes.THEME} onClick={updateThemeVersion} className={classes.themeLink}>
        <PiCircleHalfTiltFill />
        {isShowThemeUpdate && <NotificationCircle />}
      </Link>

      <div className={classes.lastUpdateDateContainer}>
        <p className={classes.lastUpdateDate}>Թարմացվել է</p>
        <p className={classes.lastUpdateDate}>
          {timerFormat("2026-03-10 09:40")} առաջ
        </p>
      </div>

      <div className={classes.versionContainer}>
        <p>v.1.10.1</p>
      </div>
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
