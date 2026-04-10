// libs
import { useLocation } from 'react-router-dom';

// constants
import routes from '../../constants/routes';

// styles
import classes from './styles.module.css';

export default function Header() {
  const { pathname } = useLocation();

  const routeLabels = {
    [routes.EVENTS]: "Միջոցառումներ",
    [routes.PRACTICE]: "Պրակտիկա",
    [routes.SCHEDULE]: "Դասացուցակ",
    [routes.SCHEDULE_WEEK]: "Դասացուցակ",
    [routes.SETTINGS]: "Կարգավորումներ",
    [routes.THEME]: "Թեմաներ",
  };

  return (
    <header className={classes.root}>
      <h1 className={classes.headerText}>{routeLabels[pathname]}</h1>
    </header>
  )
}