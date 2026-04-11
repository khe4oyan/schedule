// libs
import { Link } from "react-router-dom";
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { GrStorage } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";

// components
import SettingsOption from "../../components/SettingsOption";
import NotificationCircle from "../../components/NotificationCircle";

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
        <PiCircleHalfTiltFill size="2.4rem"/>
        {isShowThemeUpdate && <NotificationCircle />}
      </Link>

      <Link to={routes.STORAGE} className={classes.themeLink}>
        <span>Տվյալների պահեստ</span>
        <GrStorage size="2.3rem"/>
      </Link>

      <Link to={routes.INFO} className={classes.themeLink}>
        <span>Ինֆո</span>
        <BsInfoCircle size="2.3rem"/>
      </Link>
    </div>
  );
}
