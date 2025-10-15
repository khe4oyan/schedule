// libs
import { useState } from 'react';

// custom hooks
import useVersion from '../../customHooks/useVersion';

// styles
import classes from './styles.module.css';

export default function Theme({ newTheme }) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowNot, updateVersion] = useVersion("theme", 2);

  const buttons = [
    { theme: "colors_default", version: 0 },
    { theme: "colors_dark", version: 1 },
    { theme: "colors_pink", version: 1 },
    { theme: "colors_space", version: 1 },
    { theme: "colors_glass", version: 2, customIcon: true},
  ];

  const onClickTheme = (className) => {
    newTheme(className);
    setIsShowMenu(false);
  }

  const isShowMenuClick = () => {
    setIsShowMenu(prev => !prev);
    updateVersion();
  }

  return (
    <>
      <button className={`${classes.themeButton} ${isShowNot && "notificationFixed"}`} onClick={isShowMenuClick}>🎨</button>
      {
        isShowMenu &&
        <div className={classes.menu}>
          {
            buttons.map(buttonClass =>
              <ThemeButton
                key={buttonClass.theme}
                buttonClass={buttonClass}
                onClickTheme={onClickTheme}
              />
            )
          }
        </div>
      }
    </>
  )
}

function ThemeButton({ buttonClass, onClickTheme }) {
  const [isShowNot, updateVersion] = useVersion(buttonClass.theme, buttonClass.version);

  const onClickHandler = () => {
    onClickTheme(buttonClass.theme);
    updateVersion();
  }
  
  return (
    <button
      key={buttonClass.theme}
      className={`${buttonClass.theme} ${buttonClass?.customIcon ? `${classes.themeOnlySize} ${classes.customIcon} ${classes.colors_glass}` : classes.theme} ${isShowNot && "notificationRelative"}`}
      onClick={onClickHandler}
    ></button>
  );
}