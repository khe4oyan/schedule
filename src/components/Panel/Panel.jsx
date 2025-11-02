// libs
import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbCirclesFilled } from "react-icons/tb";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Panel({ setTab }) {
  const [isThemeUpdated, updateTheme] = useVersion("theme", 2);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);
  const [isPressed, setIsPressed] = useState(false);

  const onClick = (ind) => {
    window.scrollTo({ top: 0 });
    setTab(ind);
  };

  const showButtons = () => {
    setIsPressed(true);
  }

  useEffect(() => {
    if (!isPressed) {
      return;
    }

    const handleTouchEnd = (e) => {
      const { clientX, clientY } = e.changedTouches[0];
      const element = document.elementFromPoint(clientX, clientY);
      const btn = element?.closest("[data-btn]");

      if (btn) {
        switch (btn.dataset.btn) {
          case "lessons": {
            onClick(1);
            break;
          }

          case "themes": {
            onClick(0);
            isThemeUpdated && updateTheme();
            break;
          }

          case "settings": {
            onClick(2);
            updateSettings();
            break;
          }

          default: {
            break;
          }
        }
      }

      setIsPressed(false);
    };

    const handleMove = (e) => {
      e.preventDefault();
    }

    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }, [isPressed]);

  return (
    <>
      <button
        className={`${classes.button} ${classes.menuButton}`}
        onTouchStart={showButtons}
      >
        <TbCirclesFilled />
      </button>

      {
        isPressed &&
        <>
          <div className={`${classes.button} ${classes.settingsButton}`} data-btn="settings">
            <IoSettingsSharp />
            {isSettingsUpdated && <NotificationCircle />}
          </div>

          <div className={`${classes.button} ${classes.lessonsButton}`} data-btn="lessons">
            <BsList />
          </div>

          <div className={`${classes.button} ${classes.themesButton}`} data-btn="themes">
            <PiCircleHalfTiltFill />
            {isThemeUpdated && <NotificationCircle />}
          </div>
        </>
      }
    </>
  )
}